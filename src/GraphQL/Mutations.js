import makeRequest from "./Call-API";

const postMessage = (channelId, text, userId) => {
  const payload = `mutation postMessage {
      postMessage(channelId: ${channelId}, text: ${text}, userId: ${userId}) {
        userId
        datetime
        text
        messageId
      }
  }`;
  return makeRequest(payload);
}

export { postMessage };
