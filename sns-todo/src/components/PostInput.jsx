import { useState } from "react";
import "./postInput.css";

// TODO import

function PostInput() {
  const [content, setContent] = useState({});

  const inputContent = (e) => {
    const content = e.target.value;

    const fullContent = {
      content: content,
    };
    setContent(fullContent);
  };

  return (
    <div className="post-input-box">
      <input
        className="post-input"
        placeholder="내용을 입력하세요"
        type="text"
        value={content.content || ""}
        onChange={inputContent}
      />
      <div className="post-button"
      // TODO Post가 등록되어야 합니다.
      >
        게시
      </div>
    </div>
  );
}

export default PostInput;
