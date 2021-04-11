import { useEffect, useState } from "react"
import {postsData} from "../data/postsData";
import PostFormat from "./postFormat";

export default function Posts() {
    const [postsState, setPosts] = useState(undefined);
    useEffect(() => setPosts(postsData), []); /*postState= postData*/

    return (
        
        <div className="posts-content">
            <h3>{postsState ? "My Blog Posts": "Loading posts..."}</h3>
            {/* if(){} else{} */}
            {postsState !== undefined && postsState.map((element_post) => <PostFormat post={element_post}/>)} 
            {/* if (){} */}
        </div>
    );
}

/*
let arr = [1,2,3,4]

let newArray = arr.map((num) => num +1)
1: num=1
2: num=2 so on
*/