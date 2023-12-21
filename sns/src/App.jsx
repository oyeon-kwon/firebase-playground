import { useState, useEffect } from "react";
import Feed from "./components/Feed";
import { postsDocSnap } from "../src/firebase.config";

import {
  getFirestore,
  collection,
  doc,
  setDoc,
  addDoc,
  getDocs,
} from "firebase/firestore";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = [];

    postsDocSnap.forEach((doc) => {
      // 가져온 모든 문서들을 확인
      // console.log(doc.id, " => ", doc.data());

      const post = {
        id: doc.id,
        ...doc.data(),
      };

      posts.push(post);
      setPosts(posts);
    });
  }, [postsDocSnap]);

  return (
    <div>
      <Feed posts={posts} setPosts={setPosts} />
    </div>
  );
}

export default App;
