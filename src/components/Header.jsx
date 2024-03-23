import {Link} from "react-router-dom";

export default function Header(){
    return(
        <>
            <ul style={{listStyle: "none", display: "flex", gap: '80px'}}>
                <li><Link to='/'>main</Link></li>
                <li><Link to='/posts'>posts</Link></li>
                <li><Link to='/createPost'>create post</Link></li>
            </ul>

            <hr/>
        </>
    )
}