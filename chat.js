$(document).ready(function() {
    $('#send-message').click(function() {
      var message = $('#message-input').val();
      $.post('backend.php', { action: 'send_message', message: message }, function(response) {
        $('#messages').append('<div>' + message + '</div>');
        $('#message-input').val('');
      });
    });
  
    function loadMessages() {
      $.post('backend.php', { action: 'get_messages' }, function(response) {
        $('#messages').html(response);
      });
    }
  
    setInterval(loadMessages, 1000);
  });
  