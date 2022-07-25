function isExcluded(elm) {
    if (elm.tagName == "STYLE") {
      return true;
    }
    if (elm.tagName == "SCRIPT") {
      return true;
    }
    if (elm.tagName == "NOSCRIPT") {
      return true;
    }
    if (elm.tagName == "IFRAME") {
      return true;
    }
    if (elm.tagName == "OBJECT") {
      return true;
    }
    return false
}

function func1() {
    console.log("ahhhhh");
alert('the');
}

function replacer(node, parent) { 
    var r = /the/g;
    var result = r.exec(node.nodeValue);
    if(!result) { return; }

    var newNode = this.createElement('span');

    newNode.innerHTML = node
        .nodeValue
        .replace(r, '<span class="replaced">$&</span>');

    parent.replaceChild(newNode, node);
}

function traverse(elm) {
    if (elm.nodeType == Node.ELEMENT_NODE || elm.nodeType == Node.DOCUMENT_NODE) {

        // exclude elements with invisible text nodes
        if (isExcluded(elm)) {
        return
        }

        for (var i=0; i < elm.childNodes.length; i++) {
        // recursively call to traverse
        traverse(elm.childNodes[i]);
        }

    }

    if (elm.nodeType == Node.TEXT_NODE) {

        // exclude text node consisting of only spaces
        if (elm.nodeValue.trim() == "") {
        return
        }

        updateText(elm, elm.parentElement);
    }
}

traverse(document);
// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(const mutation of mutationsList) {
        traverse(mutation.target);
    }
}

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(document, config);