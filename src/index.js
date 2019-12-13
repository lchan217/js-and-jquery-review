$(function addPodcast() {
  $(".add-podcast").on("click", function() {
    event.preventDefault();
    var podcastItem = $(".podcast-input").val();
    var podcastItemHtml =
      "<div><span class='podcast-checkbox'></span><span class='podcast-text'>" +
      podcastItem +
      "</span><span class='podcast-remove'></div>";

    $(".podcast-list").prepend(podcastItemHtml);
    $(".podcast-input").val("");
  });
});
