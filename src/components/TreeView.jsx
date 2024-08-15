import MenuList from "./MenuList";

export default function TreeView({ menus = [] }) {
  return (
    <div className="container">
      <MenuList list={menus} />
    </div>
  );
}
