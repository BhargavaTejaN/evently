"use server";

import { revalidatePath } from "next/cache";

import { CreateUserParams, UpdateUserParams } from "@/types";
import { handleError } from "../utils";
import { connectToDB } from "../database";
import User from "../database/models/user.model";
import Event from "../database/models/event.model";
import Order from "../database/models/order.model";

export const createUser = async (user: CreateUserParams) => {
  try {
    await connectToDB();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
};

export const updateUser = async (clerkId: string, user: UpdateUserParams) => {
  try {
    await connectToDB();

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updateUser) throw new Error("User Update Failed");
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
};

export const deleteUser = async (clerkId:string) => {
  try {
    await connectToDB();

    // find user to delete
    const userToDelete = await User.findOne({clerkId});

    if(!userToDelete){
      throw new Error('User not found');
    }

    // unlink relationships
    await Promise.all([
      // update the events collection to remove references to the user
      Event.updateMany(
        {_id:{$in: userToDelete.events}},
        {$pull: {organizer: userToDelete._id}}
      ),

      // Update the 'orders' collection to remove references to the user
      Order.updateMany({ _id: { $in: userToDelete.orders } }, { $unset: { buyer: 1 } }),     
    ])

    // Delate user
    const deletedUser = await User.findByIdAndDelete(userToDelete._id)
    revalidatePath('/');

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)): null

  } catch (error) {
    handleError(error);
  }
};

const getUserById = async(userId:string) => {
  try {
    await connectToDB();
    const user = await User.findById(userId);

    if(!user) throw new Error('User not found');
    return JSON.parse(JSON.stringify(user))
  } catch (error) {
    handleError(error);
  }
};