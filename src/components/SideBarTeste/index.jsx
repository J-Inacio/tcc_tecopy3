import React from "react";

const SideBarTeste = props => {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
  return (
    <div className={sidebarClass}>
      <div> I slide into view </div>
      <div> Me Too! </div>
      <div> Me Three! </div>
      <button onClick={props.toggleSidebar} className="sidebar-toggle">
      <img src="img/menu.svg" alt="Botão Menu" />
      </button>
    </div>
  );
};
export default SideBarTeste;