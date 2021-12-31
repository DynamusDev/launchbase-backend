"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRenderMany = exports.userRender = void 0;
function userRender(user) {
    return {
        id: user.id,
        name: user.name,
        telephone_number: user.telephone_number,
        email: user.email,
        master: user.master,
        keyResponder: user.keyResponder,
        token_notification: user.token_notification,
        starthos_user: user.starthos_user,
        image: user.image,
        // position: user.position,
        // messages: chatRenderMany(user.messages),
        // locations: transactionRenderMany(user.transactions),
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        deletedAt: user.deletedAt,
    };
}
exports.userRender = userRender;
function userRenderMany(users) {
    return users.map((user) => ({
        id: user.id,
        name: user.name,
        telephone_number: user.telephone_number,
        email: user.email,
        master: user.master,
        keyResponder: user.keyResponder,
        token_notification: user.token_notification,
        starthos_user: user.starthos_user,
        image: user.image,
        // position: user.position,
        // messages: chatRenderMany(user.messages),
        // locations: transactionRenderMany(user.transactions),
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        deletedAt: user.deletedAt,
    }));
}
exports.userRenderMany = userRenderMany;
