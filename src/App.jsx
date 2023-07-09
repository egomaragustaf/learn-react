import { useState } from "react";

import Header from "./components/Header";

export default function App() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <main>
      <Header />
      <button onClick={handleClick}>Click Times ({likes})</button>
    </main>
  );
}
