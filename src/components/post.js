import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

/*class Post extends Component {
    state = {
        id: null
    }

    componentDidMount(){
        const path= this.props.path;
        console.log(path);
        //let id = this.props.match.params.post_id;
    }
    
    render() {
        return (
            <div className='container'>
                <h4>route param</h4>
            </div>
        );
    }
}*/

const Post = () => {
    const [post, setPost] = useState(null);
    let { post_id } = useParams();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + post_id)
            .then(res => {
                setPost(res.data);
                console.log(res);
        })
    }, []);
    
    const post1 = post ? (
        <div className='post'>
            <h4 className='center'>{post.title}</h4>
            <p>{post.body}</p>
        </div>
    ) : (
        <div className='center'>Loading post...</div>
    );

    return (
        <div className='container'>
            <h4>{post1}</h4>
        </div>
    );
}

export default Post;