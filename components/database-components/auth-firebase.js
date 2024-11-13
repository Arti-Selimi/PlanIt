import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/firebase";

export const onSubmit = async (data, formState, router) => {
  const { Name, Surname, email, password } = data;

  console.log("okkk")

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
      console.log("okej")
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User logged in:", userCredential.user);
    }
    router.push("/home");
  } catch (error) {
    alert("Please fill all the required fields, if the error still pops up then there is an account already registered with that email address");
  }
};
