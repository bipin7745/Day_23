import MyCard from './card2';
import { useState, useEffect } from "react";

function FetchDataAPI1() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPosts(data);
    }
    fetchData();
  }, []);

  return (  
    <div className="container py-4">
      <h1 className="mb-4 text-center">API Data Cards</h1>
      <div className="row">
        {posts.map((post) => (
          <div className="col-md-4 mb-4" key={post.id}>
            <MyCard
              id={post.id}
              title={post.title}
              body={post.body}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FetchDataAPI1;
