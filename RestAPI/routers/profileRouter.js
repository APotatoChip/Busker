const { profileController, postController, commentController, messageController } = require('../controllers');

module.exports = (router) => {
    router.get('/profile', profileController.get.profile);
    router.get('/profile/followers', profileController.get.followers);
    router.get('/profile/following', profileController.get.following);

    router.get('/profile/edit', profileController.get.edit);

    router.get('/profile/:postId/comment', commentController.get.comments);

    router.get('/profile/post', postController.get.post);
    router.get('/profile/post/edit', postController.get.editPost);

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