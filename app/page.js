"use client";

import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default function TestFirebasePage() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "plants"));
        const plantList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPlants(plantList);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🌿 Firebase Connection Test</h1>
      <ul>
        {plants.length > 0 ? (
          plants.map((p) => (
            <li key={p.id}>
              <strong>{p.name}</strong> — {p.type}
            </li>
          ))
        ) : (
          <p>No plants found (or Firestore empty).</p>
        )}
      </ul>
    </div>
  );
}
