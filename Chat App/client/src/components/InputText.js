import React, { useState } from "react";

const styles = {
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  textarea: {
    width: "100%",
    minHeight: "100px",
    borderRadius: "10px",
    borderWidth: "1px",
    borderColor: "#ddd",
    padding: "10px",
    fontSize: "18px",
    marginBottom: "20px",
    resize: "none",
    outline: "none",
    fontFamily: "Arial, sans-serif",
  },
  button: {
    width: "100%",
    height: "50px",
    fontWeight: "bold",
    borderRadius: "10px",
    fontSize: "18px",
    backgroundColor: "#34b7f1",
    borderWidth: "0",
    color: "#fff",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    outline: "none",
    "&:hover": {
      backgroundColor: "#269bd1",
    },
  },
};

export default function InputText({ addMessage }) {
  const [message, setMessage] = useState("");

  function addAMessage() {
    addMessage({
      message,
    });
    setMessage("");
  }

  return (
    <div style={styles.textContainer}>
      <textarea
        style={styles.textarea}
        rows={6}
        placeholder="Write something..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button onClick={() => addAMessage()} style={styles.button}>
        ENTER
      </button>
    </div>
  );
}
