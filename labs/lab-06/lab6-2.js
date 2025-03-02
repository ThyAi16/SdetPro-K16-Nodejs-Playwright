// const readline = require("readline/promises");
// const { stdin: input, stdout: output } = require("process");

// async function main() {
//   // Tạo giao diện readline hỗ trợ Promise
//   const rl = readline.createInterface({ input, output });

//   try {
//     // Gửi yêu cầu lấy danh sách bài đăng từ API
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const posts = await response.json();

//     // Nhận thông tin đầu vào từ người dùng bằng async/await
//     const userIdInput = await rl.question("Enter the user ID: ");
//     const postIdInput = await rl.question("Enter the post ID: ");

//     // Chuyển đổi chuỗi nhập thành số nguyên
//     const userId = parseInt(userIdInput, 10);
//     const postId = parseInt(postIdInput, 10);

//     // Tìm bài đăng có userId và postId khớp
//     const specificPost = posts.find(
//       (post) => post.userId === userId && post.id === postId
//     );
//     if (specificPost) {
//       console.log("\nPost Content:");
//       console.log("Title:", specificPost.title);
//       console.log("Body:", specificPost.body);
//     } else {
//       console.log("\nNo post found for the given user ID and post ID.");
//     }

//     // Lọc và in ra tất cả bài đăng của người dùng đã nhập
//     //     const userPosts = posts.filter((post) => post.userId === userId);
//     //     console.log(`\nAll posts for user ${userId}:`);
//     //     userPosts.forEach((post) => {
//     //       console.log(`Post ID: ${post.id} - Title: ${post.title}`);
//     //     });
//   } catch (error) {
//     console.error("Error fetching posts:", error);
//   } finally {
//     // Đóng giao diện readline
//     rl.close();
//   }
// }
// // Gọi hàm main để chạy chương trình
// main();

const readline = require("readline-sync");
const url = "https://jsonplaceholder.typicode.com";
main();
async function main() {
  await showMenu();
}
async function showMenu() {
  let option;
  do {
    console.log(`====MENU===`);
    console.log(`1. Get POST content and print the related post`);
    console.log(`2. Print all related posts`);
    console.log(`0. Exit!`);
    console.log(`===========`);
    // const option = getUserInput();
    option = parseInt(readline.question("Please enter your choice: "));
    switch (option) {
      case 0:
        break;
      case 1:
        const userID = parseInt(
          readline.question(`Please enter your userID: \t`)
        );
        const postID = parseInt(
          readline.question(`Please enter the postID: \t`)
        );
        await getPostContent(userID, postID);
        break;
      case 2:
        const userId = parseInt(
          readline.question(`Please enter your userID: \t`)
        );
        await getAllPostContent(userId);
        break;
      default:
        console.log("Input again");
        break;
    }
  } while (option !== 0);
}
async function getPostContent(userId, postId) {
  let response = await fetch(`${url}/posts?userId=${userId}&id=${postId}`);
  let postContent = await response.json();
  if (postContent.length === 0) {
    console.log(`No data found or invalid input`);
  } else {
    console.log(postContent);
  }
}
async function getAllPostContent(userId) {
  let response = await fetch(`${url}/posts?userId=${userId}`);
  let postContent = await response.json();
  if (postContent.length === 0) {
    console.log(`No data found or invalid input`);
  } else {
    console.log(postContent);
  }
}
