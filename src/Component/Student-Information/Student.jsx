import React from 'react';

const Student = ({student}) => {


    const {no, name, gender, id, email, enrollDate, paymentMethod, paymentStatus, phone, fees} = student;
    
   
    
    
    return (
        <tr>
            <td className='bg-gray-200'>{no}</td>
            <td className='text-[16px]'>{name}</td>
            <td>{gender}</td>
            <td>{id}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{enrollDate}</td>
            <td>{fees}</td>
            <td>{paymentStatus}</td>
            <td>{paymentMethod}</td>
        </tr>
    );
};

export default Student;