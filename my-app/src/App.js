import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
    const gradients = [
        "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        "linear-gradient(135deg, #a18cd1, #fbc2eb)",
        "linear-gradient(135deg, #ffecd2, #fcb69f)",
        "linear-gradient(135deg, #74ebd5, #acb6e5)",
        "linear-gradient(135deg, #ffdde1, #ee9ca7)",
    ];

    const [bgGradient, setBgGradient] = useState("");

    useEffect(() => {
        // Select a random gradient on page refresh
        const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
        setBgGradient(randomGradient);
    }, []);

    return (
        <div className="container" style={{ background: bgGradient }}>
            <div className="content">
                <button className="signup-btn">SIGN UP →</button>
                <div className="nav-buttons">
                    <button className="nav-btn">about</button>
                    <button className="nav-btn">contact</button>
                </div>
                <p className="footer">privacy policy | terms of service</p>
            </div>
        </div>
    );
}

export default App;
