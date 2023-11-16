import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/Firebase.init";
import { useState } from "react";
const Login = () => {

    const [user, setUser] = useState(null)

    const auth = getAuth(app);
    console.log(app)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

   

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                setUser(loggedInUser)
            })
            .catch(error => {
            console.log('error',error.message)
            })
    }

    const handleGoogleSigOut = () => {
        signOut(auth)
            .then(result => {
                setUser(null)
                console.log(result)
            })
            .catch(error => {
            console.log(error)
        })
    }
    const handleGitHubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                setUser(loggedInUser)
            })
            .catch(error => {
            console.log('error',error.message)
            })
    }
    return (
        <div>
            {user ? 
                <button onClick={handleGoogleSigOut}>Google Sign Out</button> :
                <>
                    <button onClick={handleGoogleSignIn}>Google log in</button>
                <button onClick={handleGitHubSignIn}>GitHub log in</button>
                </>
            }
        {user && <div>
            
                <h1>Name: {user.displayName}</h1>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
            
        </div>}
        </div>
    );
};

export default Login;