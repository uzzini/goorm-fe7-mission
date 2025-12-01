// import './App.css'
import Mandoo from "./Mandoo"

const mandooTodoLists = {
  todos: ["간식 먹기", "화분 돌 다 꺼내기", "공유기 위에서 자기"],
};

export default function App() {
  return (
    <main style={{ padding: "20px" }}>
      <h3>Mandoo Todo</h3>
      <Mandoo imgWidth={100} />
      <ul style={{ margin: "0px 20px", padding: 0}}>
        {mandooTodoLists.todos.map((todo, idx) => (
          <li key={idx}>{todo}</li>
        ))}
      </ul>
    </main>
  );
}
