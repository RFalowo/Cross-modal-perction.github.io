import pkg from 'mongoose';
const { model } = pkg;
import emailSchema from './emailSchema.js';
const EmailModel = model("Email-database", emailSchema);
export default EmailModel;
