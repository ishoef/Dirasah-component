import React from 'react';

const FemaleStudent = ({FeStudent}) => {

    const {no, name, gender, id, email, enrollDate, paymentMethod, paymentStatus, phone, fees} = FeStudent;


    console.log(FeStudent);
    return (
        <tr>
            <td> {no} </td>
            <td> {name} </td>
            <td> {gender} </td>
            <td> {id} </td>
            <td> {email} </td>
            <td> {phone} </td>
            <td> {enrollDate} </td>
            <td> {fees} </td>
            <td> {paymentStatus} </td>
            <td> {paymentMethod} </td>
        </tr>
    );
};

export default FemaleStudent;