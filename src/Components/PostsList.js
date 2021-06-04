import React from 'react'
import {Spinner} from "react-bootstrap";
import PostCard from "./PostCard"

const PostsList = ({posts, loading}) => {
    return (
        <div className="posts">
            {loading ? <Spinner animation="border" /> : (
                posts.map((el, key) => <PostCard key={el.id} post={el}/>)
            )}
        </div>
    )
}

export default PostsList
