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

  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    method: 'POST',
    data: JSON.stringify({}),
    contentType: 'application/json',
    success: function (data) {
      const sectionPlaces = $('.places');

      $.each(data, (i, place) => {
        const article = $('<article></article>');
        const titleDiv = $('<div>').addClass('title_box');
        const h2 = $('<h2>' + place.name + '</h2>');
        const priceDiv = $('<div>' + '$' + place.price_by_night + '</div>').addClass('price_by_night');
        const infoDiv = $('<div>').addClass('information');
        const strGuests = (place.max_guest != 1) ? place.max_guest + ' Guests' : place.max_guest + ' Guest';
        const maxGuestDiv = $('<div>' + strGuests + '</div>').addClass('max_guest');
        const strRooms = (place.number_rooms != 1) ? place.number_rooms + ' Bedrooms' : place.number_rooms + ' Bedroom';
        const roomsDiv = $('<div>' + strRooms + '</div>').addClass('number_rooms');
        const strBthrms = (place.number_bathrooms != 1) ? place.number_bathrooms + ' Bathrooms' : place.number_bathrooms + ' Bathroom';
        const bathRoomsDiv = $('<div>' + strBthrms + '</div>').addClass('number_bathrooms');
        // const userDiv = $('<div>' + place.user.first_name + ' ' + place.user.last_name + '</div>').addClass('user');
        const descriptionDiv = $('<div>' + place.description + '</div>').addClass('description');

        titleDiv.append(h2, priceDiv);
        infoDiv.append(maxGuestDiv, roomsDiv, bathRoomsDiv);

        article.append(titleDiv, infoDiv, descriptionDiv);
        sectionPlaces.append(article);
      });
    }
  });
});
