import "./index.css";
import SideBarHeader from "../SideBarHeader/index";
import MemoList from "../MemoList/index";
import SideBarFooter from "../SideBarFooter/index";
import { useState, useEffect } from "react";

function initSideBarOpen() {
  const sidebar_isOpen = sessionStorage.getItem("sidebar_isOpen");

  if (sidebar_isOpen === null) return true; // 저장값 없으면 열린 상태가 기본
  return JSON.parse(sidebar_isOpen);
}

export default function SideBar({
  memos,
  selectedMemoIndex,
  setSelectedMemoIndex,
  onAddMemo,
  onMemoDeleteClick,
}) {
  const [isOpen, setIsOpen] = useState(initSideBarOpen);

  useEffect(() => {
    sessionStorage.setItem("sidebar_isOpen", JSON.stringify(isOpen));
  }, [isOpen]);

  return (
    <div className={`SideBar ${isOpen ? "SideBar_open" : "SideBar_close"}`}>
      <SideBarHeader isOpen={isOpen} setIsOpen={setIsOpen} />

      {isOpen && (
        <>
          <MemoList
            memos={memos}
            selectedMemoIndex={selectedMemoIndex}
            setSelectedMemoIndex={setSelectedMemoIndex}
            onMemoDeleteClick={onMemoDeleteClick}
          />
          <SideBarFooter onAddMemo={onAddMemo} />
        </>
      )}
    </div>
  );
}
