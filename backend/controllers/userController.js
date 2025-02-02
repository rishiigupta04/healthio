//API to register user
import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/doctorModel.js";
import appointmentModel from "../models/appointmentModel.js";

// Register User API
// This API endpoint handles user registration
const registerUser = async (req, res) => {
  try {
    // Extract user data from request body
    // We expect the request body to contain the user's name, email, and password
    const { name, email, password } = req.body;

    // Validate user data
    // We check if all required fields are present
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Missing Details" });
    }

    // Validate email address
    // We use the validator library to check if the email address is valid
    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email address" });
    }

    // Validate password length
    // We require passwords to be at least 8 characters long
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters",
      });
    }

    // Encrypt password
    // We use the bcrypt library to hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    // We create a new user object with the provided data and hashed password
    const userData = { name, email, password: hashedPassword };

    // Save user to database
    // We use the userModel to create a new user document in the database
    const newUser = await userModel.create(userData);
    const user = await newUser.save();

    // Generate JWT token
    // We use the jsonwebtoken library to generate a token that can be used for authentication
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    // Return success response with token
    // We return a JSON response with a success message and the generated token
    res
      .status(200)
      .json({ success: true, message: "User registered successfully", token });
  } catch (error) {
    // Log any errors that occur during the registration process
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

//API to login user
// This API endpoint handles user login
const loginUser = async (req, res) => {
  try {
    // Extract user data from request body
    // We expect the request body to contain the user's email and password
    const { email, password } = req.body;

    // Validate user data
    // We check if all required fields are present
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Missing Details" });
    }

    // Find user by email
    // We use the userModel to find a user document in the database that matches the provided email
    const user = await userModel.findOne({ email });

    // Check if user exists
    // If no user is found, we return an error response
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    // Compare passwords
    // We use the bcrypt library to compare the provided password with the hashed password stored in the database
    const isMatch = await bcrypt.compare(password, user.password);

    // Check if passwords match
    // If the passwords do not match, we return an error response
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    // Generate JWT token
    // We use the jsonwebtoken library to generate a token that can be used for authentication
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    // Return success response with token
    // We return a JSON response with a success message and the generated token
    res.status(200).json({ success: true, message: "Login successful", token });
  } catch (error) {
    // Log any errors that occur during the login process
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

//API to get user profile data
// This API endpoint handles retrieving user profile data
const getProfile = async (req, res) => {
  try {
    // Extract user ID from request body
    // We expect the request body to contain the user's ID
    const { userId } = req.body;

    // Find user by ID and exclude password
    // We use the userModel to find a user document in the database that matches the provided ID and exclude the password field
    const userData = await userModel.findById(userId).select("-password");

    // Return user data
    // We return a JSON response with the user's profile data
    res.status(200).json({ success: true, userData });
  } catch (error) {
    // Log any errors that occur during the profile retrieval process
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

//API to update user profile
// This API endpoint handles updating user profile data
const updateProfile = async (req, res) => {
  try {
    // Extract user data from request body
    // We expect the request body to contain the user's ID, name, phone, address, date of birth, and gender
    const { userId, name, phone, address, dob, gender } = req.body;
    const imageFile = req.file;

    // Validate user data
    // We check if all required fields are present
    if (!name || !phone || !address || !dob || !gender) {
      return res
        .status(400)
        .json({ success: false, message: "Missing Details" });
    }

    // Update user data
    // We use the userModel to update a user document in the database that matches the provided ID
    const userData = await userModel.findByIdAndUpdate(userId, {
      name,
      phone,
      address: JSON.parse(address),
      dob,
      gender,
    });

    // Upload image if provided
    // If an image file is provided, we use the cloudinary library to upload the image and update the user's profile picture
    if (imageFile) {
      const image = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: "image",
      });
      const imageUrl = image.secure_url;

      // Update user image
      await userModel.findByIdAndUpdate(userId, { image: imageUrl });
    }

    // Return success response
    // We return a JSON response with a success message
    res
      .status(200)
      .json({ success: true, message: "Profile updated successfully" });
    await userData.save();
  } catch (error) {
    // Log any errors that occur during the profile update process
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

//API to book appointment
// This function handles the booking of an appointment by a user
const bookAppointment = async (req, res) => {
  try {
    // Extracting user ID, doctor ID, slot date, and slot time from the request body
    const { userId, docId, slotDate, slotTime } = req.body;

    // Fetching doctor data excluding the password
    const docData = await doctorModel.findById(docId).select("-password");
    // Checking if the doctor is available
    if (!docData.available) {
      return res
        .status(400)
        .json({ success: false, message: "Doctor is not available" });
    }

    // Fetching the slots booked by the doctor
    let slots_booked = docData.slots_booked;

    // Checking if the requested slot is already booked
    if (slots_booked[slotDate]) {
      if (slots_booked[slotDate].includes(slotTime)) {
        return res
          .status(400)
          .json({ success: false, message: "Slot is already booked" });
      }
      // Adding the slot time to the existing date if not already booked
      slots_booked[slotDate].push(slotTime);
    } else {
      // Creating a new date with the slot time if the date does not exist
      slots_booked[slotDate] = [];
      slots_booked[slotDate].push(slotTime);
    }

    // Fetching user data excluding the password
    const userData = await userModel.findById(userId).select("-password");
    // Removing the slots booked from the doctor data to avoid sending unnecessary data
    delete docData.slots_booked;

    // Creating appointment data
    const appointmentData = {
      userId,
      docId,
      docData,
      userData,
      amount: docData.fees,
      slotDate,
      slotTime,
      date: Date.now(),
    };

    // Creating a new appointment
    const newAppointment = new appointmentModel(appointmentData);
    await newAppointment.save();

    // Updating the doctor's slots booked
    await doctorModel.findByIdAndUpdate(docId, { slots_booked });

    // Sending a success response
    res.status(200).json({ success: true, message: "Appointment Booked" });
  } catch (error) {
    // Logging any errors that occur during the booking process
    console.log(error);
    // Sending an error response
    res.status(500).json({ success: false, message: error.message });
  }
};

export { registerUser, loginUser, getProfile, updateProfile, bookAppointment };
