// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.
$(document).on('turbolinks:load', function() {

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)
var new_comment = $("<%= j(render(@comment))%>".hide();
$('#comments').prepend(new_comment);
$('#comment_<%= @comment.id %>').fadeIn('slow');
$('#new_comment')[0].reset();
});