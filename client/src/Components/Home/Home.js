import React, { useState,  useRef } from 'react';
import './Home.css';
import ImageViewer from 'react-simple-image-viewer';
import Register from '../Register/Register';
import Signin from '../Signin/Signin';
import { motion, useAnimation } from 'framer-motion';



import Food1 from '../Images/Food1.jpeg';
import Food2 from '../Images/Food2.jpeg';
import Food3 from '../Images/Food3.jpeg';

import Fitness from '../Images/Fitness.jpeg';
import Fitness1 from '../Images/Fitness1.jpeg';
import Fitness2 from '../Images/Fitness2.jpeg';
import Fitness3 from '../Images/Fitnesss3.jpeg';
import Fitness4 from '../Images/Fitness4.jpeg';

import Travel from '../Images/Travel.jpeg';
import Travel1 from '../Images/Travel1.jpeg';
import Travel2 from '../Images/Travel2.jpeg';
import Travel3 from '../Images/Travel3.jpeg';

import Movie from '../Images/Movie.jpeg';
import Movie1 from '../Images/Movie1.jpeg';
import Movie2 from '../Images/Movie2.jpeg';
import Movie3 from '../Images/Movie3.jpeg';

import Education from '../Images/Education.jpeg';
import Education1 from '../Images/Education1.jpeg';
import Education2 from '../Images/Education2.jpeg';
import Education3 from '../Images/Education3.jpeg';
import Education4 from '../Images/Education4.jpeg';




 

