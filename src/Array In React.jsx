import { useState } from "react";

export const Session = (props) => {
    const sessions = ["Autumn", "Spring", "Summer", "Winter"];
    const [updatedSessions, onSesssionUpdate] = useState(sessions);
    const [input, onInputChage] = useState("");

    const sessionList = (
        <>
            {updatedSessions.map((item, index) => (
                <li key={index} style={{
                    width: "20vw",
                    
                    
                }}>
                    {item} <button onClick={() => onRemoveSession(index)}>Remove</button>
                </li>
            ))}
        </>
    );

    const onAddSession = () => {
        if (input.length !== 0) {
            onSesssionUpdate([...updatedSessions, input]); // FIXED
            onInputChage("");
        }
    };

    const onRemoveSession = (index) => {
        onSesssionUpdate(updatedSessions.filter((_, i) => i !== index)); // FIXED
    };

    return (
        <div>
            <h1>Sessions:</h1>
            <ul>{sessionList}</ul>
            <input type="text" value={input} onChange={(e) => onInputChage(e.target.value)} />
            <button onClick={onAddSession}>Add</button>
        </div>
    );
};
