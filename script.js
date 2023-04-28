// var slideIndex = 0;
// ShowSlides();
// function ShowSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");

//     for(i=0;i< slides.length;i++)
//     {
//         slides[i].style.display="none";
//     }

//     slideIndex++;
//     if(slideIndex > slides.length)
//     {
//         slideIndex = 1;
//     }

//     for(i=0;i<dots.length;i++)
//     {
//         dots[i].className = dots[i].className.replace(" active","");
//     }

//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex -1].className +=" active";

//     setTimeout(ShowSlides,2000);
// }


const number = document.getElementById("number");
var res = 1;

const incr = () => {
    res++;
    number.innerHTML = res;


};
const decr = () => {
    number.innerHTML > 1 ? res-- : null
    
    number.innerHTML = res;
};


// var slider = document.querySelector('.slider');   // Get the slider element

// var slideTrack = slider.querySelector('.slide-track'); // Get the slide track element

// var slides = Array.from(slider.querySelectorAll('.slide')); // Get all the slides in an array

// var slideWidth = slides[0].getBoundingClientRect().width; // Get the width of a single slide

// var slideIndex = 0; // Set the initial slide index to 0 (first slide)

// // Set the initial transform on the slide track to match the current slide index

// slideTrack.style.transform = 'translateX(' + (-1 * (slideIndex * slideWidth)) + 'px)';

// function nextSlide() { // Function to move to next slide

//     if (slideIndex === slides.length - 1) { // If last slide, go back to first one

//         slideIndex = 0;

//     } else { // Otherwise, move one ahead in the array of slides

//         slideIndex++;

//     }

//     // Update transform property on track element to match current index position in array of slides

//     slideTrack.style.transform = 'translateX(' + (-1 * (slideIndex * slideWidth)) + 'px)';
// }

// -------

// function openModal() {
//     document.getElementById('myModal').style.display = "block";
//   }
  
//   function closeModal() {
//     document.getElementById('myModal').style.display = "none";
//   }
  
//   var slideIndex = 1;
//   showSlides(slideIndex);
  
//   function plusSlides(n) {
//     showSlides(slideIndex += n);
//   }
  
//   function currentSlide(n) {
//     showSlides(slideIndex = n);
//   }
  
//   function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("demo");
//     var captionText = document.getElementById("caption");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
//     captionText.innerHTML = dots[slideIndex-1].alt;
//   }