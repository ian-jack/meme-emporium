document.getElementById("getRandomMeme").addEventListener("click", function(event) {
  event.preventDefault();
  const url = "https://api.imgflip.com/get_memes";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let min = Math.ceil(0);
      let max = Math.ceil(99);
      let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
      let results = "<img class=\"random-meme-img\" src=\"" + json.data.memes[randomInt].url + "\"/>";
      document.getElementById("random-meme").innerHTML = results;
    })/*.catch(function(error) {
      let result = "<p>" + error.message + "</p>";
      document.getElementById("weatherResults").innerHTML = results;
    })*/;

});

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
