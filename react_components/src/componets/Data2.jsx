import { useState, useEffect } from "react";
import MyCard from './card2';
import React, { Suspense } from "react";

function FetchDataAPI1() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    async function fetchData() {
        await new Promise((resolve) => setTimeout(resolve, 500));
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); 
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">API Data Cards</h1>
      
      {loading ? (
        <div className="text-center ">
          <div className="spinner-border text-primary" style={{ width: "100px", height: "100px", marginTop:"200px"}} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p>Loading posts...</p>
        </div>
      ) : (
        <div className="row">
            <Suspense fallback={<div className="">Loading...</div>}>
          {posts.map((post) => (
            <div className="col-md-4 mb-4" key={post.id}>
              <MyCard
                id={post.id}
                title={post.title}
                body={post.body}
              />
            </div>
          )) }
          </Suspense>
        </div>
        
      )}
    </div>
  );
}

export default FetchDataAPI1;
