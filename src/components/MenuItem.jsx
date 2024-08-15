import { useState } from "react";
import MenuList from "./MenuList";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentTitle) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentTitle]: !displayCurrentChildren[getCurrentTitle],
    });
    console.log(displayCurrentChildren);
  }

  return (
    <li>
      <div className="menu-item-container">
        <p>{item.title}</p>
        {item && item.submenu && item.submenu.length > 0 ? (
          <span onClick={() => handleToggleChildren(item.title)}>
            {displayCurrentChildren[item.title] ? "-" : "+"}
          </span>
        ) : null}
      </div>
      {item &&
      item.submenu &&
      item.submenu.length > 0 &&
      displayCurrentChildren[item.title] ? (
        <MenuList list={item.submenu} />
      ) : null}
    </li>
  );
}
