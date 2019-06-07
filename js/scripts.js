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
      $('.languages #python').show();
      console.log('python selected');
    } 
    } else {
      $('.languages #english').show();
      console.log('english selected');
    }

});

});
