import React, { useRef } from "react";
import { links } from "./data";

function Links() {
  const linksRef = useRef(null);

  // useEffect(() => {
  //   const height = linksRef.current.getBoundingClientRect().height;
  //   console.log(height);
  //   if (showLinks) linksContainerRef.current.style.height = height + "px";
  //   else linksContainerRef.current.style.height = 0;
  // }, [showLinks]);

  return (
    <ul className="links" ref={linksRef}>
      {links.map((link) => {
        const { id, url, text, icon } = link;
        return (
          <li key={id}>
            <a href={url}>
              {icon}
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Links;
