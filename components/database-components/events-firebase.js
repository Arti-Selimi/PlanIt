import { auth, db } from "@/firebase";
import { ref, get } from "firebase/database";

export const getEvents = async (setEvents) => {
  const user = auth.currentUser;

  if (!user) {
    console.log("No user is logged in");
    return;
  }

  const userRef = ref(db, `events/${user.displayName}`);

  try {
    console.log("User:", user);
    console.log("UserRef:", userRef);

    const snapshot = await get(userRef);
    if (snapshot.exists()) {
      const events = Object.entries(snapshot.val()).map(([key, value]) => ({
        id: key,
        ...value,
      }));

      console.log("User events:", events);
      setEvents(events);
    } else {
      console.log("No events found for this user.");
    }
  } catch (error) {
    console.error("Error fetching events:", error);
  }
};