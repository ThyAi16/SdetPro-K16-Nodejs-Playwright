```js
userId = 1;
postId = 1;

//FP
const requestHandler = new RequestHandler(Base_Url);
const post = await requestHandler.printTargetPost(userId, postId);
const allPosts = await = requestHandler.printAllPosts(userId);

```
