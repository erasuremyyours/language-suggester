$(document).ready(function() {
console.log('jquery is enabled');


  $('form#got-form').submit(function(event) {
    event.preventDefault()
    var name = $("#name").val();
    var years = parseInt($("#years").val());
    var ending = $("#ending").val();
    var building = $("input:radio[name=building]:checked").val();
    var companies = $("input:radio[name=companies]:checked").val();;

    console.log(name, years, ending, building, companies);

    if (years === 0 && ending === 'front' && building === 'apps' && companies === 'big') {
      $('.languages #name #python').show();
      console.log('python selected');
    } else if (years === 0 && ending === 'front' && building === 'apps' && companies === 'gov') {
      $('.languages #python').show();
      console.log('javascript selected');
    } else if (years === 0 && ending === 'front' && building === 'apps' && companies === 'startup') {
      $('.languages #react').show();
      console.log('react selected');
    } else if (years === 0 && ending === 'back' && building === 'apps' && companies === 'big') {
      $('.languages #react').show();
      console.log('react selected');
    } else if (years === 0 && ending === 'back' && building === 'apps' && companies === 'gov') {
      $('.languages #react').show();
      console.log('react selected');
    } else if (years === 0 && ending === 'back' && building === 'apps' && companies === 'startup') {
      $('.languages #react').show();
      console.log('react selected');
    } else if (years === 0 && ending === 'front' && building === 'data-mines' && companies === 'big') {
      $('.languages #javascript').show();
      console.log('javascript selected');
    } else if (years === 0 && ending === 'front' && building === 'data-mines' && companies === 'gov') {
      $('.languages #react').show();
      console.log('react selected');
    } else if (years === 0 && ending === 'front' && building === 'data-mines' && companies === 'startup') {
      $('.languages#react').show();
      console.log('react selected');
    } else if (years === 0 && ending === 'back' && building === 'data-mines' && companies === 'big') {
      $('.languages#react').show();
      console.log('react selected');
    } else if (years === 0 && ending === 'back' && building === 'data-mines' && companies === 'gov') {
      $('.languages#react').show();
      console.log('react selected');
    } else if (years === 0 && ending === 'back' && building === 'data-mines' && companies === 'startup') {
      $('.languages#react').show();
      console.log('react selected');
    } else if (years === 0 && ending === 'front' && building === 'cybersecurity' && companies === 'big') {
      $('.languages #react').show();
      console.log('react selected');
    } else if (years === 0 && ending === 'front' && building === 'cybersecurity' && companies === 'gov') {
      $('.languages #react').show();
      console.log('react selected');
    } else if (years === 0 && ending === 'front' && building === 'cybersecurity' && companies === 'startup') {
      $('.languages #react').show();
      console.log('react selected');
    } else if (years === 0 && ending === 'back' && building === 'cybersecurity' && companies === 'startup') {
      $('.languages #react').show();
      console.log('react selected');
    } else if (years === 0 && ending === 'back' && building === 'cybersecurity' && companies === 'startup') {
      $('.languages #react').show();
      console.log('react selected');
    } else if (years === 0 && ending === 'back' && building === 'cybersecurity' && companies === 'startup') {
      $('.languages #react').show();
      console.log('react selected');

  
    } else {
      $('.languages #english').show();
      console.log('english selected');
    }

});

});
