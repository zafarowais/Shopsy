import React from 'react'
import { Link } from 'react-router-dom'

const companyLogo = [
    {id: 1, img: "/Image/company/brand-1.png"},
    {id: 2, img: "/Image/company/brand-2.png"},
    {id: 3, img: "/Image/company/brand-3.png"},
    {id: 4, img: "/Image/company/brand-4.png"},
    {id: 5, img: "/Image/company/brand-5.png"},
]
const Category = () => {
  return (

    <div className='max-w-screen-2xl mx-auto container xl:px:28 px-4 py-28'>
      {/* bramch logo */}

      <div className='flex items-center justify-around flex-wrap gap-4 py-5'>
        {
            companyLogo.map(({id, img}) => (
                <div key={id}><img src={img} alt="" /></div>
            ))
        }
      </div>
      {/* Category page */}

      <div className='mt-8 flex flex-col md:flex-row items-center gap-4'>
        <p className='font-semibold uppercase md:-rotate-90 text-center bg-Black text-white md:p-1.5 p-2 rounded-sm inline-flex'>Explore new and popular styles</p>
        <div>
            <Link to="/"><img src="/Image/category/image1.png" alt="" className='w-full hover:scale-105 transition-all duration-200'/></Link>
        </div>
        <div className='md:w-1/2'>
            <div className='grid grid-cols-2 gap-2'>
            <Link to="/"><img src="/Image/category/image2.png" alt="" className='w-full hover:scale-105 transition-all duration-200'/></Link>
            <Link to="/"><img src="/Image/category/image3.png" alt="" className='w-full hover:scale-105 transition-all duration-200' /></Link>
            <Link to="/"><img src="/Image/category/image4.png" alt="" className='w-full hover:scale-105 transition-all duration-200' /></Link>
            <Link to="/"><img src="/Image/category/image5.png" alt="" className='w-full hover:scale-105 transition-all duration-200' /></Link>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Category
