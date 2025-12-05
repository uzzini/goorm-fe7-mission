import "./index.css";

export default function SideBarHeader({ isOpen, setIsOpen }) {
  const handleSidebarOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="SideBarHeader">
      <div className="SideBarTitle">메모장</div>
      <button className="SideBarOpenBtn" onClick={handleSidebarOpen}>
        {isOpen ? "<<" : ">>"}
      </button>
    </div>
  );
}