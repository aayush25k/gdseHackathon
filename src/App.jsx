import Navbar from "./component/Navbar"
import Header from "./component/Header"
import Searchbar from "./component/Searchbar"
import Jobcard from "./component/Jobcard"
import jobdata from "./jobdata"
import { useState } from "react";
import { useEffect } from "react";

import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from "./firebase.config.js";

function App() {
  const [jobs, setJobs] = useState([]);
  

  const fetchJobs = async() => {
    
    const tempJobs=[]
    const q = query(collection(db, "jobs"));
    const querySnapshot=await getDocs(q);
    querySnapshot.forEach((job)=>{
      // console.log(doc.id,"=>",doc.data());
      tempJobs.push({
        ...job.data(),
        id:job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
  }
  useEffect(() =>{
    fetchJobs()
  },[])

   

  

  return (
    <div>
      <Navbar />
      <Header />
      <Searchbar />
      {jobs.map((job)=> (
        <Jobcard key={job.id} {...job}/>
      ))}
      
    </div>
  )
}

export default App
