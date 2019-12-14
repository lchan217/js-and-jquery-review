$(function addPodcast() {
  var counter = 0;
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
      counter++;
      $(".counter").html(counter);
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
