import axios from 'axios'
import React, {useEffect, useState} from 'react';
import SingleUser from "../Components/SingleUser";
import PostsList from "../Components/PostsList"


const UserDetails = (props) => {
    const {id} = props.match.params
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const getUser = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {setUser(res.data)
                        setLoading(false)})
        .catch(err => console.log(err))
    }
    const getPosts = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(res => {setPosts(res.data);
                        setLoading(false)})
        .catch(err => console.log(err))
    }
    useEffect(() => {
        getUser();
        getPosts();
    }, [])
    return (
        <div>
            <SingleUser user={user} loading={loading}/>
            <PostsList posts={posts} loading={loading}/>
        </div>
    )
}

export default UserDetails
