import { createContext } from 'react';

const ChatContext = createContext();
const { Provider: ChatProvider } = ChatContext;

export { ChatContext, ChatProvider }