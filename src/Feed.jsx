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
            <label className="text-on-top">Share: </label>
            <textarea name="Text1" cols="40" rows="5" value={post}
                      onChange={(event) => {
                          setPost(event.target.value);
                      }}></textarea>
            <button onClick={activateLasers}>Tell me everything</button>
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>
                        {post}
                        <button className="delete-button" onClick={()=> deactivateLasers(index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </li>
                ))}
            </ul>
        </div>

    )
}
