$(function addPodcast() {
  $(".add-podcast").on("click", function() {
    event.preventDefault();
    var podcastItem = $(".podcast-input").val();
    var podcastItemHtml =
      "<li><span class='podcast-checkbox'></span><span class='podcast-text'>" +
      podcastItem +
      "</span><span class='podcast-remove'></li>";

    $(".podcast-list").prepend(podcastItemHtml);
    $(".podcast-input").val("");
  });
});

$(function removeItem() {
  $(".podcast-list").on("click", ".podcast-remove", function(event) {
    $(event.currentTarget)
      .parent()
      .remove();
  });
});

$(function markComplete() {
  $(".podcast-list").on("click", ".podcast-checkbox", function(event) {
    $(event.currentTarget).toggleClass("complete");
  });
});
