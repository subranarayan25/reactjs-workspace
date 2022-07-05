import {signInWithGooglePopup,createUserDocOutOfAuth} from "../../utils/firebase/firebase.utils"

const SignIn=()=>{
    const logGoogleUser=async()=>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocOutOfAuth(user);

    }

    return (
        <div>
               <h1>SIGN-IN PAGE</h1> 
               <button onClick={logGoogleUser}>Sign-in With Google</button>
        </div>
    )
}


export default SignIn