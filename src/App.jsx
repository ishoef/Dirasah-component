
import axios from 'axios'
import './App.css'
import StudentInfo from './Component/Student-Information/StudentInfo'
import { Suspense } from 'react';


const studentInfo = axios.get('StudentInfo.json');

function App() {
  
  return (
    <div>
      <h1 className='text-center text-5xl mt-10 mb-10 font-bold bg-[#153151] text-white py-10'>Student Information</h1>
      <Suspense fallback={<div className='ml-[50%] mt-[20%]'>
        <span className="loading loading-bars loading-xl"></span>
        <span className="loading loading-bars loading-xl"></span>
        <span className="loading loading-bars loading-xl"></span>
      </div>}>
        <StudentInfo studentInfo={studentInfo}></StudentInfo>
      </Suspense>
    </div>
  )
}

export default App
