/**
 * Get a target post's constent for user
 *      A. Check if user is existing
 *          1. Get all posts for the user
 *          2. Filter out the target post content
 *              if the postId is existing
 *                  print out the post content
 *              else
 *                  the postId s found
 *      B. Print out user is not found
 *
 *      A. Check if user is existing
 *      1. Get all posts for the user
 *
 * const allPosts = getAllPostFromUder(userId);
 * cont targetPostContent = filterPostContent(allPosts,, targetPostId);
 *
 */
const { promises } = require("dns");
const { resolve } = require("path");
const readline = require("readline-sync");
const postEndpoint = "https://jsonplaceholder.typicode.com/posts";
const userEndpoint = "https://jsonplaceholder.typicode.com/users";
const userId = 1;
const targetPostId = 1;

app();

function app() {
  let isPlaying = true;
  while (isPlaying) {
    printAppMenu();
    getUserOption().then(function (userOption) {
      //const userOption = Number(readline.question("Please select an option: "));
      switch (userOption) {
        case 1:
          getAllPostFromUser();
          break;
        case 2:
          getPostContent().then(app);
          break;
        case 0:
          isPlaying = false;
          break;
        default:
          console.log("Invalid input!");
      }
    });
  }
}

function getUserOption() {
  return new Promise(function (resolve, reject) {
    const userOption = readline.question("Enter your option: ");
  });
}

function printAppMenu() {
  console.log("1. Get all posts from a user");
  console.log("2. Get a post content");
  console.log("0. Exit");
}

function handleGetAllPostsFromUser() {
  return new Promise((resolve) => {
    const userid = Number(readline.question("Enter user ID: "));
    getAllPostFromUser(userId).then((posts) => {
      if (posts.length > 0) {
        console.log(`No posts found for user ID ${userId}`);
      } else {
        resolve.log(`No posts found for user ID ${userId}`);
      }
      resolve();
    });
  });
}

function getAllPostFromUser() {
  return new Promise(function (resolve, reject) {
    const userId = Number(readline.question("Enter user id: "));
    getAllPostFromUder(userId).then(function (allPosts) {
      console.log(allPosts);
      resolve();
    });
  });
}

getAllPostFromUser(userId).then(function (allPosts) {
  //Synchronous start from here
  //console.log(allPosts);

  const targetPostContent = filterPostContent(allPosts, targetPostId);
  if (!targetPostContent) {
    console.log(`The post with id ${targetPostId} is not found!`);
  } else {
    console.log(targetPostContent);
  }
});

function getAllPostFromUser(userId) {
  // Check if user is existing
  return fetch(userEndpoint)
    .then(function (responese) {
      return responese.json();
    })
    .then(function (allUsers) {
      let hasUser = false;
      for (const user of allUsers) {
        if (user.id === userId) {
          hasUser = true;
          break;
        }
      }
      if (hasUser) {
        return fetch(postEndpoint)
          .then(function (responese) {
            return responese.json();
          })
          .then(function (allPosts) {
            return allPosts.filter(function (post) {
              return post.userId === userId;
            });
          });
      } else {
        console.log(`User with id ${userId} is not found!!!`);
        process.exit(1);
      }
    });
}

function filterPostContent(allPosts, targetPostContent) {
  const targetPost = allPosts.find(function (post) {
    return post.id === targetPostId;
  });
  return targetPost;
}
