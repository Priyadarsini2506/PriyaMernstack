import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Team.css';

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [newMember, setNewMember] = useState({ name: '', location: '', image: '', description: '' });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
   
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get('http://localhost:5005/team');
        setTeamMembers(response.data);
      } catch (error) {
        console.error('Error fetching team members:', error);
      }
    };

    fetchTeamMembers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember({ ...newMember, [name]: value });
  };

  const handleAddMember = async () => {
    if (newMember.name && newMember.location && newMember.image && newMember.description) {
      try {
        const response = await axios.post('http://localhost:5005/team', newMember);
        setTeamMembers([...teamMembers, response.data]);
        setNewMember({ name: '', location: '', image: '', description: '' });
        setShowForm(false);
      } catch (error) {
        console.error('Error adding team member:', error);
      }
    }
  };

  const handleDeleteMember = async (id) => {
    try {
      await axios.delete(`http://localhost:5005/team/${id}`);
      setTeamMembers(teamMembers.filter(member => member._id !== id));
    } catch (error) {
      console.error('Error deleting team member:', error);
    }
  };

  return (
    <div className="team">
      <Navbar />
      <div className="team-content">
        <h2>Review</h2>
        <p>Our Customers Review </p>
        <div className="team-grid">
          {teamMembers.map(member => (
            <div key={member._id} className="team-member">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p className="location">{member.location}</p>
              <p className="description">{member.description}</p>
              <div className="member-actions">
                <Link to="/contact">
                  <button>Contact</button>
                </Link>
                <button onClick={() => handleDeleteMember(member._id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
        <div className="add-member-section">
          
          <button className="add-review-button" onClick={() => setShowForm(!showForm)}>Add Review</button>
          {showForm && (
            <div className="add-member-form">
              <input type="text" name="name" placeholder="Name" value={newMember.name} onChange={handleInputChange} />
              <input type="text" name="location" placeholder="Room,Location" value={newMember.location} onChange={handleInputChange} />
              <input type="text" name="image" placeholder="Image URL" value={newMember.image} onChange={handleInputChange} />
              <input type="text" name="description" placeholder="Description" value={newMember.description} onChange={handleInputChange} />
              <button onClick={handleAddMember}>Add</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Team;
