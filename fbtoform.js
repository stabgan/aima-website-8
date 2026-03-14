/**
 * fbtoform.js - Firebase to Form data binding utility
 *
 * Loads Firebase SDK and provides helpers to populate HTML forms
 * with data from Firebase Realtime Database.
 *
 * SECURITY NOTE: Firebase API keys are safe to expose in client-side code
 * only when proper Firebase Security Rules are configured.
 */

var _setFormData = function setFormData(sel, data) {
  if (!data) return;
  console.info('setting form to data', data);
  var inputList = document.querySelectorAll(sel + ' [name]');
  [].forEach.call(inputList, function(input) {
    if (data[input.name] && data[input.name] !== 'undefined') {
      input.value = data[input.name];
    }
  });
};

var _fb;
var fbToForm = function fbToForm(key, sel) {
  var config = {
    apiKey: 'AIzaSyDJQJqHjkyOct0LWok8T5W4kUPI4IeJyLQ',
    authDomain: 'aima-website-8.firebaseapp.com',
    databaseURL: 'https://aima-website-8.firebaseio.com',
    projectId: 'aima-website-8',
    storageBucket: '',
    messagingSenderId: '577502331455'
  };

  if (!_fb || _fb.name !== 'fbToForm') {
    _fb = firebase.initializeApp(config, 'fbToForm');
  }

  _fb.database().ref('user-data/' + key).on('value', function(snapshot) {
    var val = snapshot.val();
    if (val) {
      _setFormData(sel, val);
    }
  });
};
