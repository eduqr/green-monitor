import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

//const env = import.meta.env;

const firebaseConfig = {
  apiKey: "AIzaSyD9uQBawX49wTwg93LM-NoZQRTxQRnQvko",
  authDomain: "green-monitor-d879b.firebaseapp.com",
  databaseURL: "https://green-monitor-d879b-default-rtdb.firebaseio.com",
  projectId: "green-monitor-d879b",
  storageBucket: "green-monitor-d879b.appspot.com",
  messagingSenderId: "904212175967",
  appId: "1:904212175967:web:df27fb1b417b51292a8fea",
  TestRoute : "Planta/"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function updateUI(data: any) {
  //  const dataContainer = document.getElementById("data-container")!;
  //  dataContainer.textContent = JSON.stringify(data, null, 2);
  document.getElementById("temperature")!.textContent = data.DHTTemp + " °C";
  document.getElementById("soil-humidity")!.textContent = data.HWHumedad + " %";
  document.getElementById("air-humidity")!.textContent = data.DHTHumedad + " %";
  document.getElementById("air-quality")!.textContent = data.MQCorrectedPPM + " PPM";
}

export function initRealtimeData() {
  const dataRef = ref(database, firebaseConfig.TestRoute);
  onValue(dataRef, (snapshot) => {
    const data = snapshot.val();
    console.log("Datos recibidos desde Firebase:", data); 

    if (data) {
      updateUI(data);
    } else {
      console.error("No se recibieron datos desde Firebase.");
    }
  }, (error) => {
    console.error("Error al recibir datos de Firebase:", error);
  });
}

