import React, {useState, useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    useLocation,
    useHistory,
    Redirect
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


                    </ul>
                </nav>

                <Switch>

                    <Route path="/" exact>
                        <Home />
                    </Route>

                    <Route path="/posts" component={Posts} />

                    <Route>
                        <h1>PAGE NOT FOUND</h1>
                    </Route>




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
            <Switch>
                <Route path="/posts/:id" exact render={(...el) =>  <PostDetails />} />

                <Route>
                    <Redirect to="/posts" />
                </Route>

            </Switch>
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
    const history = useHistory();


    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await  response.json();

        setPost(data);
    }

    useEffect(() => {
        fetchData()
    }, [id])

    return ( <div>
            <h1>Post</h1>
            {post && (<>
                <h4>
                    {post.body}
                </h4> </>)}
            <button onClick={() => history.push(`/posts/${ +id -1 }`)}>Previous post</button>
            <button onClick={() => history.push(`/posts/${ +id +1 }`)}>Next post</button>

            </div>
    )
}

export default App;
