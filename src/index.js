$(function() {
  var counter = 0;
  // add podcast
  $(".add-podcast").on("click", function() {
    event.preventDefault();
    var podcast = $(".podcast-input").val();
    if (!podcast) {
      alert("Please fill in a podcast!");
    } else {
      var podcastHtml =
        "<li><span class='podcast-check'></span><span class='podcast-text'>" +
        podcast +
        "</span><span class='podcast-edit'></span><span class='podcast-remove'></span></li>";
      counter++;
      $(".counter").html(counter);
      $(".podcast-list").prepend(podcastHtml);
      $(".podcast-input").val("");
    }
  });

  //remove podcast
  $(".podcast-list").on("click", ".podcast-remove", function(event) {
    $(event.currentTarget)
      .parent()
      .remove();
    counter--;
    $(".counter").html(counter);
  });

  //check box & strike thru
  $(".podcast-list").on("click", ".podcast-check", function(event) {
    $(event.currentTarget).toggleClass("complete");
    $(event.currentTarget)
      .siblings()
      .toggleClass("strike");
  });

  //edit
  $(".podcast-list").on("click", ".podcast-edit", function(event) {
    var el = $(event.currentTarget).siblings();
    el.attr("contenteditable")
      ? el.removeAttr("contenteditable")
      : el.attr("contenteditable", true);
  });
});
