export const firebaseConfig = {
  apiKey: "AIzaSyAJ_sUMAWVb9F6TQsHDQEtP0pxD-7LHFZ0",
  authDomain: "p-90-51348.firebaseapp.com",
  projectId: "p-90-51348",
  storageBucket: "p-90-51348.appspot.com",
  messagingSenderId: "1061088260860",
  appId: "1:1061088260860:web:b88c4ac9afe1748c825d79"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
