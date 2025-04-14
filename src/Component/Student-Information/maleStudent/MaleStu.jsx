import React, { use } from 'react';
import MaleStudent from './MaleStudent';

const MaleStu = ({studentInfo}) => {

    console.log(studentInfo);

    const totalStudnet = use(studentInfo);
    const studentsData = totalStudnet.data;

    const maleStudents = studentsData.filter(maleStudent => maleStudent.gender === 'male');
    console.log(maleStudents);

    return (
        <div className='px-3 md:px-10 pb-10'>
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
                            maleStudents.map(maleStudent => <MaleStudent key={maleStudent.id} maleStudent={maleStudent}></MaleStudent>)
                        }
                                                
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MaleStu;