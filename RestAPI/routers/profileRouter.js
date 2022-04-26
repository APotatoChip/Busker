const { profileController, postController, commentController, messageController, fileController } = require('../controllers');

module.exports = (router) => {
    router.get('/profile', profileController.get.profile);

    router.post("/upload", fileController.upload);
    router.get("/files", fileController.getListFiles);
    router.get("/files/:name", fileController.download);
    router.get("/file/:avatar", fileController.getAvatar);

    router.get('/profile/followers', profileController.get.followers);
    router.get('/profile/following', profileController.get.following);


    router.get('/profile/post', postController.get.allPosts);
    router.get('/profile/post/edit', postController.get.editPost);

    router.get('/profile/:postId', postController.get.currentPost);
    router.get('/profile/:postId/comment', commentController.get.postComments);
    router.get('/profile/:postId/comment/:commentId', commentController.get.replyComment);


    router.get('/profile/messages', messageController.get.messages);
    router.get('/profile/messages/:messageId', messageController.get.message);

    router.put('/profile/:postId/comment/like', commentController.put.likeComment);
    router.put('/profile/:postId/comment/:commentId/like', commentController.put.likeReply);
    router.put('/profile/edit', profileController.put.editProfile);
    router.post('/profile/post', postController.post.create);
    router.post('/profile/:postId/comment', commentController.post.comment);

    router.post('/profile/:postId/comment/:commentId', commentController.post.replyComment);
    router.put('/profile/:postId', postController.put.editPost);

    router.delete('/profile/:postId', postController.delete.deletePost);
    router.delete('/profile/:postId/comment/delte', commentController.delete.deleteComment);
    router.delete('/profile/:postId/comment/:commentId/delete', commentController.delete.deleteReplyComment);

    return router;
};