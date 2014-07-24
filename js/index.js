/**
 * Created by 路佳 on 2014/7/24.
 */
var reg = /iPhone OS (\d+)/
  , platform = navigator.userAgent.match(reg);
if (platform && platform[1] === '7') {
  var button = document.getElementsByClassName('download-button')[1];
  button.innerHTML = '敬请期待';
  button.classList.add('disabled');
  button.href = 'javascript:void(0);';
}