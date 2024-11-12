"use client";
import { db } from "@/firebase";
import { ref, push } from "firebase/database";
import { auth } from "@/firebase";

export const onSubmit = async (data) => {
  const { Name = "", Category = "", Date = "", startingTime = "", endingTime = "" } = data;
  const user = auth.currentUser;

  if (!user) {
    window.alert("Please log in to submit an event.");
    return;
  }

  try {
    const eventsRef = ref(db, `events/${user.displayName}`);
    await push(eventsRef, data);
    window.confirm("Event successfully saved to Firebase!");
  } catch (error) {
    console.error("Error saving event to Firebase:", error);
  }
};
