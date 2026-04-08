




const image = document.querySelector(".overlay .image img");
const button = document.querySelector(".button button");
const overlay = document.querySelector(".overlay");
const closeIcon = document.querySelector("#icon");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const images = [
    "./image/img-1.png",
    "./image/img-2.jpg",
    "./image/img-3.jpg",
    "./image/img-4.png",
    "./image/img-5.png",
    "./image/img-6.png",
    "./image/img-7.png",
    "./image/img-8.png",
    "./image/img-6.png",
];
let imageCount =0;

// /* show image */
function showImage(index) {
    image.src = images[index];
}

// /* popup open */
function handlePopup() {
    overlay.classList.add("active");
    showImage(imageCount);
}

// /* popup close */
function closePopup() {
    overlay.classList.remove("active");
}

// /* next */
function nexthandle() {
    if (imageCount < images.length - 1) {
        // imageCount = 0;
        imageCount++;
        showImage(imageCount);
    }
}

// /* prev */
function prevhandle() {
    if (imageCount > 0) {
        imageCount--;
        showImage(imageCount);
    }
}


// /* events */
button.addEventListener("click", handlePopup);
closeIcon.addEventListener("click", closePopup);
next.addEventListener("click", nexthandle);
prev.addEventListener("click", prevhandle);

// /* overlay click close */
overlay.addEventListener("click", closePopup);

// /* image click stop close */
document.querySelector(".image").addEventListener("click", e => {
    e.stopPropagation();
});
// image.forEach(img =>{
//     img.addEventListener("click",(e)=> {
//         e.stopPropagation();
//     });
// })



