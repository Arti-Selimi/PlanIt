import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/firebase";

export const onSubmit = async (data, formState, router) => {
  const { Name, Surname, email, password } = data;

  try {
    if (!formState) {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, {
        displayName: `${Name.toUpperCase()} ${Surname.toUpperCase()}`,
      });
      console.log("User signed up:", userCredential.user);
    } else {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User logged in:", userCredential.user);
    }
    router.push("/home");
  } catch (error) {
    console.error("Error:", error.code, error.message);
  }
};
