import React, { useState } from 'react';
 import './ProfileView.css'; // Ensure to import the CSS for styling
import { FaSave, FaEdit, FaArrowLeft, FaCamera } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

const ProfileView = () => {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'Admin',
        profilePic: 'https://via.placeholder.com/150' // Default profile picture
    });
    const [selectedFile, setSelectedFile] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUserInfo({ ...userInfo, profilePic: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        // Logic to save the updated user information can be added here
        console.log('User information saved:', userInfo);
        setIsEditing(false);
    };
    return (
        <div className="profile-view-container">
            <button className="back-button" onClick={() => navigate(-1)}>
                <FaArrowLeft /> Back
            </button>
            <h2>User Profile</h2>
            <div className="profile-info">
                <div className="profile-pic-container">
                    <img src={userInfo.profilePic} alt="Profile" className="profile-pic" />
                    {isEditing && (
                        <label className="upload-button">
                            <FaCamera /> Change Picture
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="file-input"
                            />
                        </label>
                    )}
                </div>
                <div className="profile-field">
                    <label>Name:</label>
                    {isEditing ? (
                        <input
                            type="text"
                            name="name"
                            value={userInfo.name}
                            onChange={handleChange}
                        />
                    ) : (
                        <span>{userInfo.name}</span>
                    )}
                </div>
                <div className="profile-field">
                    <label>Email:</label>
                    {isEditing ? (
                        <input
                            type="email"
                            name="email"
                            value={userInfo.email}
                            onChange={handleChange}
                        />
                    ) : (
                        <span>{userInfo.email}</span>
                    )}
                </div>
                <div className="profile-field">
                    <label>Role:</label>
                    <span>{userInfo.role}</span>
                </div>
            </div>
            <div className="profile-actions">
                {isEditing ? (
                    <button className="save-button" onClick={handleSave}>
                        <FaSave /> Save
                    </button>
                ) : (
                    <button className="edit-button" onClick={() => setIsEditing(true)}>
                        <FaEdit /> Edit
                    </button>
                )}
            </div>
        </div>
    );
};
export default ProfileView;