import React, { useState, useEffect } from 'react';

const ProductList = () => {
    const [tableData, setTabledata] = useState([]);

    const fetchData = () => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then((result) => setTabledata(result.users));
    }
    
    useEffect(() => {
        fetchData()
    }, [])
    
    const userTable = () => {
        return (
            <table>
                <tr>
                    <th>id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>User Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Birth Date</th>
                </tr>
                <tbody>
                {
                    tableData.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.username}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{item.birthDate}</td>
                            </tr>
                        )
                    })
                }
                </tbody>

            </table>
        )
    }


    return (
        <div>
            {userTable()}
        </div>
    );
};

export default ProductList;