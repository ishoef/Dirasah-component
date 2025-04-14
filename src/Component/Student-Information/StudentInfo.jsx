import React, { use } from 'react';
import Student from './Student';

const StudentInfo = ({studentInfo}) => {

    const studentsData = use(studentInfo);

    const StudentsInfo = studentsData.data;

    return (
        <div className='px-10 pb-10'>
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
                            StudentsInfo.map(student => <Student key={student.no} student={student}></Student>)
                       }
                                                
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentInfo;