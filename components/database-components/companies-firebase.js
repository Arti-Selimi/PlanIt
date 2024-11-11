import { ref, get, child } from "firebase/database";
import { db } from "@/firebase";

export const fetchData = async (setCompanies) => {
    try {
      const dbRef = ref(db);
      const snapshot = await get(child(dbRef, "Companies"));
      if (snapshot.exists()) {
        const companiesData = [];
        snapshot.forEach((childSnapshot) => {
          companiesData.push(childSnapshot.val());
        });
        setCompanies(companiesData);
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.error("Error fetching companies: ", error.message);
    }
};