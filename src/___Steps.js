/** Initial setups
 * ----------------
 * 1.visit console.firebase.google.com
 * 2.create a project(skip google analyticss)
 * 3.Register App(create config)
 * 4.install firebase
 * 5.add config file to your project
 * 6.DANGER: do not publish or make firebase config to public by pushing those in github
 * ---------------------
 * integrations
 * ------------------
 * 7.Visit: Go to docs > Build > Authentications > web > Get Started
 * 8.export app from the firebase.config.js file : export default app
 * 9. Login.jsx: import getAuth from firebase/auth
 * 10. create cosnt auth = getAuth(app)
 * ------------------
 * provider setups
 * -----------------
 * 11. import googleAuthProvider and create a new provider
 * 12. use signInWithPopUp and pass auth and provider
 * 13.activate sign in method (google,facebook,github)
 * 14.[vite]: change 127.0.0.1 to localhost
 */