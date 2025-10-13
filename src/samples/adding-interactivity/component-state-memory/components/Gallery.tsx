import { Button } from "@mui/material";
import sculptureList from "../data/sculptureList";
import { useState } from "react";

export function GalleryProblem() {
  let index = 0;
  function handleClick() {
    index = (index + 1) % sculptureList.length;
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <Button onClick={handleClick}>Next</Button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  );
}

export function GallerySolution() {
  const [index, setIndex] = useState<number>(0);
  const [showMore, setShowMore] = useState<boolean>(false);

  function handleClick() {
    setIndex((index + 1) % sculptureList.length);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <Button onClick={handleClick}>Next</Button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  );
}
