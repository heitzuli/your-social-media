import {useState} from "react";

export function Feed() {
    const [post, setPost] = useState("");
    const [posts, setPosts] = useState([]);
    function activateLasers () {
        setPosts([...posts, post]);
        setPost("");
    }
    return (
        <div>
            <p>Safe place to share creativity in all forms</p>
            <label className="text-on-top">Share: </label>
            <textarea name="Text1" cols="40" rows="5" value={post}
                      onChange={(event) => {
                          setPost(event.target.value);
                      }}></textarea>
            <button onClick={activateLasers}>Tell people!</button>
            <div>
                {posts.map((post) => (
                    <div>
                        {post}
                    </div>
                ))}
            </div>
        </div>

    )
}
