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

                  
function submitForm() {
  // 防止表單直接提交
  event.preventDefault();
  
  // 獲取表單數據
  var formData = new FormData(document.getElementById('contactForm'));
  
  // 使用 fetch API 發送數據
    console.log('開始提交表單...');
  fetch('https://script.google.com/a/macros/earliii.com/s/AKfycbxDNPygAQA8_EeN9iC-GbGPN-h8WZf-WADaZzXEBhDY_LqOlDcHGqE5Moh4EH2yQZaqSg/exec', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    console.log('收到回應:', response);
    return response.json();
  })
  .then(data => {
      console.log('處理數據:', data);
    if(data.result === 'success') {
      // 顯示成功訊息
      document.getElementById('successMessage').style.display = 'block';
      document.getElementById('contactForm').reset();
    } else {
      // 顯示錯誤訊息
      alert('提交失敗: ' + data.message);
    }
  })
  .catch(error => {
    console.error('錯誤:', error);
    alert('發生錯誤，請稍後再試');
  });
  
  return false;
}