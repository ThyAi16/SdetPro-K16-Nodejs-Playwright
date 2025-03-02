const RequestHandler = require("./RequestHandler.js");

// Init data
let userId = 1;
let postId = 1;
const BASE_URL = "https://jsonplaceholder.typicode.com";

// Execute
main();

// Main function
async function main() {
  // Init controllers
  const requestHandler = new RequestHandler(BASE_URL);
  const post = await requestHandler.getTargetPost(userId, postId);
  const allPosts = await requestHandler.getAllPost(userId);

  if (!post) {
    console.log(
      ` The post with id ${postId} does not exist for the user with id ${userId}`
    );
  } else {
    _printPostContent(post);
  }

  //Print all post content
  if (allPosts.length === 0) {
    console.log(`There is no post for the user with id: ${userId}`);
  } else {
    console.log("All posts content: ");
    for (const post of allPosts) {
      _printPostContent(post);
    }
  }
}
function _printPostContent(post) {
  const { userId, id, title, body } = post;
  console.log("Post content:");
  console.log(`User ID: ${userId}`);
  console.log(`ID: ${id}`);
  console.log(`Title: ${title}`);
  console.log(`Body: ${body}`);
}
