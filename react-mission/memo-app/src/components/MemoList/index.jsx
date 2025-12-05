import MemoItem from "../MemoItem/index";

export default function MemoList({
  memos,
  selectedMemoIndex,
  setSelectedMemoIndex,
  onMemoDeleteClick,
}) {
  return (
    <div>
      {memos.map((memo, index) => (
        <MemoItem
          key={index}
          onMemoItemClick={() => setSelectedMemoIndex(index)}
          isSelected={selectedMemoIndex === index}
          onMemoDeleteClick={(e) => {
            onMemoDeleteClick(index)
            e.preventDefault(); // 기본 동작 중단
            e.stopPropagation(); // 이벤트 버블링 중단
          }}
        >
          {memo.title}
        </MemoItem>
      ))}
    </div>
  );
}