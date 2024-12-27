import React, { useState } from 'react';

const InviteMembers = ({ onInvite }) => {
    const [memberId, setMemberId] = useState('');
    const [role, setRole] = useState('');

    const handleInvite = () => {
        if (memberId && role) {
            onInvite({ memberId, role });
            setMemberId('');
            setRole('');
        }
    };
    return (
        <div>
            <h2>Invite New Members</h2>
            <input
                type="text"
                placeholder="Member ID"
                value={memberId}
                onChange={(e) => setMemberId(e.target.value)}
            />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Select Role</option>
                <option value="Employee">Employee</option>
                <option value="Intern">Intern</option>
            </select>
            <button onClick={handleInvite}>Invite Member</button>
        </div>
    );
};

export default InviteMembers;
