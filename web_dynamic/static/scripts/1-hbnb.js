$(function () {
    const inputTag = $('input');
    const h4 = $('.amenities').find('h4');
    let amenityId = '';
    let amenityName = '';
    const amentyArray = [];

    inputTag.bind('change', function () {
        let isChecked = inputTag.is(':checked');
        if (isChecked) {
            amenityId = inputTag.attr('data-id');
            amenityName = inputTag.attr('data-name');
            amentyArray.push(amenityId);
            const allAmenties = amentyArray.join(', ');
            h4.text(allAmenties);
        } else {
            amenityId = '';
        }
    });
});