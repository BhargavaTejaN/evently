import { Schema, model, models } from "mongoose";

const UniqueRequired = {
    type: String,
    required: true,
    unique: true
};

const StringRequired = {
    type: String,
    required: true
};

const UserSchema = new Schema({
    clerkId : UniqueRequired,
    email:UniqueRequired,
    username: UniqueRequired,
    firstName: StringRequired,
    lastName: StringRequired,
    photo:StringRequired
});

const User = models.User || model('User',UserSchema);
export default User;