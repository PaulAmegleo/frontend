import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
// ... (other imports)

const MedsList = () => {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const fetchMeds = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/app/meds/');
        setMedicines(response.data);
      } catch (error) {
        console.error('Error fetching medicines:', error);
      }
    };

    fetchMeds();
  }, []);

  return (
    <div>
      <h2>Medicines List</h2>
      <ul>
        {medicines.map(medicine => (
          <li key={medicine.medId}>
            <Link to={`/meds/${medicine.medId}`}>{medicine.medName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedsList;
