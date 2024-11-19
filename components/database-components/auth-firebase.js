import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { auth } from "@/firebase";

export const onSubmit = async (data, formState, router) => {
  const { Name, Surname, email, password } = data;

  try {

    await setPersistence(auth, browserLocalPersistence);

    if (!formState) {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: `${Name.toUpperCase()} ${Surname.toUpperCase()}`,
      });
      console.log("User signed up:", userCredential.user);
    } else {

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", userCredential.user);
    }
    router.push("/home");
  } catch (error) {
    console.error("Error during authentication:", error);
    alert(
      "Please fill all the required fields, or if the error persists, there may already be an account with this email address."
    );
  }
};
