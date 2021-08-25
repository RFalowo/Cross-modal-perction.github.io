import mongoose from "mongoose";
const FeedbackSchema = new mongoose.Schema({
    Feedback: String,
});
export default FeedbackSchema;
