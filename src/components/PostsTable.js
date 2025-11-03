import React, { useState, useEffect } from "react";

const PostsTable = () => {
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ambil data post dari API
  const fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const nextPost = () => {
    if (currentIndex < posts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevPost = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (posts.length === 0) return <p>Loading...</p>;

  const post = posts[currentIndex];

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Post Detail</h2>
      <table border="1" style={{ margin: "0 auto", width: "80%" }}>
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{post.userId}</td>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
          </tr>
        </tbody>
      </table>

      <div style={{ marginTop: "20px" }}>
        <button onClick={prevPost} disabled={currentIndex === 0}>
          Previous
        </button>
        <span style={{ margin: "0 10px" }}>
          {currentIndex + 1} / {posts.length}
        </span>
        <button
          onClick={nextPost}
          disabled={currentIndex === posts.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostsTable;
