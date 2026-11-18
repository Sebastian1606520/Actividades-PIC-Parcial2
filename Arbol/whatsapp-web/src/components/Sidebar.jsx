import SidebarHeader from "./SidebarHeader.jsx";
import ChatList from "./ChatList.jsx";
import ChatItem from "./ChatItem.jsx";

const Sidebar = ({ chat }) => {
  return (
    <aside className="sidebar" style={{ width: '30%', display: 'flex', flexDirection: 'column', borderRight: '1px solid #d1d7db' }}>
      <SidebarHeader />
      <ChatList>
        {/* Renderizado de 5 ítems de prueba para simular la lista del boceto */}
        <ChatItem chat={chat} />
        <ChatItem chat={{ ...chat, name: "Grupo ESPE", lastMessage: "Revisar informe" }} />
        <ChatItem chat={{ ...chat, name: "Maria Jose", lastMessage: "Nos vemos mañana" }} />
        <ChatItem chat={{ ...chat, name: "Proyectos .NET", lastMessage: "Subido al repo" }} />
        <ChatItem chat={{ ...chat, name: "Soporte ESPE", lastMessage: "Ticket resuelto" }} />
      </ChatList>
    </aside>
  );
};

export default Sidebar;