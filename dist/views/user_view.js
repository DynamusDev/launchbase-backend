"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRenderMany = exports.userRender = void 0;
function userRender(user) {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        token_notification: user.token_notification,
        image: user.image,
        messages: user.messages.map((message) => ({
            id: message.id,
            room: message.room,
            datetime: message.datetime,
            message: message.message,
            type: message.type,
        })),
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
        email: user.email,
        phone: user.phone,
        token_notification: user.token_notification,
        image: user.image,
        messages: user.messages.map((message) => ({
            id: message.id,
            room: message.room,
            datetime: message.datetime,
            message: message.message,
            type: message.type,
        })),
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        deletedAt: user.deletedAt,
    }));
}
exports.userRenderMany = userRenderMany;
