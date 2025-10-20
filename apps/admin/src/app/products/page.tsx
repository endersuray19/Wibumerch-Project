
import React from 'react'
import { columns } from './collumn'
import DataTable from './data-table'
import { listproducts } from '@/lib/listproduct'


const PaymentsPage = async() => {
  const data = listproducts;
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
