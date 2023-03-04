import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'semantic-ui-react';


export function Read() {
    const [incomingData, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://63c79a5f5c0760f69aba42b4.mockapi.io/crud-app`)
            .then((response) => {
                console.log(response);
                setData(response.data);
            })
    }, [])

    const updateData = (data) => {
        // console.log(first)

        //coming from data and we ll store it into localstorage
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox);
    }

    const onDelete = (id) => {
        console.log(id);
        axios.delete(`https://63c79a5f5c0760f69aba42b4.mockapi.io/crud-app/${id}`);
        getData();
    }
    const getData = () => {

        axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
            .then((response) => {
                 setData(response.data);
             })
    }

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>

                    {incomingData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.FirstName}</Table.Cell>
                                <Table.Cell>{data.LastName}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                <Link to="/update">
                                    <Table.Cell>
                                        <Button onClick={() => updateData(data)}>Update</Button>
                                    </Table.Cell>

                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}
