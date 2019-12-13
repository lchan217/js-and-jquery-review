$(function addPodcast() {
  $(".add-podcast").on("click", function() {
    event.preventDefault();
    var podcastItem = $(".podcast-input").val();
    var podcastItemHtml = "<li>" + podcastItem + "</li>";

    $(".podcast-list").prepend(podcastItemHtml);
    $(".podcast-input").val("");
  });
});
