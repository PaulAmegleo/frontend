import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MedsDetails = () => {
  const { id } = useParams(); // Access the 'id' parameter from the URL
  const [medicine, setMedicine] = useState(null);

  useEffect(() => {
    const fetchMedicineDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/app/meds/${id}/`); // Fetch medicine details by ID
        setMedicine(response.data); // Set the fetched medicine details
      } catch (error) {
        console.error('Error fetching medicine details:', error);
      }
    };

    fetchMedicineDetails();
  }, [id]);

  return (
    <div>
      <h2>Medicine Details</h2>
      {medicine ? (
        <div>
          <p>Medicine ID: {medicine.medId}</p>
          <p>Medicine Name: {medicine.medName}</p>
          <p>Generic Name: {medicine.genericName}</p>
          <p>Medicine Type: {medicine.medType}</p>
          <p>Manufacturer: {medicine.manufacturer}</p>
          <p>Dosage: {medicine.dosage}</p>
          <p>Age Group: {medicine.ageGroup}</p>
          <p>Formulation: {medicine.formulation}</p>
          <p>Net Content: {medicine.netContent}</p>
          <p>Indication: {medicine.indication}</p>
          <p>Side Effects: {medicine.sideEffects}</p>
          <p>Availability: {medicine.availability ? 'Available' : 'Not Available'}</p>
          <p>Image URL: {medicine.image}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MedsDetails;
