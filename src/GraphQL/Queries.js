import makeRequest from "./Call-API";

const fetchLatestMessage = (channelId) => {
    const payload = `query fetchLatestMessages {
        fetchLatestMessages(channelId: ${channelId} ) {
          messageId
          text
          datetime
          userId
        }
      };`
       return makeRequest(payload);
      // return getMessages.data.fetchLatestMessages;
}

export {fetchLatestMessage};

export const getUsers = {
    "users": [
        {
            "userId": "Sam",
            "name": "Sam"
        },
        {
            "userId": "Russell",
            "name": "Russell"
        },
        {
            "userId": "Joyse",
            "name": "Joyse"
        },
    ]
};

export const getChannelList = {
    "channels": [
        {
            "channelId": "1",
            "name": "General Channel"
        },
        {
            "channel": "2",
            "name": "Technology Channel"
        },
        {
            "channel": "3",
            "name": "LGTM Channel"
        },
    ]
};

export const getMessages = {
    "data": {
        "fetchLatestMessages": [
            {
                "messageId": "8347574459209077470",
                "text": "Hello Good Evening",
                "datetime": "2021-09-12T00:58:57.805Z",
                "userId": "Russell"
            },
            {
                "messageId": "7310574692048621229",
                "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                "datetime": "2021-09-12T00:57:52.597Z",
                "userId": "Joyse"
            },
            {
                "messageId": "1267750244867520975",
                "text": "Hello",
                "datetime": "2021-09-12T00:56:00.76Z",
                "userId": "Sam"
            }
        ]
    }
};
