import Chat from "../models/Chat";

export function chatRender(message: Omit<Chat, "author.password">) {
  return {
    id: message.id,
    room: message.room,
    datetime: message.datetime,
    message: message.message,
    type: message.type,
    author: message.author,
  };
}

export function chatRenderMany(messages: Omit<Chat, "author.password">[]) {
  return messages.map((message) => ({
    id: message.id,
    room: message.room,
    datetime: message.datetime,
    message: message.message,
    type: message.type,
    author: {
      id: message.author.id,
      name: message.author.name,
      email: message.author.email,
      token_notification: message.author.token_notification,
      image: message.author.image,
    },
  }));
}
