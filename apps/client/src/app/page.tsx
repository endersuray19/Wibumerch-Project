import Image from "next/image"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList"

const Homepage = async({
    searchParams,
}:{
    searchParams:Promise <{ category: string }>
}) => {
   const category  = (await searchParams).category;
  return (
    <>
    
    <div className=''>
      <div className=" relative aspect-[3/1]  mb-4">
        <Image src="/featured.png" alt="Fetured Product" fill/>
        
      </div>
       <ProductList category={category} params="homepage"/>
    </div>
   
    </>
   

  )
}

export default Homepage