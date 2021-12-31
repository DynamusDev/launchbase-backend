import User from "../models/User";

export function userRender(user: User) {
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

export function userRenderMany(users: User[]) {
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
