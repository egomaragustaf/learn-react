import { useState } from "react";
import Button from "./Button";

export default function Counter() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return <Button onClick={handleClick}>Clicked {likes} Times</Button>;
}
