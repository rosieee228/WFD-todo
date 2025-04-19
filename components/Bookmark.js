
import { useState } from "react";

export default function Bookmark({ sentence }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div>
      <p>{sentence}</p>
      <button onClick={toggleBookmark}>
        {isBookmarked ? "Unbookmark" : "Bookmark"}
      </button>
    </div>
  );
}
