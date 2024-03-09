import { useState } from "react";

function Header({ title, subtitle }) {
  return (
    <div>
      <h1>{`Cool ${title}`}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}

function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Marie Curie"];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes((prevLikes) => prevLikes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship." subtitle="a subtitle" />
      <ul>
        {names.map((name, index) => (
          <li key={`${name}_${index}`}> {name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Like - {likes}</button>
    </div>
  );
}

root.render(<HomePage />);
