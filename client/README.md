const express = require('express');
const app = express();
const multer = require('multer');
const connectDB = require('./db/connect');
const errorHandler = require('./middleware/error-handler');
const notFound = require('./middleware/not-found');
const cors = require('cors');
const path = require('path');
const cloudinary = require('cloudinary').v2;
const lettings = require('./routes/lettings');


cloudinary.config({
  cloud_name: 'njnjj2fdiawje',
  api_key: '186277285738544',
  api_secret: 'IKoKc-pKt9XF8dNdJbE3TeA9WyM',
});

const storage = multer.diskStorage({
  destination: ('./public/uploads/'),
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.path));
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 10 * 1024 * 1024,
  }
});

const port = process.env.PORT || 5000;
require('dotenv').config({ path: '.env' })


// Middleware
app.use(cors());
app.use(express.json());

// Routes

// app.use('/api/v1/auth', auth);
app.use('/api/v1/lettings', lettings);


// // post-content
// app.post('/api/v1/Posts', upload.single('postImage'), async (req, res, next) => {
//   const { postDate, postTitle, postTopic, postDescription, postInfo, postLine1, postLine2, postLine3, postLine4, postFooterText, postSummary, download_btn, postFooter, readme_btn } = req.body;

//   let postImageURL;

//   // Handle image updates
//   if (req.file) {
//     const postImage = req.file;
//     const postImageResult = await cloudinary.uploader.upload(postImage.path, {
//       folder: 'Assets',
//     });
//     postImageURL = postImageResult.secure_url;
//   }

//   const newContent = new earlsPostSchema({
//     postDate,
//     postTitle,
//     postTopic,
//     postDescription,
//     postInfo,
//     postLine1,
//     postLine2,
//     postLine3,
//     postLine4,
//     postSummary,
//     download_btn,
//     postFooter,
//     postFooterText,
//     readme_btn,
//     postImage: postImageURL
//   });

//   try {
//     const savedContent = await newContent.save();

//     const responseObj = {
//       ...savedContent._doc,
//     };

//     if (postImageURL) {
//       responseObj.postImage = postImageURL;
//     }

//     res.status(201).json(responseObj);
//   } catch (error) {
//     console.error('Error saving product:', error);
//     res.status(500).json({ message: 'Error saving product' });
//   }
// });

// // postDate, postTitle, postTopic, postImage, postDescription, postSummary, download_btn, postFooter, readme_btn

// app.put('/api/v1/editPost/:id', upload.single('postImage'), async (req, res, next) => {
//   const { postDate, postTitle, postTopic, postDescription,postFooterText, postInfo, postLine1, postLine2, postLine3, postLine4, postSummary, download_btn, postFooter, readme_btn } = req.body;
//   // console.log(req.body, "body")

//   const updateFields = {
//     postDate,
//     postTitle,
//     postTopic,
//     postDescription,
//     postInfo,
//     postLine1,
//     postLine2,
//     postLine3,
//     postLine4,
//     postSummary,
//     download_btn,
//     postFooter,
//     postFooterText,
//     readme_btn,
//   };

//   try {
//     const existingPost = await earlsPostSchema.findById(req.params.id);

//     if (!existingPost) {
//       return res.status(404).json({ message: 'Content not found' });
//     }

//     if (req.file) {
//       // Delete previous post image if it exists
//       if (existingPost.postImage) {
//         await cloudinary.uploader.destroy(existingPost.postImage.replace(cloudinary.config().cloud_name + '/', ''));
//       }

//       const postImage = req.file;
//       const postImageResult = await cloudinary.uploader.upload(postImage.path, {
//         folder: 'Assets',
//       });
//       updateFields.postImage = postImageResult.secure_url;
//     } else {
//       updateFields.postImage = existingPost.postImage;
//     }

