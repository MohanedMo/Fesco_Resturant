
// Get the top button
let topButton = document.querySelector(".topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}


// When the user clicks on the button, scroll to the top of the document
topButton.onclick = ()=>{
    document.documentElement.scrollTop = 0;
}
// function topFunction() {
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }




// Get icons and menu
let icons = document.querySelector(".icons")
let list = document.querySelector(".links")

// When i Click the icons, the menu will show
icons.onclick = ()=>{
  list.classList.toggle("show")
}