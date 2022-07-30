// replacing all the elements with the word "lol"

let elements = Array.prototype.slice.call(
  document.querySelectorAll('p, h1, h2, h3, h4, h5, span, i')
);
elements.forEach(function(ele) {
  ele.textContent = ele.textContent.replace(/the/g, 'lol');
});