import React from "react";
import "./ChatBox.css"; // Import CSS file

export default function ChatBoxReciever({ user, message }) {
  return (
    <div className="chatbox-receiver">
      <p className="chatbox-receiver-message">
        <strong>{user}</strong> <br />
        {message}
      </p>
    </div>
  );
}

export function ChatBoxSender({ user, message }) {
  return (
    <div className="chatbox-sender">
      <p className="chatbox-sender-message">
        <strong>{user}</strong> <br />
        {message}
      </p>
    </div>
  );
}
