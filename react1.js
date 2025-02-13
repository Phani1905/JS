import React,{createContext,useContext} from 'react'
//create  the conetxt to hold the data
const DataContext=createContext();

function App(){
  const data=" I am parent Component"
  return(
//provide the data to entire application
    <DataContext.Provider value={data}>
      <User1/>
    </DataContext.Provider>
  )
};
//user1 component
function User1(){
  return <User2 />
}
//user2 component
function User2(){
  return <User3 />
}
//user3 component
function User3(){
  return <User4 />
}
//user4 component
function User4(){
 const data=useContext(DataContext)
 return <div>{data}</div>
}
export default App;
