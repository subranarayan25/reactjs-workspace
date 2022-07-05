// import { signInWithRedirect } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  //   signInWithGoogleRedirect,
  createUserDocOutOfAuth,
} from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
// import Button from 'react-bootstrap/Button'
import GoogleButton from "react-google-button";

const SignIn = () => {
  //   useEffect(async ()=>{
  //     const response = await getRedirectResult(auth)

  //   },[]);

  //   useEffect(() => {
  //     const fetchData = async ()=> {
  //       // You can await here
  //       const response = await getRedirectResult(auth)
  //       if (response) {
  //         const userDocRef = await createUserDocOutOfAuth(response.user);
  //       }
  //     }
  //     fetchData();
  //   }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocOutOfAuth(user);
  };

  return (
    <div>
      <h1>SIGN-IN PAGE</h1>
      {/* <Button as="input" type="button" value="Continue with Google" /> */}
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign-in With Google Redirect
      </button> */}

        <GoogleButton
            onClick={() => {
            console.log("Google button clicked");
            }}
        />
        <br />
    </div>
  );
};

export default SignIn;
