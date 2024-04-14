import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './auth.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    password: '',
    address: '',
    workArea: [],
    mobile: '',
    workExperience: '',
    details: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'role') {

      setFormData({ ...formData, [name]: value, workArea: [] });
      console.log("empty the array", name, value)
    } else {
      console.log("not work with array", name, value)
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const updatedWorkArea = checked
      ? [...formData.workArea, value]
      : formData.workArea.filter((area) => area !== value);
    setFormData({ ...formData, workArea: updatedWorkArea });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedData = {
      ...formData,
      workArea: {
        type: formData.role,
        areas: formData.workArea
      },
      workExperience: parseInt(formData.workExperience)
    };

    try {

      const response = await fetch('https://make-hire-phi.vercel.app/auth/signUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formattedData)
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Response:', responseData);

        // Reset form data
        setFormData({
          name: '',
          role: '',
          email: '',
          password: '',
          address: '',
          workArea: [],
          mobile: '',
          workExperience: '',
          details: ''
        });
      } else {
        // Request failed, log the error
        console.error('Request failed:', response.statusText);
        // Handle the error appropriately, e.g., show a message to the user
      }
    } catch (error) {
      // Handle any unexpected errors
      console.error('Error:', error);
      // Show an error message to the user, if necessary
    }
  };


  return (
    <div className="register-container">
      <div className="form-container">
        <h2 className="form-container_header">Make Hire</h2>
        <p className="sign-in-message"> {`I have an account?`} <span onClick={() => { navigate('/login') }}>Sign in</span></p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Role:</label>
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="">Select Role</option>
              <option value="employee">Employee</option>
              <option value="employer">Employer</option>
            </select>
          </div>
          {formData.role === 'employee' && (
            <div className="form-group">
              <label>Work Area:</label>
              <div className="work-area-options">
                <label><input type="checkbox" name="workArea" value="carpenter" onChange={handleCheckboxChange} /> Carpenter</label>
                <label><input type="checkbox" name="workArea" value="plumber" onChange={handleCheckboxChange} /> Plumber</label>
                <label><input type="checkbox" name="workArea" value="designer" onChange={handleCheckboxChange} /> Designer</label>
                <label><input type="checkbox" name="workArea" value="electrician" onChange={handleCheckboxChange} /> Electrician</label>
                <label><input type="checkbox" name="workArea" value="AC mechanic" onChange={handleCheckboxChange} /> AC Mechanic</label>
                <label><input type="checkbox" name="workArea" value="driver" onChange={handleCheckboxChange} /> Driver</label>
                <label><input type="checkbox" name="workArea" value="mechanic" onChange={handleCheckboxChange} /> Mechanic</label>
              </div>
            </div>
          )}
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>State:</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Mobile:</label>
            <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
          </div>
          {formData.role === 'employee' && (<div className="form-group">
            <label>Work Experience:</label>
            <input type="text" name="workExperience" value={formData.workExperience} onChange={handleChange} />
          </div>)}
          <div className="form-group">
            <label>Details:</label>
            <textarea name="details" value={formData.details} onChange={handleChange} />
          </div>

          <button type="submit" className="custom-button">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
