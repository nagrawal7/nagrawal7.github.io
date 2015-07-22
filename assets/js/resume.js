$(document).ready(function() {
  initializeCourses();
});

function initializeCourses() {
  var template = document.querySelector('#courseRow');
  for (var i = 0; i < courses.length; i++) {
    var c = courses[i];
    var clone = template.content.cloneNode(true);
    var td = clone.querySelectorAll('td');
    td[0].innerHTML = c.course;
    td[1].innerHTML = c.name;
    td[2].innerHTML = c.lang;
    td[3].innerHTML = c.grade;

    $('#courseTable tbody').append(clone);
  }
};
