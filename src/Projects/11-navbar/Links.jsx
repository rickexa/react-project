import React, { useRef } from "react";
import { useEffect } from "react/cjs/react.development";
import { links } from "./data";

function Links({ showLinks }) {
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const height = linksRef.current.getBoundingClientRect().height;
    console.log(height);
    if (showLinks) linksContainerRef.current.style.height = height + "px";
    else linksContainerRef.current.style.height = 0;
  }, [showLinks]);

  return (
    // <div className={`links-container ${showLinks && "show-container"}`} ref={linksContainerRef}>
    <div className="links-container" ref={linksContainerRef}>
      <ul className="links" ref={linksRef}>
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Links;
