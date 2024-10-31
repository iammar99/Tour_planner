import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import '../SCSS/Pages/agent.css';

export default function Agent() {
    const [text, setText] = useState("");
    const [chat, setChat] = useState([]);
    const chatContainerRef = useRef(null);

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text) return;
        setChat((prevChat) => [
            ...prevChat,
            { message: text, sender: "user" },
            { message: "I'm an AI", sender: "agent" }
        ]);
        setText("");
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    };

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chat]);

    return (
        <div className='agent-page'>
            <Link to={"/"}>
                <img src={logo} style={{ width: "60px", margin: "41px 0px 11px 41px", borderRadius: "50%" }} alt="logo" />
            </Link>
            <main>
                <h1 className={`text-center my-3 fw-bolder text-light d-${chat.length === 0 ? "block" : "none"}`}>
                    Your Virtual Tour Guide
                </h1>
                <div className="chat-container" ref={chatContainerRef}>
                    {chat.map((item, index) => (
                        <div key={index} className={item.sender === "user" ? "userMessage" : "agentMessage"}>
                            <p>{item.message}</p>
                        </div>
                    ))}
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        value={text}
                        onChange={handleTextChange}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message..."
                        className="form-control"
                    />
                    <button onClick={handleSubmit}>Send</button>
                </div>
            </main>
        </div>
    );
}
