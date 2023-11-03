$(function () {
  const inputTag = $('input:checkbox');
  const h4 = $('.amenities h4');
  const amentyArray = [];

  inputTag.bind('change', function () {
    if ($(this).is(':checked')) {
      amentyArray.push($(this).attr('data-name'));
    } else {
      const aId = amentyArray.indexOf($(this).attr('data-name'));
      amentyArray.splice(aId, 1);
    }
    h4.text(amentyArray.join(', '));
  });

  const reqUrl = 'http://0.0.0.0:5001/api/v1/status/';
  const divCircle = $('#api_status');
  $.get(reqUrl, function (data) {
    if (data.status === 'OK') {
      divCircle.addClass('available');
    } else {
      divCircle.removeClass('available');
    }
  });
});
