$(document).ready(function(){
    $('.brand button').on('click',function(){
        console.log(1);
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

// Google Apps Script Web App URL
const scriptURL = 'https://script.google.com/macros/s/AKfycbxd3FtnFUfac6le29RECaZw2RubvtvlAOw4gQlsixvli7s6GVkqeg99tLsrTPceKBhJNg/exec';

// 表單提交處理函數
function submitForm() {
  // 獲取狀態顯示區域
  const statusDiv = document.getElementById('status');
  
  // 獲取表單數據
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
    category: document.querySelector('input[name="category"]:checked').value
  };
  
  // 驗證必填字段
  if (!formData.name || !formData.email || !formData.subject || !formData.message) {
    statusDiv.textContent = '請填寫所有必填字段';
    statusDiv.className = 'error';
    statusDiv.style.display = 'block';
    return false;
  }
  
  // 顯示提交中狀態
  statusDiv.textContent = '正在提交...';
  statusDiv.className = '';
  statusDiv.style.display = 'block';
  
  // 發送POST請求到Google Apps Script
  fetch(scriptURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('網絡回應不成功');
  })
  .then(data => {
    // 處理成功回應
    statusDiv.textContent = data.message || '表單提交成功！';
    statusDiv.className = 'success';
    document.getElementById('contactForm').reset(); // 重置表單
  })
  .catch(error => {
    // 處理錯誤
    console.error('Error:', error);
    statusDiv.textContent = '提交失敗，請稍後再試。';
    statusDiv.className = 'error';
  });
  
  // 阻止表單的默認提交行為
  return false;
}

