$(function() {
    $('input[name="sta"]').on('click', function() {
        if ($(this).val() == 'star1') {
            $('#textboxes').show();

        }
        else  {
            $('#textboxes').hide();
        }
    });
});

$(document).ready(function(){
    $("#submit").click(function(){
      $('#textboxes').hide();
      document.getElementById('demo').innerHTML = "&nbsp &nbsp  &nbsp  &nbsp  &nbsp  &nbsp  &nbsp  &nbsp  &nbsp Thanks for your review! <br>&nbsp &nbsp  &nbsp  &nbsp  &nbsp  &nbsp  &nbsp  &nbsp  &nbsp Think of the travellers you've helped. Nice job!";
      document.getElementById('demo').style.color = "rgb(48,179,137)";
    });
  });
  

