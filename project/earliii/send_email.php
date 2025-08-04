<?php
// 設定異常處理
ini_set('display_errors', 0);
error_reporting(E_ALL);

// 設定內容類型為JSON，以便返回AJAX響應
header('Content-Type: application/json');

// 接收和驗證表單數據
$response = array('success' => false, 'message' => '');

// 檢查是否為POST請求
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    $response['message'] = '只接受POST請求';
    echo json_encode($response);
    exit;
}

// 獲取表單數據並進行驗證
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$subject = isset($_POST['subject']) ? trim($_POST['subject']) : '';
$category = isset($_POST['category']) ? trim($_POST['category']) : '意見反饋';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// 再次驗證必填字段
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    $response['message'] = '請填寫所有必填字段';
    echo json_encode($response);
    exit;
}

// 驗證電子郵件格式
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $response['message'] = '請提供有效的電子郵件地址';
    echo json_encode($response);
    exit;
}

// 配置收件人電子郵件
$to = 'laverne@earliii.com'; 

// 創建郵件主題
$emailSubject = "聯絡表單: {$subject}";

// 創建郵件內容
$emailMessage = "
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        h2 {
            color: #0056b3;
            border-bottom: 1px solid #eee;
            padding-bottom: 10px;
        }
        .info-item {
            margin-bottom: 10px;
        }
        .label {
            font-weight: bold;
        }
        .message-content {
            background-color: #f9f9f9;
            padding: 15px;
            border-radius: 5px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class='container'>
        <h2>新的聯絡表單提交</h2>
        <div class='info-item'><span class='label'>姓名：</span> {$name}</div>
        <div class='info-item'><span class='label'>電子郵件：</span> {$email}</div>";

// 如果提供了電話，則添加到郵件中
if (!empty($phone)) {
    $emailMessage .= "<div class='info-item'><span class='label'>電話：</span> {$phone}</div>";
}

$emailMessage .= "
        <div class='info-item'><span class='label'>聯絡類別：</span> {$category}</div>
        <div class='info-item'><span class='label'>主旨：</span> {$subject}</div>
        <div class='message-content'>
            <p><span class='label'>訊息內容：</span></p>
            <p>" . nl2br(htmlspecialchars($message)) . "</p>
        </div>
    </div>
</body>
</html>
";

// 設置郵件頭信息
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: {$name} <{$email}>" . "\r\n";
$headers .= "Reply-To: {$email}" . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// 發送電子郵件
try {
    if (mail($to, $emailSubject, $emailMessage, $headers)) {
        $response['success'] = true;
        $response['message'] = '您的訊息已成功發送！';
    } else {
        $response['message'] = '發送郵件時出錯，請稍後再試';
        // 記錄錯誤到日誌文件
        error_log("郵件發送失敗: {$to}, {$emailSubject}");
    }
} catch (Exception $e) {
    $response['message'] = '發送郵件時發生異常';
    // 記錄錯誤到日誌文件
    error_log("郵件發送異常: " . $e->getMessage());
}

// 返回JSON響應
echo json_encode($response);
