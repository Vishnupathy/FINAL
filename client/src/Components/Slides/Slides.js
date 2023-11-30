import React, { useState, useEffect } from 'react';
import './Slides.css';
import Story from '../Story/Story';

function Slides() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    heading: '',
    description: '',
    image: '',
    category: '',
  });

  useEffect(() => {
    // Your useEffect logic for fetching data based on ID if needed
  }, []);

  const handleFormChange = (updatedFormData) => {
    setFormData(updatedFormData);
  };

  const handleSlideButtonClick = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const handleNextButtonClick = () => {
    const nextSlide = (currentSlide + 1) % slides.length;
    setCurrentSlide(nextSlide);
  };

  const handlePreviousButtonClick = () => {
    const previousSlide = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(previousSlide);
  };

  


  const slides = [
    <div className='form-content'>
      hi
      <Story onFormChange={handleFormChange} />
    </div>,

    <div className='form-content'>
      i am
      <Story onFormChange={handleFormChange} />
    </div>,

<div className='form-content'>
  anjali
<Story onFormChange={handleFormChange} />
</div>,


<div className='form-content'>
  kumari
      <Story onFormChange={handleFormChange} />
    </div>,

    
<div className='form-content'>
  puja
      <Story onFormChange={handleFormChange} />
    </div>,

    
<div className='form-content'>
      <Story onFormChange={handleFormChange} />
    </div>,



    // ... (other slide components)
  ];

  return (
    <div className='slider-container'>
      <div className='slider-content'>{slides[currentSlide]}</div>
      <div className='navigation-buttons'>
        {[0, 1, 2, 3, 4, 5].map((slideIndex) => (
          <button
            key={slideIndex}
            type='button'
            onClick={() => handleSlideButtonClick(slideIndex)}
            className={currentSlide === slideIndex ? 'active' : ''}
          >
            Slide {slideIndex + 1}
          </button>
        ))}
      </div>

      <div className='navigation-button'>
        <button type='button' onClick={handlePreviousButtonClick} id='previous'>
          Previous
        </button>
        <button type='button' onClick={handleNextButtonClick} id='next'>
          Next
        </button>
        <button type='submit' id='post' >
          Post
        </button>
      </div>
    </div>
  );
}

export default Slides;
