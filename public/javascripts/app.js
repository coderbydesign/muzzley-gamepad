$(function(){
  var token = '467c85cccaacf5a1';

  muzzley.on('error', function(e) {
    $('.error').text(e).show();
  });

  muzzley.connectApp(token, function(e, activity) {
    if (e) return $('.error').text(e).show();

    qrUrl = activity.qrCodeUrl
    $('#qrCnt').attr('src', qrUrl);
    $('#loader').hide();

    activity.on('participantQuit', function(participant) {
      $('#action').text('Check ya later!');
      $('#qrCnt').show().attr('src', qrUrl);
    });

    activity.on('participantJoin', function(participant) {
      participant.changeWidget(
        'gamepad',
        {sector: 45, intensitySteps: 10, numButtons: 4},
        function(e) {
          if (e) return $('.error').text(e).show();
          $('#action').text('Howdy!');
          $('#qrCnt').hide();
        });

      participant.on('action', function(action) {
        $('#action').text(JSON.stringify(action));
      });
    });
  });
});
