import React, { useState, useEffect } from 'react';

const ProductList = () => {
    const [tableData, setTabledata] = useState([]);

    const fetchData = () => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then((result) => setTabledata(result.users));
    }
    console.log("tableData",tableData)
    useEffect(() => {
        fetchData()
    }, [])
    const userTable = () => {
        return (
            <table>
                <tr>
                    <th>id</th>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>username</th>
                    <th>phone</th>
                    <th>email</th>
                    <th>birthDate</th>
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