var captchaResult = '';

function generateCaptchas() {
  var captchaChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  captchaResult = '';
  for (var i = 0; i < 6; i++) {
    captchaResult += captchaChars.charAt(Math.floor(Math.random() * captchaChars.length));
  }
  var canvas = document.createElement('canvas');
  canvas.width = 120;
  canvas.height = 40;
  var ctx = canvas.getContext('2d');
  // 绘制背景色
  ctx.fillStyle = '#f2f2f2';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // 绘制文字
  ctx.font = '30px Arial';
  ctx.fillStyle = 'black';
  ctx.textBaseline = 'middle';
  for (var i = 0; i < 6; i++) {
    ctx.fillText(captchaResult.charAt(i), 20 + i * 18, 20);
  }
  // 绘制随机线条
  for (var i = 0; i < 6; i++) {
    var startX = Math.random() * canvas.width;
    var startY = Math.random() * canvas.height;
    var endX = Math.random() * canvas.width;
    var endY = Math.random() * canvas.height;
    ctx.strokeStyle = '#aaa';
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  }
  var img = document.getElementById('captcha-img-2');
  img.src = canvas.toDataURL();
}

function refreshCaptcha() {
  generateCaptchas();
}

// 在窗口加载完成后立即生成验证码
window.onload = function() {
  generateCaptchas();
};