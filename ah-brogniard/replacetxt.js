
function shoutAh() {
    console.log("ahhhhh");
    alert('the');
}

function walk(node) {

  var child, next;
  switch (node.nodeType) {

    case 1:
      handleText(node);
      break;
    case 9:
    case 11:
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3:
      break;
  }
}

function handleText(node) {
  var v = node.innerHTML;
  v = v.replace(/the/gi, '<span onmouseover="alert("the")">$&</span>');
  node.innerHTML = v;
}

walk(document.body);
