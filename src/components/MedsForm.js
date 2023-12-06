import React, { useState } from 'react';
import axios from 'axios';

const MedsForm = () => {
  const [medicineData, setMedicineData] = useState({
    // Add all fields from your Meds model here
    medId: '',
    medName: '',
    genericName: '',
    medType:'',
    manufacturer: '',
    dosage: '',
    ageGroup: '',
    formulation: '',
    netContent: '',
    indication: '',
    sideEffects: '',
    availability: true,
    image: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setMedicineData({ ...medicineData, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/app/meds/', medicineData); // Adjust URL based on your Django server
      alert('Medicine added successfully!');
      setMedicineData({  // Clear the form after successful submission
        medId: '',
        medName: '',
        genericName: '',
        medType:'',
        manufacturer: '',
        dosage: '',
        ageGroup: '',
        formulation: '',
        netContent: '',
        indication: '',
        sideEffects: '',
        availability: true,
        image: '',
      });
    } catch (error) {
      console.error('Error adding medicine:', error);
      alert('Error adding medicine. Please try again.');
    }
  };

// ... (previous code)

return (
  <div>
    <h2>Add Medicine</h2>
    <form onSubmit={handleSubmit}>
      <input type="text" name="medName" placeholder="Medicine Name" value={medicineData.medName} onChange={handleChange} />
      <input type="text" name="genericName" placeholder="Generic Name" value={medicineData.genericName} onChange={handleChange} />
      <select name="medType" value={medicineData.medType} onChange={handleChange}>
        <option value="">Select Medicine Type</option>
        <option value="Tablet">Tablet</option>
        <option value="Capsule">Capsule</option>
        <option value="Liquid">Liquid</option>
      </select>
      <input type="text" name="manufacturer" placeholder="Manufacturer" value={medicineData.manufacturer} onChange={handleChange} />
      <input type="text" name="dosage" placeholder="Dosage" value={medicineData.dosage} onChange={handleChange} />
      <select name="ageGroup" value={medicineData.ageGroup} onChange={handleChange}>
        <option value="">Select Age Group</option>
        <option value="Kids">Kids</option>
        <option value="Adults">Adults</option>
      </select>
      <input type="text" name="formulation" placeholder="Formulation" value={medicineData.formulation} onChange={handleChange} />
      <input type="text" name="netContent" placeholder="Net Content" value={medicineData.netContent} onChange={handleChange} />
      <input type="text" name="indication" placeholder="Indication" value={medicineData.indication} onChange={handleChange} />
      <input type="text" name="sideEffects" placeholder="Side Effects" value={medicineData.sideEffects} onChange={handleChange} />
      <input type="text" name="image" placeholder="Image URL" value={medicineData.image} onChange={handleChange} />
      <label>
        Availability:
        <input type="checkbox" name="availability" checked={medicineData.availability} onChange={handleChange} />
      </label>
      <button type="submit">Add Medicine</button>
    </form>
  </div>
);

};

export default MedsForm;
