import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "Server is running." }).status(200);
});

export default router;