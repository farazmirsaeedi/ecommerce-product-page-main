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

const incr = () => {
    number.value += 1
};
const decr = () => {
    number >= 1 ? number.value -= 1: null
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
