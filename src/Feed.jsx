import {useEffect, useState} from "react";

export function Feed() {
    const [post, setPost] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
            .catch(error => console.error(error));
    }, []);

    function activateLasers (event) {
        event.preventDefault();
        setPosts([...posts, post]);
        setPost("");
    }
    function deactivateLasers (id) {
        const newPosts = [...posts];
        const index = newPosts.findIndex(post => post.id === id);
        newPosts.splice(index, 1);
        setPosts(newPosts);
    }
    return (
        <div>
            <p>Safe place to share creativity in all forms</p>
            <div className="input">
                <textarea name="Text1" cols="40" rows="5" value={post}
                          onChange={(event) => {
                              setPost(event.target.value);
                          }}></textarea>
                <button onClick={activateLasers}>Tell everything</button>
            </div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        {post.text}
                        <button className="delete-button" onClick={()=> deactivateLasers(post.id)}>
                         x </button>
                    </li>
                ))}
            </ul>
        </div>

    )
}
