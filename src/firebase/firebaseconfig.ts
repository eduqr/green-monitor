import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const env = import.meta.env;

const firebaseConfig = {
  apiKey: env.PUBLIC_FIREBASE_API_KEY,
  authDomain: env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: env.PUBLIC_FIREBASE_DATABASE_URL,
  projectId: env.PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.PUBLIC_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function updateUI(data: []) {
  const dataContainer = document.getElementById("data-container")!;
  dataContainer.textContent = JSON.stringify(data, null, 2);
}

export function initRealtimeData() {
  const dataRef = ref(database, env.PUBLIC_FIREBASE_TEST_ROUTE);
  onValue(dataRef, (snapshot) => {
    const data = snapshot.val();
    updateUI(data);
  });
}
