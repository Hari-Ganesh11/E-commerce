import React, { useState } from 'react';
import './checkout.css';
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
	const navigate = useNavigate(); // To navigate after successful validation

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        contact: '',
        email: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        address: '',
        contact: '',
        email: ''
    });

    // Function to validate input in real-time
    const validateField = (name, value) => {
        let errorMsg = '';

        if (!value.trim()) {
            errorMsg = `${name} is required`;
        } else {
            switch (name) {
                case 'name':
                    if (/\d/.test(value)) errorMsg = "Name cannot contain numbers";
                    break;
                case 'contact':
                    if (!/^\d{10}$/.test(value)) errorMsg = "Enter a valid 10-digit number";
                    break;
                case 'email':
                    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) errorMsg = "Enter a valid email address";
                    break;
                default:
                    break;
            }
        }

        setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMsg }));
    };
		 

    // Function to handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
		 

        // Validate field in real-time
        validateField(name, value);
    };
															
		 

    // Function to validate entire form before submission
    const validateForm = () => {
        let isValid = true;
        Object.keys(formData).forEach((key) => {
            validateField(key, formData[key]);
            if (errors[key]) isValid = false;
        });
        return isValid;
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Order placed successfully!");
            navigate('/successpage'); // Redirect on success
        }
    };

    return (
        <div className="container">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                {errors.name && <p className="error">{errors.name}</p>}

                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
                {errors.address && <p className="error">{errors.address}</p>}

                <label htmlFor="contact">Contact Number:</label>
                <input type="tel" id="contact" name="contact" value={formData.contact} onChange={handleChange} />
                {errors.contact && <p className="error">{errors.contact}</p>}

                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <p className="error">{errors.email}</p>}

                <input type="submit" value="Place Order" disabled={Object.values(errors).some(err => err)} />
            </form>
        </div>
    );
};

export default Checkout;
