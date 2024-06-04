import React, { useState } from 'react';
import EditTask from '../modals/EditTask'

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false);
    const [isCompleted, setIsCompleted] = useState(taskObj.isCompleted || false); // Added state for task completion

    const colors = [
        {
            primaryColor: "#5D93E1",
            secondaryColor: "#ECF3FC"
        },
        {
            primaryColor: "#F9D288",
            secondaryColor: "#FEFAF1"
        },
        {
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        {
            primaryColor: "#F48687",
            secondaryColor: "#FDF1F1"
        },
        {
            primaryColor: "#B964F7",
            secondaryColor: "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    const handleCheckboxChange = () => {
        const updatedStatus = !isCompleted;
        setIsCompleted(updatedStatus);
        const updatedTask = { ...taskObj, isCompleted: updatedStatus };
        updateListArray(updatedTask, index);
    };

    const cardStyle = {
        backgroundColor: isCompleted ? '#9a9a9a' : 'white', // 변경된 배경색 스타일
        transition: 'background-color 0.3s ease' // 부드러운 전환 효과
    };

    return (
        <div class="card-wrapper mr-5" style={cardStyle}>
            <div class="card-top" style={{ "background-color": colors[index % 5].primaryColor }}></div>
            <div class="task-holder">
                <span class="card-header" style={{ "background-color": colors[index % 5].secondaryColor, "border-radius": "10px" }}>{taskObj.Name}</span>
                <p className="mt-3">{taskObj.Description}</p>

                <div style={{ "position": "absolute", "top": "160px", "left": "160px" }}>
                    <button style={{ "color": colors[index % 5].primaryColor, "cursor": "pointer" }} onClick={() => setModal(true)}>close</button>
                    <button style={{ "color": colors[index % 5].primaryColor, "cursor": "pointer" }} onClick={handleDelete}>Delete</button>
                </div>
            </div>
            <div>
                <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={handleCheckboxChange}
                    style={{ cursor: "pointer", marginTop: "10px" }}
                />
                <label style={{ marginLeft: "5px" }}>Completed</label>

            </div>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </div>
    );
};

export default Card;