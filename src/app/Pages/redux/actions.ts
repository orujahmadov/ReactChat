import { Message } from "./reducer";

export const POST_MESSAGE = "POST_MESSAGE";

export const postMessage = (payload?: Message) => ({
    type: POST_MESSAGE,
    payload
});