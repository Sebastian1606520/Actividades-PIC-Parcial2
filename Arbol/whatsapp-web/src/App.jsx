import Sidebar from "./components/Sidebar.jsx";
import ChatWindow from "./components/ChatWindow.jsx";

// Datos de prueba declarados directamente como constantes (pág. 70, 105)
const chat = {
  name: "Carlos Tonato",
  status: "En línea",
  avatar: "https://via.placeholder.com/40",
  lastMessage: "¿Qué tal el avance de React sin magia?",
  time: "10:45 AM"
};

const messages = [
  { id: 1, text: "Hola Carlos, ¿cómo vas?", time: "10:40 AM", isSentByMe: false },
  { id: 2, text: "¿Qué tal el avance de React sin magia?", time: "10:45 AM", isSentByMe: false },
  { id: 3, text: "Todo bien, maquetando la interfaz del Capítulo 3.", time: "10:46 AM", isSentByMe: true }
];

const App = () => {
  return (
    <div className="app-container" style={{ display: 'flex', height: '100vh', width: '100vw', margin: 0, fontFamily: 'sans-serif' }}>
      <Sidebar chat={chat} />
      <ChatWindow chat={chat} messages={messages} />
    </div>
  );
};

export default App;