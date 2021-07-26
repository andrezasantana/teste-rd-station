// Function to change icon of menu hamburger
function changeIconMenu() {
    document.getElementById("active").classList.toggle("icon-change");
}
// funtion to show password of form
const btn = document.querySelector('#eye');
btn.addEventListener('click', function () {
    let passwordIntered = document.querySelector('#password');
    let eyeIcon = document.querySelector('#eye');

    if (passwordIntered.getAttribute('type') == 'password') {
        passwordIntered.setAttribute('type', 'text');
        eyeIcon.src = "/assets/open-eye.svg";
    } else {
        passwordIntered.setAttribute('type', 'password');
        eyeIcon.src = "/assets/close-eye.svg";
    }
});
// // // The function stops video playback when the modal is closed
// document.querySelector("#videoModal").addEventListener('hidden.bs.modal', function (e) {
//     console.log('teste');
//     // document.querySelector("#videoModal iframe").attr("src", document.querySelector("#videoModal iframe").attr("src"));
// });