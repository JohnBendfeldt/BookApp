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

  var newBook = $('#book-name-input').val().trim();
  var bookLength = $('#length-input').val().trim();
  var pagesPerDay = $('#pages-input').val().trim();


});