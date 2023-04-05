import React, { useEffect, useState, useRef } from "react";
import socketIOClient from "socket.io-client";
import ChatBoxReciever, { ChatBoxSender } from "./ChatBox";
import InputText from "./InputText";
import UserLogin from "./UserLogin";
import "./ChatContainer.css"; // Import CSS file

export default function ChatContainer() {
  let socketio = socketIOClient("http://localhost:5001");
  const [chats, setChats] = useState([]);
  const [user, setUser] = useState(localStorage.getItem("user"));
  const avatar = localStorage.getItem("avatar");
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  useEffect(() => {
    socketio.on("chat", (senderChats) => {
      setChats(senderChats);
    });
  });
  function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");
    setUser("");
  }

  function sendChatToSocket(chat) {
    socketio.emit("chat", chat);
  }
  function addMessage(chat) {
    const newChat = { ...chat, user: localStorage.getItem("user"), avatar };

    setChats([...chats, newChat]);
    sendChatToSocket([...chats, newChat]);
  }

  function ChatsList() {
    return (
      <div className="chats-list">
        {chats.map((chat, index) => {
          if (chat.user === user)
            return (
              <ChatBoxSender
                key={index}
                message={chat.message}
                avatar={chat.avatar}
                user={chat.user}
              />
            );
          return (
            <ChatBoxReciever
              key={index}
              message={chat.message}
              avatar={chat.avatar}
              user={chat.user}
            />
          );
        })}
        <div ref={messagesEndRef} />
      </div>
    );
  }

  return (
    <div>
      {user ? (
        <div>
          <div className="header">
            <h4>Username: {user}</h4>
            <strong>Chat App </strong>
            <p
              onClick={() => logout()}
              className="logout-link" // Use className instead of style to apply styles from CSS file
            >
              Log Out
            </p>
          </div>
          <ChatsList />

          <InputText addMessage={addMessage} />
        </div>
      ) : (
        <UserLogin setUser={setUser} />
      )}

      <div className="spacer" />
    </div>
  );
}
