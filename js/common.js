 var submitForm = function (ev) {
    ev.preventDefault();
    console.log(ev);

    var form = $(ev.target);

    var request = ajaxForm(form);

    request.done(function(msg) {
        var mes = msg.mes,
            status = msg.status;
        if (status === 'OK') {
            console.log("!!!!!!");
            form.append('<div class="overlay-mail"><div class="overlay-mail-container"><div class="success-send"><div class="success-send__text">'+mes+'</div><a href="#" id="form-close" class="btn">Закрыть</a></div></div>');
                        
        } else{
            form.append('<div class="error success-send">' + mes + '</div>');
        }
    });

    request.fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });
}

var ajaxForm = function (form) {

    var url = form.attr('action'),
        data = form.serialize();


    return $.ajax({
        type: 'POST',
        url: url,
        data: data,
        dataType: 'JSON'
    });
}

$('#form').on('submit', submitForm);