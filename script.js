var len;
var results = '';

function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com/' + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "YOUR_API_KEY_HERE");
      },
      type: "GET",
    })
    .done(function (data) {
      len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }

      $('#searchResults').html(results);
      $('#searchResults').dialog();
    })
    .fail(function () {
      alert("error");
    });
}

//Click event handler to the search button
$(document).ready(function () {
    $("#searchButton").on("click", apiSearch);
});

// Change the background image
function changeBackgroundImage() {
    // Change the background image URL here
    $('body').css('background-image', 'url("https://unsplash.com/photos/Iy59i0M7oP4")'); // Replace 'new-image-url.jpg' with the URL of your new image
}

// Attach a click event handler to the header (search engine name)
$(document).ready(function () {
    $("header").on("click", changeBackgroundImage);
});