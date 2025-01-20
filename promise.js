


function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({ id: 1, name: "Mostafa Mohamed" });
      } else {
        reject("Failed to fetch user!");
      }
    }, 1000);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve([{ id: 1, title: "Post 1" }, { id: 2, title: "Post 2" }]);
      } else {
        reject("Failed to fetch posts!");
      }
    }, 1000);
  });
}



function fetchComments(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success =true;
      if (success) {
        resolve([{ id: 1, text: "Comment 1" }, { id: 2, text: "Comment 2" }]);
      } else {
        reject("Failed to fetch comments!");
      }
    }, 1000);
  });
}

fetchUser()
  .then((user) => {
    console.log("User:", user);
    return fetchPosts(user.id);
  })
  .then((posts) => {
    console.log("Posts:", posts);
    return fetchComments(posts[0].id);
  })
  .then((comments) => {
    console.log("Comments:", comments);
  })
  .catch((error) => {
    console.error(error);
  });


// The Evolution: Async/Await

async function fetchDataSyntaxSugar() {
  try {
    const user = await fetchUser();
    console.log("User:", user);

    const posts = await fetchPosts(user.id);
    console.log("Posts:", posts);

    const comments = await fetchComments(posts[0].id);
    console.log("Comments:", comments);
  } catch (error) {
    console.error(error);
  }finally{
    loading = false;
  }
}

fetchDataSyntaxSugar();
