const express = require('express');
const Slide = require('../models/slide');

const router = express.Router();

router.get('/slides/:slideNumber', async (req, res) => {
  try {
    const slideNumber = parseInt(req.params.slideNumber);
    const slide = await Slide.findOne({ slideNumber });
    res.json(slide);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/slides', async (req, res) => {
  try {
    const { category, image, description, heading } = req.body;

    // Check if all required fields are provided
    if (!category || !image || !description || !heading) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newSlide = new Slide({
      slideNumber: req.body._id, // Use _id as slideNumber
      category,
      image,
      description,
      heading,
    });

    await newSlide.save();
    res.status(201).json({ message: 'Slide created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


//edit the slides

//router.put('/slides/:slideNumber', async (req, res) => {
 // try {
   // const slideNumber = parseInt(req.params.slideNumber);
   // const { category, image, description, heading } = req.body;

    // Check if all required fields are provided
    //if (!category || !image || !description || !heading) {
      //return res.status(400).json({ error: 'All fields are required' });
    //}

    // Find the slide by slideNumber and update its fields
    //const updatedSlide = await Slide.findOneAndUpdate(
      //{ slideNumber },
      //{ category, image, description, heading },
      //{ new: true } // Return the updated slide
    //);

    //if (!updatedSlide) {
      //return res.status(404).json({ error: 'Slide not found' });
    //}

   // res.json(updatedSlide);
  //} catch (error) {
    //console.error(error);
    //res.status(500).json({ error: 'Internal server error' });
  //}
//});









module.exports = router;
