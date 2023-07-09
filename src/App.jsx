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
      <button
        className="pointer-events-auto rounded-md bg-blue-600 px-3 py-2 text-lg font-semibold leading-5 text-white hover:bg-blue-500"
        onClick={handleClick}
      >
        Clicked {likes} Times
      </button>
    </main>
  );
}
