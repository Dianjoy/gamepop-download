/**
 * Created by 路佳 on 2014/7/24.
 */
var reg = /micromessenger/i
  , isWeixin = reg.test(navigator.userAgent);
if (isWeixin) {
  document.body.addEventListener('click', function (event) {
    if (event.target.className === 'download-button' ||
      event.target.parentNode.className === 'download-button') {
      document.getElementById('cover').className = 'show';
    }
  }, false);
}
