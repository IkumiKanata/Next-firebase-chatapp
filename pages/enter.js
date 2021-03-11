import { auth, googleAuthProvider } from "../lib/firebase"

export default function EnterPage(props) {
  const user = null;
  const username = null;
  
  return (
<main>
  <h1>sign up</h1> 
  {user? 
  !username ? <UserNameForm /> : <SignOutButton />
  :
  <SignInButton />
}
</main>

  )
}

function SignInButton() {
 const signInWithGoogle = async () => {
   await auth.signInWithPopup(googleAuthProvider);
 };

function SignInAnonymously() {
  auth.signInAnonymously()
  .then(() => {
    // Signed in..
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
 };

   return(
     <div>
     <button className="btn-google" onClick={signInWithGoogle}>
<img src={"/google.png"}></img> sign in with google

     </button>
     <button className="btn-google" onClick={SignInAnonymously}>
<img src={"/google.png"}></img> Guest login

     </button>

     </div>
   )
 };

function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>
}
function UserNameForm() {

}
