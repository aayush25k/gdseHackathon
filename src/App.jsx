import Navbar from "./component/Navbar"
import Header from "./component/Header"
import Searchbar from "./component/Searchbar"
import Jobcard from "./component/Jobcard"
import jobdata from "./jobdata"

function App() {
  

  return (
    <div>
      <Navbar />
      <Header />
      <Searchbar />
      {jobdata.map((job)=> (
        <Jobcard key={job.id} {...job}/>
      ))}
      
    </div>
  )
}

export default App
