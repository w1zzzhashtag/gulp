document.addEventListener('DOMContentLoaded', function () {
    var questions = document.querySelectorAll('.frequent-requests__question');
    var answers = document.querySelectorAll('.frequent-requests__answer');
    for (var i = 0; i < questions.length; i++) {
        questions[i].onclick = function () {
            for (var i = 0; i < questions.length; i++) {
                questions[i].classList.remove('frequent-requests__question_active');
                answers[i].classList.remove('frequent-requests__answer_active');
            };
            this.classList.toggle('frequent-requests__question_active');
            answers[i].classList.toggle('frequent-requests__answer_active');
        };
    };
});