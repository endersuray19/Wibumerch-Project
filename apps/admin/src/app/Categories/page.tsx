
import React from 'react'
import { Categories, columns } from './collumn'
import DataTable from './data-table'

const getdata = async ():Promise<Categories[]> => {
  return(
[
  {
    "id": "1",
    "title": "Figure",
    "image":"https://cdn.kyou.id/items/248645-luminasta-figure-hatsune-miku-x-cinnamoroll-vocaloid-17cm.jpg.webp",
    "createdAt": "2024-08-20T10:00:00Z",
    "updatedAt": "2024-08-20T10:00:00Z",
  },
  {
    "id": "2",
    "title": "Nendoroid",
    "image":"https://cdn.kyou.id/items/248645-luminasta-figure-hatsune-miku-x-cinnamoroll-vocaloid-17cm.jpg.webp",
    "createdAt": "2024-08-21T11:00:00Z",
    "updatedAt": "2024-08-21T11:00:00Z"
  },
  {
    "id": "3",
    "title": "Fumo",
    "image":"https://cdn.kyou.id/items/248645-luminasta-figure-hatsune-miku-x-cinnamoroll-vocaloid-17cm.jpg.webp",
    "createdAt": "2024-08-22T12:00:00Z",
    "updatedAt": "2024-08-22T12:00:00Z"
  },
  {
    "id": "4",
    "title": "Robot Spirits",
    "image":"https://cdn.kyou.id/items/248645-luminasta-figure-hatsune-miku-x-cinnamoroll-vocaloid-17cm.jpg.webp",
    "createdAt": "2024-08-23T13:00:00Z",
    "updatedAt": "2024-08-23T13:00:00Z"
  },
  {
    "id": "5",
    "title": "NeoFumo",
    "image":"https://cdn.kyou.id/items/248645-luminasta-figure-hatsune-miku-x-cinnamoroll-vocaloid-17cm.jpg.webp",
    "createdAt": "2024-08-24T14:00:00Z",
    "updatedAt": "2024-08-24T14:00:00Z"
  }
]
  )
  
}
const CategoriesPage = async() => {
  const data = await getdata()
  return (
    <div>
      <div className="mb-8 py-2 bg-secondary rounded-md px-5 text-white">
        <h1 className='font-bold'>All Categories</h1>
        <DataTable columns={columns} data={data}/>
      </div>
    </div>
  )
}

export default CategoriesPage
