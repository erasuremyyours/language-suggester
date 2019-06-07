$(document).ready(function() {
console.log('jquery is enabled');


  $('form#got-form').submit(function(event) {
    event.preventDefault()
    var name = $("#name").val();
    var age = parseInt($("#age").val());
    var ending = $("#gender").val();
    var temper = $("input:radio[name=temperment]:checked").val();
    var climate = $("input:radio[name=climate]:checked").val();;

    console.log(name, age, ending, temper, climate);

    if (age < 30 && ending === 'front' && temper === 'vengeful' && climate === 'tropical') {
      $('.languages #dany').show();
      console.log('dany selected');
    } else if (age < 30 && ending === 'front' && temper === 'calm' && climate === 'cold') {
      $('.characters #jon').show();
      console.log('jon selected');
    } else if (age > 40 && ending === 'front' && temper === 'even' && climate === 'cold') {
      $('.characters #stannis').show();
      console.log('stannis selected');
    } else if (age > 40 && ending === 'front' && temper === 'calm' && climate === 'mild') {
      $('.characters #davos').show();
      console.log('davos selected');
    } else if (age > 30 && ending === 'female' && temper === 'vengeful' && climate === 'tropical') {
      $('.charactes #cersei').show();
      console.log('cersei selected');
    } else if (age > 30 && ending === 'male' && temper === 'even' && climate === 'mild') {
      $('.characters #tyrion').show();
      console.log('tyrion selected');
    } else if (age < 20 && ending === 'female' && temper === 'vengeful' && climate === 'cold') {
      $('.characters #arya').show();
      console.log('arya selected');
    } else if (age > 50 && ending === 'female' && temper === 'even' && climate === 'mild') {
      $('.characters #diana').show();
      console.log('diana selected');
    } else if (age < 30 && ending === 'male' && temper === 'vengeful' && climate === 'tropical') {
      $('.characters #oberon').show();
      console.log('oberon selected');
    } else {
      $('.characters #noone').show();
      console.log('no one selected');
    }

});

});
