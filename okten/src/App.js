import React, {useState, useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    useLocation
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/posts">Posts</Link>
                        </li>

                        {/*<li>*/}
                        {/*    <Link to="/posts/:id">Post</Link>*/}
                        {/*</li>*/}

                    </ul>
                </nav>

                <Switch>

                    <Route path="/" exact>
                        <Home />
                    </Route>

                    <Route path="/posts" component={Posts} exact />

                    <Route path="/posts/:id" component={PostDetails} />



                </Switch>
            </div>
        </Router>
    );
}

function Home () {

    return <h2>Home</h2>;
}

function Posts () {
    const[posts, setPosts] = useState([]);

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await  response.json();

        setPosts(data);
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <ul>
                {posts.map(el => <Link to={`/posts/${el.id}`}><li key={el.id}>{el.title} - {el.id}</li></Link>)}
            </ul>
        </div>
    )
}

function PostDetails () {
    const [post, setPost] = useState([]);

    const match = useRouteMatch();
    const { id } = useParams();
    const location = useLocation();


    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await  response.json();

        setPost(data);
    }

    useEffect(() => {
        fetchData()
    }, [])

    return ( <div>
            <h1>Post</h1>
            {post && (<>
                <h4>
                    {post.body}
                </h4> </>)}
            </div>
    )
}

export default App;
