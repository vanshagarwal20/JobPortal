import multer from "multer";

const storage = multer.memoryStorage();
// file is same as name given in singup.jsx
// ya ek middle ware hai toh mai jha jha chata hu ki image upload ho wha is middleware ko laga dunga in routes folder
// here the name of the middleware is singleUpload
export const singleUpload = multer({storage}).single("file");