import ChatHeader from "./ChatHeader.jsx";
import MessageList from "./MessageList.jsx";
import MessageItem from "./MessageItem.jsx";
import MessageInput from "./MessageInput.jsx";

const ChatWindow = ({ chat, messages }) => {
  return (
    <main className="chat-window" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <ChatHeader chat={chat} />
      <MessageList>
        {messages.map((msg) => (
          <MessageItem key={msg.id} message={msg} />
        ))}
      </MessageList>
      <MessageInput />
    </main>
  );
};

export default ChatWindow;