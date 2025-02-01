import jwt from "jsonwebtoken";

//user authentication middleware

const authUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "Error - No token provided" });
    }

    // Remove 'Bearer ' if present
    const tokenString = token.startsWith("Bearer ") ? token.slice(7) : token;

    const decoded = jwt.verify(tokenString, process.env.JWT_SECRET);

    req.body.userId = decoded.id;

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export default authUser;
