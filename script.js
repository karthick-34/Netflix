var language = document.getElementById("language")
var english = document.getElementById("english")
var hindi = document.getElementById("hindi")
var selected_language = document.querySelector(".selected_language");
language.addEventListener("click", () => {
    selected_language.style.display = "block"
    english.addEventListener('click', () => {
        language.childNodes[0].nodeValue = english.textContent
        selected_language.style.display = "none"
    })
    hindi.addEventListener('click', () => {
        language.childNodes[0].nodeValue = hindi.textContent
        selected_language.style.display = "none"
    })

})

var questionDivs = document.querySelectorAll('.questions');

questionDivs.forEach(function (questionDiv) {
    var answerDiv = questionDiv.nextElementSibling;
    var plusIcon = questionDiv.querySelector('.fi-ss-plus');
    var closeIcon = questionDiv.querySelector('#close');

    questionDiv.addEventListener('click', function () {
        if (answerDiv.style.display === 'none' || answerDiv.style.display === '') {
            answerDiv.style.display = 'block';
            plusIcon.style.display = 'none';
            closeIcon.style.display = 'inline-block';
        } else {
            answerDiv.style.display = 'none';
            plusIcon.style.display = 'inline-block';
            closeIcon.style.display = 'none';
        }
    });
});
