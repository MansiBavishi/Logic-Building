export default class randomNumber { randomNumberGenerator(passed_range) { return Math.floor(Math.random() * (passed_range - 1)) + 1; } }

export function showHide(passedId, visibility) { document.getElementById(passedId).style.display = visibility; }

export function resetTextBox([...resetId]) { resetId.forEach(eachId => { document.getElementById(eachId).value = ''; }); }