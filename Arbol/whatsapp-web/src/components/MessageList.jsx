const MessageList = ({ children }) => {
  return (
    <div className="message-list" style={{ flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', background: '#efeae2' }}>
      {children}
    </div>
  );
};

export default MessageList;