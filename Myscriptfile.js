<script>
function addMessage() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    document.getElementById('message').innerHTML = 'It is currently ' + hours + ':' + minutes;
&rbrace; 
    </script>