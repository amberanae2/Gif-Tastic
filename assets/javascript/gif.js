  //// make an array of with the sports variables 
     //// need to make active clickable buttons
    //// each button clicked should produce a GIF
    //// we need to produce an on click event for th button
    //// we need to add an event to pause the GIF
    //// we need to add a function to animate the Gif
    //// need to create a search box to add gifs at random
    //// need to add make sure Gifs are PG
    //// need to add verbiage on what gifs get "rating"
    //// need to make sure gifs can be continous and not stay on the page once another is clicked
  
    
  
$("button").on("click", function() {

 
  var sport = $(this).attr("data-sport");

  
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    sport + "&api_key=dc6zaTOxFJmzC&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
   
    .done(function(response) {

    
      var results = response.data;
      console.log(results);
     

      for (var i = 0; i < results.length; i++) {

    
        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
          
          var sportDiv = $("<div class='item'>");
        
          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var sportImage = $("<img>");

          sportImage.addClass('sportImg')

          var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          sport + "&api_key=dc6zaTOxFJmzC&limit=10";

          sportImage.attr("src", results[i].images.fixed_height.url);

          sportImage.attr('data-still', results[i].images.fixed_height_still.url)

          sportImage.attr('data-animate', results[i].images.fixed_height.url)

          sportImage.attr('data-state', 'still');
  

          sportDiv.append(p);
          sportDiv.append(sportImage);
          $("#gifs-appear-here").prepend(sportDiv);
        }
      }
    })
  })
  
  
         $("#gifs-appear-here").on("click",".sportImg", function() {
        var state = $(this).attr('data-state');
        if ( state == 'still'){
            $(this).attr('src', $(this).data('animate'));
            $(this).attr('data-state', 'animate');
        }  
               else {
                  $(this).attr('src', $(this).data('still'));
                  $(this).attr('data-state', 'still');
              };
  });

  
       
  
  




          
    









