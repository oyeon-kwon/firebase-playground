import Post from "./Post";
import PostInput from "./PostInput";

function Feed({ posts }) {
  return (
    <div>
      <PostInput />
      {posts.map((post, id) => {
        return <Post post={post} key={id} />;
      })}
    </div>
  );
}

export default Feed;
