$(document).ready(function(){
  $('#email-btn').on('click', function(event) {
    event.preventDefault();

    let email = "lane.faison@icloud.com";
    var subject = 'Reaching out!';
    var emailBody = '';
    window.location = 'mailto:' + email + '?subject=' + subject + '&body=' + emailBody;
  });
})
