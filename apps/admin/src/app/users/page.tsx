
import React from 'react'
import { Users, columns } from './collumn'
import DataTable from './data-table'

const getdata = async ():Promise<Users[]> => {
  return(
[
  {
    "id": "1",
    "fullname": "John Doe",
    "email": "johndoe@gmail.com",
    "phone": 81234567890,
    "address": "Jl. Merdeka No. 1",
    "city": "Jakarta"
  },
  {
    "id": "2",
    "fullname": "Jane Doe",
    "email": "janedoe@gmail.com",
    "phone": 81234567891,
    "address": "Jl. Kemerdekaan No. 2",
    "city": "Surabaya"
  },
  {
    "id": "3",
    "fullname": "Peter Jones",
    "email": "peterjones@example.com",
    "phone": 81234567892,
    "address": "Jl. Pahlawan No. 3",
    "city": "Bandung"
  },
  {
    "id": "4",
    "fullname": "Mary Smith",
    "email": "msmith@work.com",
    "phone": 81234567893,
    "address": "Jl. Raya No. 4",
    "city": "Yogyakarta"
  },
  {
    "id": "6",
    "fullname": "Chris Green",
    "email": "chris.green@mail.com",
    "phone": 81234567894,
    "address": "Jl. Maju No. 5",
    "city": "Semarang"
  },
  {
    "id": "7",
    "fullname": "John Doe",
    "email": "johndoe@gmail.com",
    "phone": 81234567895,
    "address": "Jl. Merdeka No. 6",
    "city": "Jakarta"
  },
  {
    "id": "8",
    "fullname": "Jane Doe",
    "email": "janedoe@gmail.com",
    "phone": 81234567896,
    "address": "Jl. Kemerdekaan No. 7",
    "city": "Surabaya"
  },
  {
    "id": "9",
    "fullname": "Peter Jones",
    "email": "peterjones@example.com",
    "phone": 81234567897,
    "address": "Jl. Pahlawan No. 8",
    "city": "Bandung"
  },
  {
    "id": "10",
    "fullname": "Mary Smith",
    "email": "msmith@work.com",
    "phone": 81234567898,
    "address": "Jl. Raya No. 9",
    "city": "Yogyakarta"
  },
  {
    "id": "11",
    "fullname": "Chris Green",
    "email": "chris.green@mail.com",
    "phone": 81234567899,
    "address": "Jl. Maju No. 10",
    "city": "Semarang"
  }
]
  )
  
}
const UserssPage = async() => {
  const data = await getdata()
  return (
    <div>
      <div className="mb-8 py-2 bg-secondary rounded-md px-5">
        <h1 className='font-bold'>All Users</h1>
        <DataTable columns={columns} data={data}/>
      </div>
    </div>
  )
}

export default UserssPage
