const ChatItem = ({ chat }) => {
  return (
    <article className="chat-item" style={{ display: 'flex', padding: '10px', borderBottom: '1px solid #f0f2f5' }}>
      <img src={chat.avatar} alt={`Foto de ${chat.name}`} style={{ borderRadius: '50%', marginRight: '10px' }} />
      <div style={{ flex: 1 }}>
        <h4 style={{ margin: '0 0 4px 0' }}>{chat.name}</h4>
        <p style={{ margin: 0, color: '#667781', fontSize: '0.85rem' }}>{chat.lastMessage}</p>
      </div>
      <span style={{ fontSize: '0.75rem', color: '#667781' }}>{chat.time}</span>
    </article>
  );
};

export default ChatItem;