import React, { use } from 'react';
import FemaleStudent from './FemaleStudent';

const FemaleStu = ({studentInfo}) => {
    
    const totalStudnet = use(studentInfo);
    const studentsData = totalStudnet.data;

    const femaleStudents = studentsData.filter(maleStudent => maleStudent.gender === 'female');
    console.log(femaleStudents);

    return (
        <div className='px-3 md:px-10 pb-10 bg-[url(https://i.ibb.co/sv4T4DBn/Ad-Dirasah-Online-Academy-Logo.jpg)] bg-cover bg-no-repeat'>
            <div className="overflow-x-auto outline outline-gray-300 rounded-2xl">
                <table className="table">
                    {/* head */}
                    <thead className='bg-[#153151] text-white text-[16px]'>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Student ID</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Enroll</th>
                            <th>Fees</th>
                            <th>Status</th>
                            <th>Payment Method</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            femaleStudents.map(FeStudent => <FemaleStudent key={FeStudent.id} FeStudent={FeStudent}></FemaleStudent>)
                        }
                                                
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FemaleStu;