//     if(!updateFields.postImage) {
//       updateFields.postImage = existingPost.postImage;
//     }
//     if(!updateFields.postDate) {
//       updateFields.postDate = existingPost.postDate;
//     }
//     if(!updateFields.postTitle) {
//       updateFields.postTitle = existingPost.postTitle;
//     }
//     if(!updateFields.postTopic) {
//       updateFields.postTopic = existingPost.postTopic;
//     }
//     if(!updateFields.postDescription) {
//       updateFields.postDescription = existingPost.postDescription;
//     }
//     if(!updateFields.postInfo) {
//       updateFields.postInfo = existingPost.postInfo;
//     }
//     if(!updateFields.postLine1) {
//       updateFields.postLine1 = existingPost.postLine1;
//     }
//     if(!updateFields.postLine2) {
//       updateFields.postLine2 = existingPost.postLine2;
//     }
//     if(!updateFields.postLine3) {
//       updateFields.postLine3 = existingPost.postLine3;
//     }
//     if(!updateFields.postLine4) {
//       updateFields.postLine4 = existingPost.postLine4;
//     }
//     if(!updateFields.postSummary) {
//       updateFields.postSummary = existingPost.postSummary;
//     }
//     if(!updateFields.download_btn) {
//       updateFields.download_btn = existingPost.download_btn;
//     }
//     if(!updateFields.postFooter) {
//       updateFields.postFooter = existingPost.postFooter;
//     }
//     if(!updateFields.postFooterText) {
//       updateFields.postFooterText = existingPost.postFooterText;
//     }
//     if(!updateFields.readme_btn) {
//       updateFields.readme_btn = existingPost.readme_btn;
//     }

//     const updatedContent = await earlsPostSchema.findByIdAndUpdate(
//       req.params.id,
//       { $set: updateFields }, // Use $set to update specific fields
//       { new: true }
//     );

//     // console.log(updatedContent, "updatedContent");
//     if (!updatedContent) {
//       return res.status(500).json({ message: 'Failed to update content' });
//     }

//     res.status(200).json(updatedContent);
//   } catch (error) {
//     console.error('Error updating product:', error);
//     res.status(500).json({ message: 'Error updating product' });
//   }
// });


app.use(errorHandler)
app.use(notFound)

const start = async () => {
  try {
    await connectDB(process.env.URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start(); 



// // ftp configration

// const express = require('express');
// const mongoose = require('mongoose');
// const multer = require('multer');
// const FTP = require('ftp');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // MongoDB connection (replace with your MongoDB connection string)
// mongoose.connect('mongodb+srv://muzi:muzi123@cluster0.grprhgv.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;

// // FTP configuration
// const ftpConfig = {
//   host: 'ftp.fcmrtdf.co.uk',
//   user: 'c343aa@fcmrtdf.co.uk',
//   password: 'zReTVVN-N',
// };

// const ftp = new FTP();
// ftp.connect(ftpConfig);

// // Express middleware for handling file uploads
// const upload = multer({ dest: './public/uploads/' });

// // Define a Property schema
// const propertySchema = new mongoose.Schema({
//   name: String,
//   description: String,
//   imageUrl: String,
// });

// const Property = mongoose.model('Property', propertySchema);

// // REST API endpoints
// app.use(express.json());

// // Create a property
// app.post('/api', upload.single('image'), async (req, res) => {
//   try {
//     const { name, description } = req.body;
//     const imageUrl = req.file ? req.file.path : '';

//     const property = new Property({ name, description, imageUrl });
//     await property.save();

//     // Upload the image to FTP server
//     ftp.put(imageUrl, `/DanhamzWebsite/${property._id}.jpg`, (err) => {
//       if (err) throw err;
//       console.log('Image uploaded to FTP server');
//     });

//     res.json(property);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Get all properties
// app.get('/api/', async (req, res) => {
//   try {
//     const properties = await Property.find();
//     res.json(properties);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Update a property
// app.put('/api/properties/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, description } = req.body;

//     const property = await Property.findByIdAndUpdate(id, { name, description }, { new: true });

//     res.json(property);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Delete a property
// app.delete('/api/properties/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     await Property.findByIdAndDelete(id);

//     // Delete the image from FTP server
//     ftp.delete(`/DanhamzWebsite/${id}.jpg`, (err) => {
//       if (err) throw err;
//       console.log('Image deleted from FTP server');
//     });

//     res.json({ message: 'Property deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
//     res.json(property);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Get all properties
// app.get('/api/', async (req, res) => {
//   try {
//     const properties = await Property.find();
//     res.json(properties);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Update a property
// app.put('/api/properties/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, description } = req.body;

//     const property = await Property.findByIdAndUpdate(id, { name, description }, { new: true });

//     res.json(property);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Delete a property
// app.delete('/api/properties/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     await Property.findByIdAndDelete(id);

//     // Delete the image from FTP server
//     ftp.delete(`/DanhamzWebsite/${id}.jpg`, (err) => {
//       if (err) throw err;
//       console.log('Image deleted from FTP server');
//     });

//     res.json({ message: 'Property deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
