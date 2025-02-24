const readline = require("readline");

// Create readline interface for command-line input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Fetch all posts from the API
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    rl.question("Enter the user ID: ", (userIdInput) => {
      rl.question("Enter the post ID: ", (postIdInput) => {
        const userId = parseInt(userIdInput, 10);
        const postId = parseInt(postIdInput, 10);

        // Find the specific post matching both userId and postId
        const specificPost = posts.find(
          (post) => post.userId === userId && post.id === postId
        );
        if (specificPost) {
          console.log("\nPost Content:");
          console.log("Title: " + specificPost.title);
          console.log("Body: " + specificPost.body);
        } else {
          console.log("\nNo post found for the given user ID and post ID.");
        }

        // Filter and print all posts for the provided user ID
        const userPosts = posts.filter((post) => post.userId === userId);
        console.log(`\nAll posts for user ${userId}:`);
        userPosts.forEach((post) => {
          console.log(`Post ID: ${post.id} - Title: ${post.title}`);
        });

        // Close the readline interface
        rl.close();
      });
    });
  })
  .catch((error) => {
    console.error("Error fetching posts:", error);
    rl.close();
  });
