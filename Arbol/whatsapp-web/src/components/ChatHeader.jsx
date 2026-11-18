const ChatHeader = ({ chat }) => {
  return (
    <header className="chat-header" style={{ padding: '12px', background: '#f0f2f5', borderBottom: '1px solid #d1d7db' }}>
      <h3 style={{ margin: 0, fontSize: '1rem' }}>{chat.name}</h3>
      <span style={{ fontSize: '0.75rem', color: '#667781' }}>{chat.status}</span>
    </header>
  );
};

export default ChatHeader;