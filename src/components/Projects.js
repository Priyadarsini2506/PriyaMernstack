import { useEffect, useState } from 'react';
import axios from 'axios';

import Navbar from './Navbar'; 
import './Projects.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        console.log('Fetching data from https://retoolapi.dev/nIvVI7/data');
        const response = await axios.get('https://retoolapi.dev/nIvVI7/data');
        setProjects(response.data);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching the projects:', error);
        setError(error);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading projects. Please try again later.</div>;

  return (
    <div className="projects">
      <Navbar /> 
      <h2>Our Projects</h2>
      <div className="project-list">
        {projects.map((job, index) => (
          <div
            key={index}
            className="project-item"
            onClick={() => (window.location.href = '/Contact')}
          >
            <div className="project-info">
              <h3>{job.Room}</h3>
              <p>{job.Types}</p>
            </div>
            <img src={job.url} alt={job.Room} className="project-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
