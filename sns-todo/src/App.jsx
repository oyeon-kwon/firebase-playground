import { useState, useEffect } from "react";
import Feed from "./components/Feed";

// TODO import

function App() {
  const [posts, setPosts] = useState([]);

  // TODO 모든 포스트를 가져와야 합니다.

  return (
    <div>
      <Feed posts={posts} setPosts={setPosts} />
    </div>
  );
}

export default App;
