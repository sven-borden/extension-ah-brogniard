document.addEventListener('mouseenter', function (e) {
    try{
        console.log("enter");
        ​var hello = e.getElementsByTagName('p');
        console.log(hello);
        var str = hello.innerHTML;
        str = str.replace(​​​ /\b(the)\b/g, '<span onmouseover="func1()">$1</span>' );​​​​​​​​​​​​​​​​​​​
        hello.innerHTML = str;
    }
    catch (e){
        console.error(e);
    }
    function func1() {
    alert('there');
    }
}, false);


// // Unique ID for the className.
// var MOUSE_VISITED_CLASSNAME = 'crx_mouse_visited';

// // Previous dom, that we want to track, so we can remove the previous styling.
// var prevDOM = null;

// // Mouse listener for any move event on the current document.
// document.addEventListener('mousemove', function (e) {
//     let srcElement = e.srcElement;
//     console.log(srcElement.nodeName);
//     // Lets check if our underlying element is a IMG.
//     // if (prevDOM != srcElement && srcElement.nodeName == 'IMG') {
//     if (prevDOM != srcElement && srcElement.nodeName == 'div'){

//         // For NPE checking, we check safely. We need to remove the class name
//         // Since we will be styling the new one after.
//         if (prevDOM != null) {
//             prevDOM.classList.remove(MOUSE_VISITED_CLASSNAME);
//         }

//         // Add a visited class name to the element. So we can style it.
//         srcElement.classList.add(MOUSE_VISITED_CLASSNAME);

//         // The current element is now the previous. So we can remove the class
//         // during the next ieration.
//         prevDOM = srcElement;
//         console.info(srcElement.currentSrc);
//         console.dir(srcElement);
//     }
// }, false);