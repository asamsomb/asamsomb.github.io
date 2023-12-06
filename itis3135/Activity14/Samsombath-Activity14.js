$(document).ready(function() {
	$('nav#nav_list a').on('click', function(event) {
        event.preventDefault();

        var speaker = $(this).attr('title');
        var jsonFile = speaker + '.json';
        $('main').empty();

        $.ajax({
            url: 'json_files/' + jsonFile,
            dataType: 'json',
            success: function(data) {
                var speakerHTML = '<h1>' + data.speakers[0].title + '</h1>';
                speakerHTML += '<h2>' + data.speakers[0].month + '</h2>';
                speakerHTML += '<h3>' + data.speakers[0].speaker + '</h3>';
                speakerHTML += '<img src="' + data.speakers[0].image + '">';
                speakerHTML += '<p>' + data.speakers[0].text + '</p>';

                $("main").html(speakerHTML);
            }
        });
    });
}); // end ready