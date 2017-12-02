'use strict';

export default function form() {

  var person = {};

  document.getElementById('next').onclick = function() {
    var formData = [];
    formData = $('form').serializeArray();
    person.id = "person" + ID();
    formData.forEach(function(elem) {
      person[elem.name] = elem.value;
    });
    gotoPart2();
    console.log(person);
  }

  document.getElementById('submit').onmouseup = function() {
    console.log(person);
    person.timestamp = new Date().getTime();

    localStorage.setItem('person' + person.id, JSON.stringify(person));
    console.log(person);
  }

  function gotoPart2() {
    $('#part1').addClass('fadeOut');
    $('#part2').addClass('fadeIn');
    $('.item').click(function(element) {
      var avatarId = $(this).attr('id');
      person.avatar = avatarId;
      console.log(person);
    });

    console.log('at end of p2');
    console.log(person);
  }

  function ID() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
  };

};
