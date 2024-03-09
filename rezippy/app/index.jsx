import LikeButton from "./like-button";

// React components should be capitalized to distinguish them from plain HTML and JavaScript
function Header({ title, subtitle }) {
  return (
    <div>
      <h1>{`Cool ${title}`}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Marie Curie"];

  return (
    <div>
      <Header title="Develop. Preview. Ship." subtitle="a subtitle" />
      <ul>
        {names.map((name, index) => (
          <li key={`${name}_${index}`}> {name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}
