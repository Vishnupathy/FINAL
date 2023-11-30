import React, { useState } from 'react';
import './Story.css';

function Story({ onFormChange }) {
  const [formData, setFormData] = useState({
    heading: '',
    description: '',
    image: '',
    category: '', // Default value
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    // Pass the updated formData to the parent component
    onFormChange(formData);
  };

  return (
    <div className='story_container'>
      <div className='Form_container'>
        <form>
          <p>
            Heading
            <input
              type='text'
              name='heading'
              id='Heading'
              placeholder='Your heading'
              value={formData.heading}
              onChange={handleChange}
            />
          </p>

          <p>
            Description
            <input
              type='text'
              name='description'
              id='description'
              placeholder='Story description'
              value={formData.description}
              onChange={handleChange}
            />
          </p>

          <p id='image'>
            Image
            <input
              type='text'
              name='image'
              id='image1'
              placeholder='Add image url'
              value={formData.image}
              onChange={handleChange}
            />
          </p>

          <p id='category'>
            Category
            <select
              id='cat'
              name='category'
              placeholder='Select category'
              value={formData.category}
              onChange={handleChange}
            >
              <option value='food'>Food</option>
              <option value='travel'>Travel</option>
              <option value='movies'>Movies</option>
              <option value='education'>Education</option>
              <option value='health'>Health and fitness</option>
            </select>

            <button type='submit' id='post'>
              Post
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Story;
