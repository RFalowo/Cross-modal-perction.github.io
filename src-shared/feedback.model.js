import pkg from "mongoose";
const { model } = pkg;
import FeedbackSchema from "./FeedbackSchema.js";
const FeedbackModel = model("Feedback-database", FeedbackSchema);
export default FeedbackModel;
