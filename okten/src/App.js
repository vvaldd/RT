import React, {useState, useEffect} from "react";
import './App.css';


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
