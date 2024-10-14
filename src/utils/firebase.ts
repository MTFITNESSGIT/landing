import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBNIhLlIQFOnazldCLKIxWwG49TSHdwnLQ",
  authDomain: "mtfitness-dd45d.firebaseapp.com",
  projectId: "mtfitness-dd45d",
  storageBucket: "mtfitness-dd45d.appspot.com",
  messagingSenderId: "1096112590151",
  appId: "1:1096112590151:web:83de82d2e1722df5e85062",
  measurementId: "G-4F1R7JFJTV",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
