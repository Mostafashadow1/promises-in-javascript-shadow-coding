function fetchUser(callback) {
  setTimeout(() => {
    const success = Math.random() > 0.5;
    if (success) {
      callback(null, { id: 1, name: "Mostafa Mohamed" });
    } else {
      callback("Failed to fetch user!", null);
    }
  }, 1000);
}

function fetchPosts(userId, callback) {
  setTimeout(() => {
    const success = Math.random() > 0.5;
    if (success) {
      callback(null, [{ id: 1, title: "Post 1" }, { id: 2, title: "Post 2" }]);
    } else {
      callback("Failed to fetch posts!", null);
    }
  }, 1000);
}

function fetchComments(postId, callback) {
  setTimeout(() => {
    const success = Math.random() > 0.5;
    if (success) {
      callback(null, [{ id: 1, text: "Comment 1" }, { id: 2, text: "Comment 2" }]);
    } else {
      callback("Failed to fetch comments!", null);
    }
  }, 1000);
}


// // Callback Hell
fetchUser((userError, user) => {
  if (userError) {
    console.error(userError);
  } else {
    console.log("User:", user);
    fetchPosts(user.id, (postsError, posts) => {
      if (postsError) {
        console.error(postsError);
      } else {
        console.log("Posts:", posts);
        fetchComments(posts[0].id, (commentsError, comments) => {
          if (commentsError) {
            console.error(commentsError);
          } else {
            console.log("Comments:", comments);
          }
        });
      }
    });
  }
});
