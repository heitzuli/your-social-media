import {useState} from "react";

export function Feed() {
    const [post, setPost] = useState("");
    const [posts, setPosts] = useState([]);
    function activateLasers (event) {
        event.preventDefault();
        setPosts([...posts, post]);
        setPost("");
    }
    function deactivateLasers (index) {
        const newPosts = [...posts];
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
                {posts.map((post, index) => (
                    <li key={index}>
                        {post}
                        <button className="delete-button" onClick={()=> deactivateLasers(index)}>
                         x </button>
                    </li>
                ))}
            </ul>
        </div>

    )
}
