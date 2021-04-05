import React, {useState, useEffect} from "react";
import './App.css';

const Tabs = ({ tabs, selectedTab }) => {
  return(
    <div style={{
      display: 'flex'
      }}>
      {
      tabs.map(tab => 
      <button
      key={tab.title}
      style={{flex: 1, height: '50px',  background: selectedTab === tab.title ? 'yellow' : 'white'}}
      onClick={tab.clickHandler}>{tab.title}
      </button>
      )
      }
    
    </div>
  )
}

const PostList = ({list}) => {
  return (
    <>
    {list.map(post=>(
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    ))}
    </>
  )
}

const CommentList = ({list}) => {
  return (
    <>
    {list.map(comment=> (
      <div key={comment.id}>
        <h2>{comment.name}</h2>
        <p>{comment.body}</p>
      </div>
    ))}
    </>
  )
}

const AlbumList = ({list}) => {
  return (
    <>
    {list.map(album => (
      <div key={album.id}>
        <h2>{album.title}</h2>
      </div>
    ))}
    </>
  )
}   

const PhotoList = ({list}) => {
  return (
    <>
    {list.map(photo => (
      <div key={photo.id}>
      <h2>{photo.title} - {photo.url}</h2>
      </div>
    ))}
    </>
  )
}

const TodoList = ({list}) => {
  return (
    <>
    {list.map(todo =>(
      <div key={todo.id}>
      <h3>{todo.title} --- {todo.completed.toString()}</h3>
      </div>
    ))}
    </>
  )
}

const UserList = ({list}) => {
  return (
    <>
    {list.map(user => (
      <div key={user.id}>
      <h2>{user.name} - {user.email}</h2>
      </div>
    ))}
    </>
  )
}


const urlSource = (resourse) => `https://jsonplaceholder.typicode.com/${resourse}`

const POSTS = 'posts';
const COMMENTS = 'comments';
const ALBUMS = 'albums';
const PHOTOS = 'photos';
const TODOS = 'todos';
const USERS = 'users';

const Components = {
  [POSTS] : PostList,
  [COMMENTS] : CommentList,
  [ALBUMS] : AlbumList,
  [PHOTOS] : PhotoList,
  [TODOS] : TodoList,
  [USERS] : UserList,
}

function App() {
  
  const tabs =[
  {title: POSTS, clickHandler: () => setSelectedTab(POSTS)},
  {title: COMMENTS, clickHandler: () => setSelectedTab(COMMENTS)},
  {title: ALBUMS, clickHandler: () => setSelectedTab(ALBUMS)},
  {title: PHOTOS, clickHandler: () => setSelectedTab(PHOTOS)},
  {title: TODOS, clickHandler: () => setSelectedTab(TODOS)},
  {title: USERS, clickHandler: () => setSelectedTab(USERS)},
  ]

  const [selectedTab, setSelectedTab] = useState(tabs[0].title)
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState({
  [POSTS] : [],
  [COMMENTS] : [],
  [ALBUMS] : [],
  [PHOTOS] : [],
  [TODOS] : [],
  [USERS] : [],
  })
 
  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(urlSource(selectedTab));
    const json = await response.json();
    setLoading(false);
    setData({...data, [selectedTab]:json})
  }

  useEffect(() => {

    fetchData();
  }, [selectedTab])

  const ComponentToRender = Components[selectedTab];
  return (
    <div className="App">
      <Tabs tabs={tabs} selectedTab={selectedTab}/>
      {isLoading && !data[selectedTab].length ? <h1> LOADING.... </h1> : (
      
      <ComponentToRender list={data[selectedTab]}/>
      
      )}
      
    </div>
  );
}

export default App;
