import { useState } from "react";
import "./post.css";

// TODO import

function Post({ post }) {
  console.log(post);
  const [isEditMode, setIsEditMode] = useState(false);
  const [content, setContent] = useState("");

  // TODO 수정한 게시물을 업데이트하는 함수를 만들어 주세요.

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
            // TODO 수정한 게시물을 업데이트하는 함수가 완료 버튼 클릭 시 실행되게 하세요.
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

      <button className="button"
        // TODO 삭제 버튼 클릭 시 해당하는 포스트가 삭제되게 하세요.
      >
        삭제
      </button>
    </div>
  );
}

export default Post;
