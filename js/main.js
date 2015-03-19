// Load recent projects
$(document).ready(function () {
  // alert('jQuery');
  var duser = 'jimniels',
      html = "";

  $.getJSON("http://api.dribbble.com/players/" + duser + "/shots?callback=?", function(data){
    // do something with the result
    var numberOfShots = 10;

    // loop over the results and generate our html markup for each <li>
    for (var i = 0; i < numberOfShots; i++) {
      html += '<li>';
      html += '<a href="'+ data.shots[i].url + '">'
      html += '<img src="' + data.shots[i].image_url + '" alt="' + data.shots[i].title + '" >';
      html += '</a>'
      html += '</li>';
    }
    // insert our <li>s into the list
    $('.shots').html(html);
  });
});
