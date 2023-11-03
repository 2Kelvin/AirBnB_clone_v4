$(function () {
    const reqUrl = 'http://0.0.0.0:5001/api/v1/status/';
    $.get(reqUrl, function(data, status) {
        if (status === 'OK') {
            $('#api_status').addClass('available');
        } else {
            $('#api_status').removeClass('available');
        }
    });
});