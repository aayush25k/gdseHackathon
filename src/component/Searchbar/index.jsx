import React from 'react';
import ReactDOM from 'react-dom/client';


function Searchbar(){
    return(
    <>
        <div className='flex gap-4 my-10 justify-center px-10'>
            <select className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
                <option value="" disabled hidden selected>Job Role</option>
                <option value="iOS Developer">iOS Developer</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Android Developer">Android Developer</option>
                <option value="Developer Advocate">Developer Advocate</option>
                <option value="Data Scientist">Data Scientist</option>
            </select>

            <select className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
                <option value="" disabled hidden selected>Job Type</option>
                <option value="iOS Developer">Full Time</option>
                <option value="Frontend Developer">Part Time</option>
                <option value="Backend Developer">Contract</option>
                
            </select>

            <select className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
                <option value="" disabled hidden selected>Location</option>
                <option value="iOS Developer">Remote</option>
                <option value="Frontend Developer">In-Office</option>
                <option value="Backend Developer">Hybrid</option>
                
            </select>

            <select className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>Experience</option>
            <option value="Fresher">Fresher</option>
            <option value="Junior Level">Junior Level</option>
            <option value="Mid Level">Mid Level</option>
            <option value="Senior Level">Senior Level</option>
            </select>
            <button className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'>Search</button>

            
            
        </div>
        
    
        

    </>
    )
}

export default Searchbar