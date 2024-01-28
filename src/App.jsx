import Navbar from "./component/Navbar"
import Header from "./component/Header"
import Searchbar from "./component/Searchbar"
import Jobcard from "./component/Jobcard"
// import jobdata from "./jobdata"
import { useState } from "react";
import { useEffect } from "react";

import { collection, query,orderBy, where, getDocs } from "firebase/firestore";
import {db} from "./firebase.config.js";

function App() {
  const [jobs, setJobs] = useState([]);
  

  const fetchJobs = async() => {
    
    const tempJobs=[]
    const jobsRef = query(collection(db, "jobs"));
    const q=query(jobsRef,orderBy("postedOn","desc"));
    const req=await getDocs(q);
    req.forEach((job)=>{
      // console.log(doc.id,"=>",doc.data());
      tempJobs.push({
        ...job.data(),
        id:job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
  }

  const fetchJobCustom = async(jobCriteria) => {
    
    const tempJobs=[]
    const jobsRef = query(collection(db, "jobs"));
    const q=query(jobsRef,where("type","==",jobCriteria.type),where("title","==",jobCriteria.title),where("location","==",jobCriteria.location),where("experience","==",jobCriteria.experience),orderBy("postedOn","desc"));
    const req=await getDocs(q);
    req.forEach((job)=>{
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
      <Searchbar fetchJobCustom={fetchJobCustom} />
      {jobs.map((job)=> (
        <Jobcard key={job.id} {...job}/>
      ))}
      
    </div>
  )
}

export default App
