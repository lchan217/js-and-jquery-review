$(function addPodcast() {
  $(".add-podcast").on("click", function() {
    event.preventDefault();
    var podcast = $(".podcast-input").val();
    if (!podcast) {
      alert("Please fill in a podcast!");
    } else {
      var podcastHtml =
        "<li><span class='podcast-check'></span><span class='podcast-text'>" +
        podcast +
        "</span><span class='podcast-remove'></li>";

      $(".podcast-list").prepend(podcastHtml);
      $(".podcast-input").val("");
    }
  });
});

$(function removepodcast() {
  $(".podcast-list").on("click", ".podcast-remove", function(event) {
    $(event.currentTarget)
      .parent()
      .remove();
  });
});

$(function markComplete() {
  $(".podcast-list").on("click", ".podcast-check", function(event) {
    $(event.currentTarget).toggleClass("complete");
  });
});

//Additional Challenges
//If you add an podcast with no text, it adds a blank box. This is a bug! Fix it.
//Add a counter that tells the user how many podcasts are in your podcast list
