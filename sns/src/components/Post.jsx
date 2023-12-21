import { useState } from "react";
import "./post.css";
import { updatePost, deletePost } from "../firebase.config";

function Post({ post }) {
  console.log(post);
  const [isEditMode, setIsEditMode] = useState(false);
  const [content, setContent] = useState("");

  const updatePostHandler = (id, content) => {
    setIsEditMode(!isEditMode);
    updatePost(id, content);
  };

  return (
    <div className="posts">
      {isEditMode ? (
        <>
          <input
            className="post-content"
            defaultValue={post.content}
            onChange={(e) => setContent(e.target.value)}
          ></input>
          <button
            className="button"
            onClick={() => updatePostHandler(post.id, content)}
          >
            완료
          </button>
        </>
      ) : (
        <>
          <div className="post-content">{post.content}</div>
          <button className="button" onClick={() => setIsEditMode(!isEditMode)}>
            수정
          </button>
        </>
      )}

      <button className="button" onClick={() => deletePost(post.id)}>
        삭제
      </button>
    </div>
  );
}

export default Post;
