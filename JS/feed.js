$(document).ready(function() {
  const username = "StudentUser"; // Example: retrieved from stored profile

  // Create Post
  $("#postButton").click(function() {
    const content = $("#postContent").val().trim();
    if (content === "") {
      alert("Please enter some content before posting.");
      return;
    }

    const timestamp = new Date().toLocaleString();
    const postHtml = `
      <div class="post">
        <div class="post-header">
          <strong>${username}</strong> • <span>${timestamp}</span>
        </div>
        <div class="post-content">${content}</div>
        <div class="post-actions">
          <span class="like-btn">Like (<span class="like-count">0</span>)</span>
          <span class="delete-btn">Delete</span>
        </div>
      </div>
    `;

    $("#feed").prepend(postHtml);
    $("#postContent").val(""); // Clear textarea
  });

  // Like functionality
  $("#feed").on("click", ".like-btn", function() {
    const likeCountSpan = $(this).find(".like-count");
    let count = parseInt(likeCountSpan.text());

    if ($(this).hasClass("liked")) {
      count--;
      $(this).removeClass("liked");
    } else {
      count++;
      $(this).addClass("liked");
    }

    likeCountSpan.text(count);
  });

  // Delete functionality
  $("#feed").on("click", ".delete-btn", function() {
    if (confirm("Are you sure you want to delete this post?")) {
      $(this).closest(".post").remove();
    }
  });
});
