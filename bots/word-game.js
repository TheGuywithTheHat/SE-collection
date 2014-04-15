var messageID = $('.message').last().attr('id').replace('message-', '');
var word = $('#message-' + messageID + ' > .content').html().replace(/[^a-zA-Z_0-9 ]/g, '').replace(/ +$/g, '').split(' ').pop();
var newWord;

$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%3D'http%3A%2F%2Fsemantic-link.com%2Frelated.php%3Fword%3D" + word + "'&format=json&diagnostics=true&callback=",function(data){
    newWord = data.query.results.json.json[0].v;
    $('#input').val(':' + messageID + ' ' + newWord);
    $('#sayit-button').click();
});
