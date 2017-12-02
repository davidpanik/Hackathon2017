'use strict';

export default function form() {

  document.getElementById('submitButton').onclick = function(element) {
    console.log('called');
    // element.preventDefault();
    var formData = [];
    var person = {};
    formData = $('form').serializeArray();

    person.id = ID();
    person.timetamp = new Date().getTime();

    formData.forEach(function(elem) {
      person[elem.name] = elem.value;
    });


    var string = 'person' + person.id;
    localStorage.setItem(string, JSON.stringify(person));
    console.log(person);

  }

  // document.getElementById('findButton').onclick = function() {
  //   // var lastPerson = localStorage.getItem('person' + gloalId);
  //   // console.log("lastPerson: " + lastPerson);
  // }

  function ID() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
  };

};
