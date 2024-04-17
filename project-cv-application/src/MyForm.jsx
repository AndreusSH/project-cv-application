import { useState } from 'react';
import InputField from './InputField';
import './MyForm.css'; 

function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    title: "",
    date: ""
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    console.log("Form submitted with data:", formData);

    
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    
        <div className="my-form-container">

      <h1>General info</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Enter your name"
          type="text"
          value={formData.name}
          onChange={handleInputChange}
          name="name"
        />
        <InputField
          label="Enter your email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          name="email"
        />
        <InputField
          label="Enter your number"
          type="number"
          value={formData.number}
          onChange={handleInputChange}
          name="number"
        />
        <h1>Educational Background</h1>
        <InputField
          label="School name"
          type="text"
          value={formData.school}
          onChange={handleInputChange}
          name="school"
        />
        <InputField
          label="Title of study"
          type="text"
          value={formData.title}
          onChange={handleInputChange}
          name="title"
        />
        <InputField
          label="Date"
          type="text"
          value={formData.date}
          onChange={handleInputChange}
          name="date"
        />
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
                <div className="submitted-data">

          <p> {submittedData.name}</p>
          <p> {submittedData.email}</p>
          <p> {submittedData.number}</p>
          <p>{submittedData.school}</p>
          <p>{submittedData.title}</p>
          <p>{submittedData.date}</p>



        </div>
      )}
     </div>
  );
}

export default MyForm;
