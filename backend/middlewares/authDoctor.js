import jwt from "jsonwebtoken";

//doctor authentication middleware

const authDoctor = async (req, res, next) => {
  try {
    const dtoken = req.headers.authorization;

    if (!dtoken) {
      return res.status(401).json({ message: "Error - No token provided" });
    }

    // Remove 'Bearer ' if present
    const tokenString = dtoken.startsWith("Bearer ") ? dtoken.slice(7) : dtoken;

    const decoded = jwt.verify(tokenString, process.env.JWT_SECRET);

    req.body.docId = decoded.id;

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export default authDoctor;
