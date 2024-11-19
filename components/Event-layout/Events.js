"use client";

import { useEffect, useState } from "react";
import { getEvents } from "../database-components/events-firebase";
import styles from "./events.module.scss";
import { auth } from "@/firebase";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        getEvents(setEvents);
      } else {
        console.log("No user is logged in.");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className={styles.eventContainer}>
      {events.length ? (
        events.map((event) => (
          <div className={styles.event} key={event.id}>
            <p><span>Name:</span>{event.name}</p>
            <p><span>Category:</span>{event.category}</p>
            <p><span>Date:</span>{event.date}</p>
            <p>
              <span>From</span> {event.startingTime} <span>to</span> {event.endingTime}
            </p>
          </div>
        ))
      ) : (
        <h1>No events found!</h1>
      )}
    </div>
  );
}
