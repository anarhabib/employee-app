import React from 'react'
import { useState , useEffect } from 'react'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import './Employee.scss'
import EmployeeList from './EmployeeList'





function Employee() {

    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const [salary , setSalary] = useState('');
    const [id , setId] = useState(Math.floor(Math.random() * 1000))
    const [employee , setEmployee] = useState([])


    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('employees'))
        if(storedData){
            setEmployee(storedData)
        }
    },[])




    const handleSubmit = (e) => {
        e.preventDefault();
        setId(Math.floor(Math.random() * 1000 ))


        const employeeData = {id ,firstName , lastName , salary}
            employee.push(
              employeeData
            )   
            // console.log(employee); 
            localStorage.setItem('employees' , JSON.stringify(employee))
    }

    const localData = JSON.parse(localStorage.getItem('employees'))

    return (
    <>
             <h1>React Employee App</h1>
       <form>
        <div className='employee-input'>
            <TextField onChange={(e) => setFirstName(e.target.value)}
            required
            id="outlined-required"
            label="First Name"
            defaultValue=""
            />
            <TextField onChange={(e) => setLastName(e.target.value)}
            required
            id="outlined-required"
            label="Last Name"
            defaultValue=""
            />
            <TextField onChange={(e) => setSalary(e.target.value)}
            required
            id="outlined-required"
            label="Salary"
            type='number'
            defaultValue=""
            />
            <Button onClick={handleSubmit} variant="outlined">Add employee</Button>
        </div>
    </form>
    <div className='employee-data'>
        <EmployeeList data={ localData } />

    </div>
    </>
 
  )
}

export default Employee