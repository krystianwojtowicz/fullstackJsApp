// Select text input
const textInput = document.getElementById('year');
// Store the value of the input in a variable
let yearOfCompetition = textInput.value;
// When an input event is triggered update yaer
textInput.addEventListener('input', function (e) {
  yearOfCompetition = e.target.value;
})
// Select our form
const form = document.querySelector('form');
// When form is submitted print 'submitted' to the browser console
form.addEventListener('submit', function (e) {
  e.preventDefault();
  // make request to our API
  axios.get('http://localhost:3000/strongman/?year=' + yearOfCompetition)
    .then(function (response) {
      // select elements
      let year = document.querySelector('.yearOfCompetition');
      let champion = document.querySelector('.champion');
      let runnerup = document.querySelector('.runnerup');
      let errorMessage = document.querySelector('.error-message');
      if (response.data.year) {
        year.innerHTML = 'Year: ' + response.data.year;
        champion.innerHTML = 'Champion: ' + response.data['champion'];
        runnerup.innerHTML = 'Runner-up: ' + response.data['runnerup'];
      } else {
        errorMessage.innerHTML = "This year is not in our database"
      }
    })
    .catch(function (error) {
      console.log(error);
    })
  // clear input
  textInput.value = '';
})