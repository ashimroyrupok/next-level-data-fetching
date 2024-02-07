import React from 'react';

const PostPage = async() => {
    const res = await fetch('http://localhost:5000/post',{
        cache:"force-cache"
    })
    const posts = await res.json();
    console.log(posts);
    return (
        <div>
            <h3 className='text-5xl font-bold text-center'>Fetched all Data</h3>




        </div>
    );
};

export default PostPage;