"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatRenderMany = exports.chatRender = void 0;
function chatRender(message) {
    return {
        id: message.id,
        room: message.room,
        datetime: message.datetime,
        message: message.message,
        type: message.type,
        author: message.author,
    };
}
exports.chatRender = chatRender;
function chatRenderMany(messages) {
    return messages.map((message) => ({
        id: message.id,
        room: message.room,
        datetime: message.datetime,
        message: message.message,
        type: message.type,
        author: {
            id: message.author.id,
            name: message.author.name,
            telephone_number: message.author.telephone_number,
            email: message.author.email,
            master: message.author.master,
            keyResponder: message.author.keyResponder,
            token_notification: message.author.token_notification,
            starthos_user: message.author.starthos_user,
            image: message.author.image,
        },
    }));
}
exports.chatRenderMany = chatRenderMany;
