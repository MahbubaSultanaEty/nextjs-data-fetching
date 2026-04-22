import React from 'react';

// const getPosts = async() => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const posts= res.json();
//     return posts
// }

// const getPosts = async () => {
//     try {
//          const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const posts= res.json();
//     return posts
//     }
//     catch (err) {
//         throw new Error('failed to fetch posts')
//     }

const getPosts = async () => {
    
         const res = await fetch("https://jsonplaceholder.typicode.com/posts", {cache : "force-cache"});
    const posts = res.json();
    
    if (!res.ok) {
        throw new Error("failed to; load data")
    }
    return posts
    
   
}

const PostsPage = async() => {
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const data = await res.json();

    const data = await getPosts()
    return (
        <div>
            <h2 className="font-bold text-3xl text-center">Posts are coming soon { data.length}</h2>
        </div>
    );
};

export default PostsPage;