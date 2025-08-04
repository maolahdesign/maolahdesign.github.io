$(document).ready(function(){
    $('.brand button').on('click',function(){
        var buttonId = $(this).attr("id");
        var loadFileName = buttonId+'.html';
        $('.project').addClass('project_on');
        $('.project').load(loadFileName);
        $('body').attr('style', 'overflow: hidden;');
	});
    
    $(document).on('click', '.project_on button', function(){
        $('body').attr('style', '');
        $('.project').removeClass('project_on');
        $('.project').html('');
    });
    
});

function validateForm() {
    let isValid = true;
//
    // 清除所有錯誤消息
    document.querySelectorAll('.error-message').forEach(el => {
        el.textContent = '';
    });

    // 驗證姓名
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        document.getElementById('name-error').textContent = '請輸入您的姓名';
        isValid = false;
    } else if (name.length < 2) {
        document.getElementById('name-error').textContent = '姓名長度至少為2個字符';
        isValid = false;
    }

    // 驗證電子郵件
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('email-error').textContent = '請輸入您的電子郵件';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = '請輸入有效的電子郵件格式';
        isValid = false;
    }

    // 驗證電話 (選填，但如果輸入了就要符合格式)
    const phone = document.getElementById('phone').value.trim();
    if (phone !== '') {
        const phonePattern = /^[0-9+\-() ]{8,15}$/;
        if (!phonePattern.test(phone)) {
            document.getElementById('phone-error').textContent = '請輸入有效的電話號碼';
            isValid = false;
        }
    }

    // 驗證主旨
    const subject = document.getElementById('subject').value.trim();
    if (subject === '') {
        document.getElementById('subject-error').textContent = '請輸入主旨';
        isValid = false;
    }

    // 驗證訊息內容
    const message = document.getElementById('message').value.trim();
    if (message === '') {
        document.getElementById('message-error').textContent = '請輸入訊息內容';
        isValid = false;
    } else if (message.length < 10) {
        document.getElementById('message-error').textContent = '訊息內容至少需要10個字符';
        isValid = false;
    }

    return isValid;
}

// 表單提交函數
function submitForm() {
    
    // 進行表單驗證
    if (!validateForm()) {
        return false;
    }

    // 顯示Loading圖示
    document.getElementById('loading').style.display = 'block';

    // 獲取表單數據
    const formData = new FormData();
    formData.append('name', document.getElementById('name').value.trim());
    formData.append('email', document.getElementById('email').value.trim());
    formData.append('phone', document.getElementById('phone').value.trim());
    formData.append('subject', document.getElementById('subject').value.trim());

    // 獲取選中的類別
    const selectedCategory = document.querySelector('input[name="category"]:checked').value;
    formData.append('category', selectedCategory);

    formData.append('message', document.getElementById('message').value.trim());

    // 發送AJAX請求
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'send_email.php', true);
    xhr.onload = function() {
        // 隱藏Loading圖示
        document.getElementById('loading').style.display = 'none';

        if (xhr.status === 200) {
            try {
//                console.log('伺服器回應內容:', xhr.responseText);
                const response = JSON.parse(xhr.responseText);
                if (response.success) {
                    // 顯示成功消息
                    document.getElementById('success-message').style.display = 'block';
                    // 重置表單
                    document.getElementById('contactForm').reset();
                    // 5秒後隱藏成功消息
                    setTimeout(function() {
                        document.getElementById('success-message').style.display = 'none';
                    }, 5000);
                } else {
                    // 顯示服務器返回的錯誤
                    alert('發送失敗: ' + response.message);
                }
            } catch (e) {
                alert('處理響應時發生錯誤：');
            }
        } else {
            alert('請求失敗: ' + xhr.status);
        }
    };
    xhr.onerror = function() {
        // 隱藏Loading圖示
        document.getElementById('loading').style.display = 'none';
        alert('網絡錯誤，請稍後再試');
    };
    xhr.send(formData);

    return false;
}

