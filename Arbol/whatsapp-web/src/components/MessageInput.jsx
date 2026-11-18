const MessageInput = () => {
  return (
    <div className="message-input" style={{ display: 'flex', padding: '10px', background: '#f0f2f5' }}>
      <input 
        type="text" 
        placeholder="Escribe un mensaje" 
        style={{ flex: 1, padding: '9px 12px', borderRadius: '8px', border: '1px solid #ccc', marginRight: '8px' }}
      />
      <button type="button" style={{ padding: '8px 16px', background: '#00a884', color: '#fff', border: 'none', borderRadius: '8px' }}>
        Enviar
      </button>
    </div>
  );
};

export default MessageInput;