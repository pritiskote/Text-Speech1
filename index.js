document.getElementById('submitButtonEng').addEventListener('click', function () {
    var textVal = document.getElementById('largeTextarea').value;

    var utterance = new SpeechSynthesisUtterance(textVal);
    speechSynthesis.speak(utterance);
});
// document.getElementById('submitButtonSpan').addEventListener('click', function () {
//     var textVal = document.getElementById('largeTextarea').value;

//     var utterance = new SpeechSynthesisUtterance(textVal);
//     speechSynthesis.speak(utterance);
// });