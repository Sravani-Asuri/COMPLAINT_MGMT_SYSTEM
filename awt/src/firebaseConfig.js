import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const app = initializeApp ({
apiKey: "AIzaSyDyzf6JFFRNwAOaMyx8bzaTecbwXruDUy4",
  authDomain: "awt-project-247ff.firebaseapp.com",
  projectId: "awt-project-247ff",
  storageBucket: "awt-project-247ff.appspot.com",
  messagingSenderId: "201050944345",
  appId: "1:201050944345:web:94e2ae7f605835d1431248"
});
// Firebase storage reference
const storage = getStorage(app);
export default storage;