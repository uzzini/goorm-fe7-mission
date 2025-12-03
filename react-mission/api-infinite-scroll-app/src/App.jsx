import { useEffect, useState, useRef } from "react";

function App() {
  const [allPosts, setAllPosts] = useState([]); // 전체 데이터
  const [posts, setPosts] = useState([]); // 화면에 보여지는 데이터
  const [page, setPage] = useState(1); // 현재 페이지
  const postsPerPage = 10; // 한 페이지에 보여줄 데이터 수

  const loaderRef = useRef(null); // 무한스크롤 감지용 DOM 요소

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setAllPosts(data);
        setPosts(data.slice(0, postsPerPage)); // 처음 렌더링 10개 데이터만
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchPosts();
  }, []);

  // IntersectionObserver 설정
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const nextPage = page + 1;
          const nextPosts = allPosts.slice(0, nextPage * postsPerPage);

          if (nextPosts.length !== posts.length) {
            setPosts(nextPosts);
            setPage(nextPage);
          }
        }
      },
      { root: null, rootMargin: "0px", threshold: 1.0 }
    );

    // loaderRef div 관찰
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    // 컴포넌트 언마운트 시 옵저버 해제
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [page, allPosts]);

  return (
    <div>
      <ol style={{ listStylePosition: "inside" }}>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
            <br />
          </li>
        ))}
      </ol>

      <div ref={loaderRef}></div>
    </div>
  );
}

export default App;
