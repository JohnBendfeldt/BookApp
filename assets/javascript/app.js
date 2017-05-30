$(document).ready(function() {
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAWZf9g3SKBLeJP10gjBxfeDwbrfKaTRQY",
    authDomain: "bookapp-e9795.firebaseapp.com",
    databaseURL: "https://bookapp-e9795.firebaseio.com",
    projectId: "bookapp-e9795",
    storageBucket: "bookapp-e9795.appspot.com",
    messagingSenderId: "216382304423"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  //adds books to list
  $('#add-book-btn').on('click', function(event) {
  event.preventDefault();
  console.log('This is my book!')

  var firstBook = $('#book-name-input').val().trim();
  var bookLength = $('#length-input').val().trim();
  var pagesPerDay = $('#pages-input').val().trim();

  console.log(firstBook);
  console.log(bookLength);
  console.log(pagesPerDay);

  var newBook = {
  	dBfirstBook: firstBook,
  	dBbookLength: bookLength,
  	dBpagesPerDay: pagesPerDay,
  };

 database.ref().push(newBook);

 $('#book-name-input').val('');
 $('#length-input').val('');
 $('#pages-input').val('');

 //establishes day book was started
  var currentTime = moment().utc();

});


//creates child in database and creates row with input
database.ref().on('child_added', function(childSnapshot, prevChildKey) {
  //establishes childSnapshot variables
  var cSfirstBook = childSnapshot.val().dBfirstBook;
  var cSbookLength = childSnapshot.val().dBbookLength;
  var cSpagesPerDay = childSnapshot.val().dBpagesPerDay;
  var cStimeStart = childSnapshot.val().currentTime;
  

  var daysCompletion = (cSbookLength / cSpagesPerDay);
  //append book data to the table
  $('table > tbody').append('<tr><td>' + cSfirstBook + '</td><td>' + cStimeStart + '</td><td>' + cSbookLength + '</td><td>' + cSpagesPerDay +'</td><td>' + daysCompletion + '</td><td>');
})

});