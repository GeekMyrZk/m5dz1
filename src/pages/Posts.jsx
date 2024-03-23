import {useEffect, useState} from "react";

export default function Posts(){

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data.posts))
    }, [])

    return(
        <>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: '10px'}}>
                {posts.map((e, key) => (
                    <div style={{display: "flex", maxWidth: '400px', border: "solid 1px green", backgroundColor: "cyan", flexDirection: "column", textAlign: "center"}}>
                        <h3>{e.title}</h3>
                        <p>{e.body}</p>
                    </div>
                ))}
            </div>
        </>
    )
}