class Post {
  constructor(userId, id, title, body) {
    this._userId = userId;
    this._id = id;
    this._title = title;
    this._body = body;
  }

  //Getter
  get userId() {
    return this._userId;
  }
  //Setter
  set userId(userId) {
    this._userId = userId;
  }

  //Getter
  get id() {
    return this._id;
  }
  //Setter
  set id(id) {
    this._id = id;
  }
  //Getter
  get title() {
    return this._title;
  }
  //Setter
  set title(title) {
    this._title = title;
  }
  //Getter
  get body() {
    return this._body;
  }
  //Setter
  set body(body) {
    this._body = body;
  }
}
module.exports = Post;
