
//// Get the modal
//for(let i = 1; i <= 3; i++) {
//    const modal = document.getElementById("modal-pin" + i);
//
//// Get the button that opens the modal
//    const pin = document.getElementById("pin" + i);
//
//// Get the <span> element that closes the modal
//    const span = document.getElementsByClassName("close")[i -1];
//
//// When the user clicks on the button, open the modal
//    pin.addEventListener("click", function(){
//        modal.style.display = "block";
//    });
//
//// When the user clicks on <span> (x), close the modal
//    span.addEventListener("click", function () {
//        modal.style.display = "none";
//    });
//
//// When the user clicks anywhere outside of the modal, close it
//    window.addEventListener("click", function (event) {
//        if(event.target === modal) {
//            modal.style.display = "none";
//        }
//    });
//}



// Get the modal

    const modal = document.getElementsByClassName("modal-pin");

// Get the button that opens the modal
    const pin = document.getElementsByClassName("pin");

// Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close");

for(let i = 0; i < modal.length; i++) {
// When the user clicks on the button, open the modal
    pin[i].addEventListener("click", function(){
        modal[i].style.display = "block";
    });

// When the user clicks on <span> (x), close the modal
    span[i].addEventListener("click", function () {
        modal[i].style.display = "none";
    });

// When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", function (event) {
        if(event.target === modal[i]) {
            modal[i].style.display = "none";
        }
    });
}
