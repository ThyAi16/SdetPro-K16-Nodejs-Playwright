const Post = require("./Post");
class RequestHandler {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }
  async getTargetPost(targetUserId, postId) {
    const targetUserPosts = await this._getAllPost(targetUserId);
    const targetPost = targetUserPosts.find(function (post) {
      return post.id === postId;
    });
    if (!targetPost) {
      return undefined;
    }
    const { userId, id, title, body } = targetPost;
    return new Post(userId, id, title, body);
  }

  async getAllPost(targetUserId) {
    const allPost = [];
    const targetUserPost = await this._getAllPost(targetUserId);
    for (const post of targetUserPost) {
      const { userId, id, title, body } = post;
      allPost.push(new Post(userId, id, title, body));
    }
    return allPost;
  }

  async _getAllPost(userId) {
    const postEndpoint = `${this._baseUrl}/posts`;
    const response = await fetch(postEndpoint);
    const allPosts = await response.json();
    return allPosts.filter(function (post) {
      return post.userId === userId;
    });
  }
}

module.exports = RequestHandler;
