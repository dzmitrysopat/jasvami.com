const second_carousel = document.querySelector(".second_carousel"),
firstImg = second_carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".second_courses i");

let isDragStart = false, isDragging = false, prevPageY, prevScrollLeft, positionDiff;
const showHideIcons = () => {
    // showing and hiding prev/next icon according to second_carousel scroll left value
    let scrollWidth = second_carousel.scrollWidth - second_carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = second_carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = second_carousel.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the second_carousel scroll left else add to it
        second_carousel.scrollLeft += icon.id == "left_btn" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});
const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(second_carousel.scrollLeft - (second_carousel.scrollWidth - second_carousel.clientWidth) > -1 || second_carousel.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from second_carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;
    if(second_carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return second_carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    second_carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}
const dragStart = (a) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageY = a.pageY || a.touches[0].pageY;
    prevScrollLeft = second_carousel.scrollLeft;
}
const dragging = (a) => {
    // scrolling images/second_carousel to left according to mouse pointer
    if(!isDragStart) return;
    a.preventDefault();
    isDragging = true;
    second_carousel.classList.add("dragging");
    positionDiff = (a.pageY || a.touches[0].pageY) - prevPageY;
    second_carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}
const dragStop = () => {
    isDragStart = false;
    second_carousel.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}
second_carousel.addEventListener("mousedown", dragStart);
second_carousel.addEventListener("touchstart", dragStart);
document.addEventListener("mousemove", dragging);
second_carousel.addEventListener("touchmove", dragging);
document.addEventListener("mouseup", dragStop);
second_carousel.addEventListener("touchend", dragStop);
