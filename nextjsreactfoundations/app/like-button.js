'use client';

import { useState } from "react";

export default function LikeButton() {
    const [likes, setLikes] = useState(0);

    function handleClick() {
        // Functional state updater
        setLikes((prevLikes) => prevLikes + 1);
      }

    return <button onClick={handleClick}>Like - {likes}</button>
}