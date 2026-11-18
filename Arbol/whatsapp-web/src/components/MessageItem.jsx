const MessageItem = ({ message }) => {
  const isMe = message.isSentByMe;
  return (
    <div 
      className="message-item" 
      style={{ 
        alignSelf: isMe ? 'flex-end' : 'flex-start',
        background: isMe ? '#dcf8c6' : '#ffffff',
        padding: '8px 12px',
        borderRadius: '7.5px',
        margin: '4px 0',
        maxWidth: '65%',
        boxShadow: '0 1px 0.5px rgba(11,20,26,0.13)'
      }}
    >
      <p style={{ margin: 0, fontSize: '0.9rem' }}>{message.text}</p>
      <span style={{ fontSize: '0.65rem', color: '#667781', display: 'block', textAlign: 'right', marginTop: '4px' }}>
        {message.time}
      </span>
    </div>
  );
};

export default MessageItem;