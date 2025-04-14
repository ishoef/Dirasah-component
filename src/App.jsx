
import axios from 'axios'
import './App.css'
import StudentInfo from './Component/Student-Information/StudentInfo'
import { Suspense } from 'react';
import MaleStu from './Component/Student-Information/maleStudent/MaleStu';
import FemaleStu from './Component/Student-Information/femaleStudent/FemaleStu';



const studentInfo = axios.get('StudentInfo.json');

function App() {
  
  return (
    <div>
      <h1 className='text-center text-5xl mt-10 mb-10 font-bold bg-[#153151] text-white py-10'>Student Information</h1>

      <Suspense fallback={
        <div className='ml-[50%] mt-[20%]'>
          <span className="loading loading-bars loading-xl"></span>
          <span className="loading loading-bars loading-xl"></span>
          <span className="loading loading-bars loading-xl"></span>
        </div>
      }>
        <StudentInfo studentInfo={studentInfo}></StudentInfo>
      </Suspense>


      <h1 className='text-center text-5xl mt-10 mb-10 font-bold bg-[#153151] text-white py-10'>Male Student</h1>
      <Suspense fallback={
        <div className='ml-[50%] mt-[20%]'>
          <span className="loading loading-bars loading-xl"></span>
          <span className="loading loading-bars loading-xl"></span>
          <span className="loading loading-bars loading-xl"></span>
        </div>
      }>
        <MaleStu studentInfo={studentInfo}></MaleStu>
      </Suspense>


      <h1 className='text-center text-5xl mt-10 mb-10 font-bold bg-[#153151] text-amber-300 py-10'>Female Student</h1>
      <Suspense fallback={
        <div className='ml-[50%] mt-[20%]'>
          <span className="loading loading-bars loading-xl"></span>
          <span className="loading loading-bars loading-xl"></span>
          <span className="loading loading-bars loading-xl"></span>
        </div>
      }>
          <FemaleStu studentInfo={studentInfo}></FemaleStu>
      </Suspense>
      
    </div>
  )
}

export default App
