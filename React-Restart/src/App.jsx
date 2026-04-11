// import { useState } from "react";
import { useState } from "react";
import PostComponent from "./Post";

function App() {

  const[posts, setPosts] = useState([]); 




  const postComponent = posts.map(post => <PostComponent 
    name = {post.name}
    subtitle = {post.subtitle}
    time = {post.time}
    image={post.image}
    description={post.description}
    />)

  function addPost(){
    setPosts([...posts,{
    name:"raju",
    subtitle:"10000 followers",
    time : " 30m ago",
    image : "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
    description:"What to know how to win big? Check out how these folks won 5000 in bounties"
  }])
   


  } 

  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <button onClick={addPost}>Add Post</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
            {postComponent}
        </div>
      </div>
    </div>
  );
}

export default App;
