'use client';
import { useState } from "react";

export default function SampleComponent() {
    const [loggedIn, setLogIn] = useState(false);

    function logIn() {
        // Functional state updater
        setLogIn((loggedIn) => true);
        console.log(loggedIn)
      }
    return (
      <main>
        <button onClick={logIn} >Press me</button>
      </main>
    );
  }
  