function showSection(sectionId) {
    var sections = document.getElementsByClassName('content');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    document.getElementById(sectionId).style.display = 'block';
    var links = document.getElementsByClassName('topnav')[0].getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
    }
    event.target.classList.add('active');
}
function checkQuiz() {
    var correctAnswers = {
        q1: 'b',
        q2: 'c',
        q3: 'b'
    };
    var score = 0;
    for (var question in correctAnswers) {
        var selected = document.querySelector('input[name="' + question + '"]:checked');
        if (selected && selected.value === correctAnswers[question]) {
            score++;
        }
    }
    var result = document.getElementById('result');
    result.innerHTML = 'You got ' + score + ' out of 3 questions correct!';
}
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}