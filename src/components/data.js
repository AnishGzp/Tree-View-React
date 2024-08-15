export const menus = [
  {
    title: "File",
    submenu: [
      {
        title: "New",
        submenu: [{ title: "Project" }, { title: "File" }],
      },
      { title: "Open" },
      { title: "Save" },
    ],
  },
  {
    title: "Edit",
    submenu: [
      { title: "Undo" },
      { title: "Redo" },
      { title: "Cut" },
      { title: "Copy" },
      { title: "Paste" },
    ],
  },
  {
    title: "View",
    submenu: [
      { title: "Zoom In" },
      { title: "Zoom Out" },
      {
        title: "Layout",
        submenu: [{ title: "Single Pane" }, { title: "Double Pane" }],
      },
    ],
  },
  {
    title: "Help",
    submenu: [{ title: "Documentation" }, { title: "About" }],
  },
];

export default menus;
