const ChatList = ({ children }) => {
  return (
    <section className="chat-list" style={{ overflowY: 'auto', flex: 1 }}>
      {children}
    </section>
  );
};

export default ChatList;