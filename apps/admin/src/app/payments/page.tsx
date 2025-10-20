
import React from 'react'
import { Payment, columns } from './collumn'
import DataTable from './data-table'

const getdata = async ():Promise<Payment[]> => {
  return(
[
  {
    "id": "728ed521",
    "amount": 134,
    "status": "pending",
    "fullname": "John Doe",
    userId:1,
    "email": "johndoe@gmail.com"
  },
  {
    "id": "728ed522",
    "amount": 124,
    "status": "success",
    "fullname": "Jane Doe",
    userId:2,
    "email": "janedoe@gmail.com"
  },
  {
    "id": "728ed523",
    "amount": 250,
    "status": "success",
    "fullname": "Peter Jones",
    userId:3,
    "email": "peterjones@example.com"
  },
  {
    "id": "728ed524",
    "amount": 78,
    "status": "failed",
    "fullname": "Mary Smith",
    userId:4,
    "email": "msmith@work.com"
  },
  {
    "id": "728ed525",
    "amount": 412,
    "status": "pending",
    "fullname": "Chris Green",
    userId:6,
    "email": "chris.green@mail.com"
  },
  {
    "id": "728ed521",
    "amount": 134,
    "status": "pending",
    "fullname": "John Doe",
    userId:7,
    "email": "johndoe@gmail.com"
  },
  {
    "id": "728ed522",
    "amount": 124,
    "status": "success",
    "fullname": "Jane Doe",
    userId:8,
    "email": "janedoe@gmail.com"
  },
  {
    "id": "728ed523",
    "amount": 250,
    "status": "success",
    "fullname": "Peter Jones",
    userId:9,
    "email": "peterjones@example.com"
  },
  {
    "id": "728ed524",
    "amount": 78,
    "status": "failed",
    "fullname": "Mary Smith",
    userId:10,
    "email": "msmith@work.com"
  },
  {
    "id": "728ed525",
    "amount": 412,
    "status": "pending",
    "fullname": "Chris Green",
    userId:11,
    "email": "chris.green@mail.com"
  },
  {
    "id": "728ed521",
    "amount": 134,
    "status": "pending",
    "fullname": "John Doe",
    userId:12,
    "email": "johndoe@gmail.com"
  },
  {
    "id": "728ed522",
    "amount": 124,
    "status": "success",
    "fullname": "Jane Doe",
    userId:13,
    "email": "janedoe@gmail.com"
  },
  {
    "id": "728ed523",
    "amount": 250,
    "status": "success",
    "fullname": "Peter Jones",
    userId:14,
    "email": "peterjones@example.com"
  },
  {
    "id": "728ed524",
    "amount": 78,
    "status": "failed",
    "fullname": "Mary Smith",
    userId:15,
    "email": "msmith@work.com"
  },
  {
    "id": "728ed525",
    "amount": 412,
    "status": "pending",
    "fullname": "Chris Green",
    userId:16,
    "email": "chris.green@mail.com"
  },
  {
    "id": "728ed521",
    "amount": 134,
    "status": "pending",
    "fullname": "John Doe",
    userId:17,
    "email": "johndoe@gmail.com"
  },
  {
    "id": "728ed522",
    "amount": 124,
    "status": "success",
    "fullname": "Jane Doe",
    userId:18,
    "email": "janedoe@gmail.com"
  },
  {
    "id": "728ed523",
    "amount": 250,
    "status": "success",
    "fullname": "Peter Jones",
    userId:19,
    "email": "peterjones@example.com"
  },
  {
    "id": "728ed524",
    "amount": 78,
    "status": "failed",
    "fullname": "Mary Smith",
    userId:20,
    "email": "msmith@work.com"
  },
  {
    "id": "728ed525",
    "amount": 4125,
    "status": "pending",
    "fullname": "Chris Green",
    userId:21,
    "email": "chris.green@mail.com"
  },
]
  )
  
}
const PaymentsPage = async() => {
  const data = await getdata()
  return (
    <div>
      <div className="mb-8 py-2 bg-secondary rounded-md px-5">
        <h1 className='font-bold'>All Payment</h1>
        <DataTable columns={columns} data={data}/>
      </div>
    </div>
  )
}

export default PaymentsPage
