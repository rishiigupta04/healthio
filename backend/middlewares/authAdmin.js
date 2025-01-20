import jwt from "jsonwebtoken";

//admin authentication middleware

const authAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized - No token provided" });
    }

    // Remove 'Bearer ' if present
    const tokenString = token.startsWith("Bearer ") ? token.slice(7) : token;

    const decoded = jwt.verify(tokenString, process.env.JWT_SECRET);

    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export default authAdmin;
