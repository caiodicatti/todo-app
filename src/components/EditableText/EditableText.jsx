import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { FaRegSave } from "react-icons/fa";
import "./EditableText.css";

function EditableText({ text, onSave }) {
    // States
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(text);

    // Handlers
    const handleSave = () => {
        setIsEditing(false);
        onSave(value);
    };

    return (
        <>
            {isEditing ? (
                <div className="editable-container">
                    <input
                        autoFocus
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <FaRegSave className="icon success" onClick={() => handleSave()} />
                </div>
            ) : (
                <div className="editable-container">
                    <span>{value}</span>
                    <FiEdit className="icon primary" onClick={() => setIsEditing(true)} />
                </div>
            )}
        </>
    );
}

export default EditableText;