function Home() {

  const [showRegister, setShowRegister] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const [width, setWidth] = useState(0);
  const carousel = useRef(); // Define the carousel ref
  const controls = useAnimation();
  const [visibleImagesCount, setVisibleImagesCount] = useState(6);
  const [movedToContainer2, setMovedToContainer2] = useState([]);

  const [isViewerOpen1, setIsViewerOpen1] = useState(false);
  const [isViewerOpen2, setIsViewerOpen2] = useState(false);
  const [currentViewerImageIndex, setCurrentViewerImageIndex] = useState(0);

  const [showCategory2, setShowCategory2] = useState(false);


  



  const handleDragEnd = (event, info) => {
    if (info.offset.x > 0) {
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    } else if (info.offset.x < 0) {
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
  };



 

  


  const cardImages = [
    { image: Food1, text: "Delicious Food" },
    { image: Education, text: "Education" },
    { image: Movie, text: "Movie" },
    { image: Fitness, text: "Fitness" },
    { image: Travel, text: "Travel" },
    { image:Movie2 , text: "Healthcare Services" },
    { image: Food1, text: "Delicious Food" },
    { image: Education, text: "Healthcare Services" },
    { image: Movie3, text: "Delicious Food" },
    { image: Fitness1, text: "Healthcare Services" },
    { image: Travel1, text: "Delicious Food" },
    { image:Movie3 , text: "Healthcare Services" },
    
    // ... (add more images and text entries)
  ];



  const imageArray = [
    { image: Fitness1, text: 'fitness is a state of health and well-being.' },
    { image: Fitness2, text: 'fitness is a state of health and well-being...' },
    { image: Fitness3, text: 'fitness is a state of health and well-being...' },
    { image: Fitness4, text: 'fitness is a state of health and well-being...' },
    { image: Fitness1, text: 'fitness is a state of health and well-being.' },
    { image: Fitness2, text: 'fitness is a state of health and well-being...' },
    { image: Fitness3, text: 'fitness is a state of health and well-being...' },
    { image: Fitness4, text: 'fitness is a state of health and well-being...' },
    // Add more images here
  ];

  const PicArray=[

    { image: Fitness3, text: 'fitness is a state of health and well-being...' },
    { image: Fitness4, text: 'fitness is a state of health and well-being...' },
    { image: Fitness1, text: 'fitness is a state of health and well-being.' },

  ]

  const openImageViewer1 = (index) => {
    setCurrentViewerImageIndex(index);
    setIsViewerOpen1(true);
  };

  const openImageViewer2 = (index) => {
    setCurrentViewerImageIndex(index);
    setIsViewerOpen2(true);
  };

  const closeImageViewer1 = () => {
    setIsViewerOpen1(false);
  };

  const closeImageViewer2 = () => {
    setIsViewerOpen2(false);
  };

  

  const handleRegisterButtonClick = () => {
    setShowRegister(true);
  };

  const handleCloseRegister = () => {
    setShowRegister(false);
  };

  const handleSigninButtonClick = () => {
    setShowSignin(true);
  };

  

  const handleCloseSignin = () => {
    setShowSignin(false);
   
  };

  const handleSeeMoreClick = () => {
    setShowCategory2(true); // Show the category_container2 when "See more" is clicked
    const additionalImagesCount = 4;
    const additionalImages = PicArray.slice(
      visibleImagesCount,
      visibleImagesCount + additionalImagesCount
    );
    setMovedToContainer2((prevImages) => [...prevImages, ...additionalImages]);
    setVisibleImagesCount((prevCount) => prevCount + additionalImagesCount);
  };



  

 

  return (
    <>
    <div className='swip-body'>
        <div className='swip_home'>
          <div className='swipbar'>
            <h1 id='swiptory'>Swiptory</h1>

            
           
  <div>
    <button type="submit" id="Register" onClick={handleRegisterButtonClick}>
      Register now
    </button>

    <button type="submit" id="Sign" onClick={handleSigninButtonClick}>
      Sign in
    </button>
  </div>

</div>


         

          
<div className='category-container'>
          <motion.div
            ref={carousel}
            className='carousel'
            whileTap={{ cursor: 'grabbing' }}
            drag='x'
            dragConstraints={{ left: 0, right: width }}
            onDragEnd={handleDragEnd}
          >
            <motion.div
              className='inner-carousel'
              animate={controls}
            >
              {cardImages.map((entry, index) => (
                <motion.div
                  className='card-container'
                  key={index}
              
                >
                  <img src={entry.image} alt='' className='item-img' />
                  <p className='image-text'>{entry.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className='story'>Your Stories</div>

          
        <div className='category_container1'>
        {imageArray.map((entry, index) => (
          <div
            key={index}
            className='image-wrapper'
            onClick={() => openImageViewer1(index)}
          >
            <img src={entry.image} alt='' className='image-item' />
            <div className='text-overlay'>{entry.text}</div>
          </div>
        ))}
      </div>

      {showCategory2 && (
        <div className='category-container2'>
          {PicArray.map((entry, index) => (
            <div
              key={index}
              className='image-wrapper'
              onClick={() => openImageViewer2(index)}
            >
              <img src={entry.image} alt='' className='image-item' />
              <div className='text-overlay'>{entry.text}</div>
            </div>
          ))}
        </div>
      )}


{isViewerOpen1 && (
  
        <ImageViewer
          src={imageArray.map((entry) => entry.image)}
          currentIndex={currentViewerImageIndex}
          onClose={closeImageViewer1}
          style={{ Width: '400px', Height: '400px' }}

        />
        
      )}

      

      {isViewerOpen2 && (
        <ImageViewer
          src={PicArray.map((entry) => entry.image)}
          currentIndex={currentViewerImageIndex}
          onClose={closeImageViewer2}
          style={{ Width: '400px', Height: '400px' }}
        />
      )}



       

{!showCategory2 && (
            <div className="category_stories">
              <p>
                <button id="see" onClick={handleSeeMoreClick}>
                  See more
                </button>
              </p>

              <p id='Top'>
              Top stories about Food
            </p>
              
            </div>
          )}


            


          



          

        

{showRegister && <Register onClose={handleCloseRegister} />}

{showSignin && <Signin onClose={handleCloseSignin} />}


        </div>
      </div>
      
    
    </>
  );
}




  

  export default Home