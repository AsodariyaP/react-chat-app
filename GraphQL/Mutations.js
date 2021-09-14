import { gql } from '@apollo/client';

// Define mutation
export const POST_MESSAGES = gql`
    mutation postMessage {
        postMessage(channelId: "1", text: "Hello Russel", userId: "Sam") {
          userId
          datetime
          text
          messageId
        }
    }
`;