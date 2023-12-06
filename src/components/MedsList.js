import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import "./MedsList.css";
import Medicineitem from './Medicineitem'; // Assuming Medicineitem is your component

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
    <div className="cardsmed">
      <h1>MEDICINE INFORMATION</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {medicines.map(medicine => (
              <li key={medicine.medId}>
                <Medicineitem
                  src={medicine.image} // Replace 'src' with the image field in your model
                  text={medicine.medName} // Replace 'text' with the name field in your model
                  label="Medicine" // Label or any specific information
                  path={`/meds/${medicine.medId}`} // Path based on the ID
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link to="/add" className="link-button">
        Add New Medicine
      </Link>
    </div>
  );
};

export default MedsList;
