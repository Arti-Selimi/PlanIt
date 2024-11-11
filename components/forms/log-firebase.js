"use client";
import { db } from "@/firebase";
import { ref, push } from "firebase/database";
import { auth } from "@/firebase";

export const onSubmit = async (data) => {
  const { Name = "", Category = "", Date = "", startingTime = "", endingTime = "" } = data;
  const user = auth.currentUser;

  console.log(data)

  try {
    const eventsRef = ref(db, `events/${user.displayName}`);

    await push(eventsRef, data);

    console.log("Event successfully saved to Firebase!");
  } catch (error) {
    console.error("Error saving event to Firebase:", error);
  }
};
