import {useState} from "react";

export function Feed() {
    const [post, setPost] = useState("");
    function activateLasers () {
        alert(post);
    }
    return (
        <div>
            <p>Safe place to share creativity in all forms</p>
            <form className="button-pads">
                <label className="text-on-top">Share: </label>
                <textarea name="Text1" cols="40" rows="5" value={post}
                          onChange={(event) => {
                              setPost(event.target.value);
                          }}></textarea>
                <button onClick={activateLasers}>Tell people!</button>
            </form>
        </div>

    )
}
