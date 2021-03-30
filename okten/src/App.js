import React, {useState, useEffect} from "react";
import './App.css';

const Tabs = ({ tabs, selectedTab }) => {
  return(
    <div style={{
      display: 'flex'
      }}>
      {
      tabs.map(tab => 
      <button style={{flex: 1, height: '50px',  background: selectedTab === tab.title ? 'yellow' : 'white'}}
      onClick={tab.clickHHandler}>{tab.title}
      </button>
      )
      }
    
    </div>
  )
}
const PostList = ({posts}) => {
  return (
    <>
    {posts.map(post=>(
      <>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </>
    ))}
    </>
  )
}



const urlSource = (resourse) => `https://jsonplaceholder.typicode.com/${resourse}`

function App() {

  const tabs =[
  {title: 'posts', clickHHandler: () => setSelectedTab('posts')},
  {title: 'comments', clickHHandler: () => setSelectedTab('comments')},
  {title: 'albums', clickHHandler: () => setSelectedTab('albums')},
  {title: 'photos', clickHHandler: () => setSelectedTab('photos')},
  {title: 'todos', clickHHandler: () => setSelectedTab('todos')},
  {title: 'users', clickHHandler: () => setSelectedTab('users')},
  ]
  const [selectedTab, setSelectedTab] = useState(tabs[0].title)
  const [list, setList] = useState([]);


  const fetchData = async () => {
    const response = await fetch(urlSource(selectedTab));
    const data = await response.json();
    setList(data);
  }
  useEffect(() => {
    fetchData();
  }, [selectedTab])

  return (
    <div className="App">
      <Tabs tabs={tabs} selectedTab={selectedTab}/>
      <PostList posts={list}/>
    </div>
  );
}

export default App;
