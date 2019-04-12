// class Carousel {
//     constructor(car)  {
//         this.car = car;
//         this.slides = this.car.querySelectorAll('.carousel img');
//         this.slides = Array.from(this.slides).map( slide => new Slides(slide, this));
//         this.activeSlide = this.slides[0];
//         this.start();
//         this.leftArrow = this.car.querySelector(".left-button");
//         this.rightArrow = this.car.querySelector(".right-button");
//         this.leftArrow.addEventListener("click", () => {this.cycleLeft()});
//         this.rightArrow.addEventListener("click", () => {this.cycleRight()});
//     }

//     start() {
//         this.activeSlide.selectSlide();
//     }

//     updateActive(slideCard) {
//         this.activeSlide.deselectSlide();
//         this.activeSlide = slideCard;
//     }

//     setSlides(data){
//         return document.querySelectorAll(`.carousel img[data-slide="${data}"]`);
//     }

//     cycleLeft (){

//     }

//     cycleRight (){
//         this.updateActive(this.activeSlide);
//     }
// }

// class Slides {
//     constructor(child, parent) {
//         this.child = child;
//         this.parent = parent;
//         this.slides = this.parent.setSlides(this.child.dataset.slide);
//     }

//     selectSlide () {
//         this.parent.updateActive(this);
//         this.child.classList.add('active-slide');
//     }

//     deselectSlide () {
//         this.child.classList.remove('active-slide');
//     }
// }

// let carousel = document.querySelector('.carousel').forEach(car => new Carousel(car));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/