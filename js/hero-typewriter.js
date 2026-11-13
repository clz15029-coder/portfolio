/*
  TOPページMV左側の「PORTFOLIO」を、タイプライターのように
  1文字ずつ打ち出すアニメーション。
  ・打ち終わったあとも、末尾のカーソル(縦棒)が点滅し続ける
  ・prefers-reduced-motion の場合は何もせず、最初から全文を表示する
  ・JSが無効でもHTMLに全文が入っているので、そのまま読める
*/
(function () {
  var el = document.querySelector('.hero-type');
  if (!el) return;

  var text = el.getAttribute('data-type') || el.textContent.trim();
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  el.textContent = '';
  var i = 0;
  var timer = setInterval(function () {
    i += 1;
    el.textContent = text.slice(0, i);
    if (i >= text.length) clearInterval(timer);
  }, 130);
})();
