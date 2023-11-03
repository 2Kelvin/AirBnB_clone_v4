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
});
