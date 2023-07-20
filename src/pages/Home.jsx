import React from 'react'
import './Home.css'

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div className='hero-section bg-danger d-flex justify-content-center align-items-center' >
        <div>
          <h1>HERO SECTION</h1>
        </div>
      </div >
      {/* END OF HERO SECTION  */}
      {/* CATEGORY AND CARDS */}
      <div className='category-container rounded-pill p-3 d-flex justify-content-around align-items-center shadow mt-3 ms-3'>
        <a href="" className='category-link text-decoration-underline'>Categorias</a>
        <a href="" className='category-link'>Electronica</a>
      </div>
      <div className='mt-3 hero-section bg-danger d-flex justify-content-center align-items-center' >
        <div>
          <h1>CARDS SECTION</h1>
        </div>
      </div >
      {/* END OF CATEGORY AND CARDS */}
      {/* Descuentos div romboide */}
      <div className='d-flex justify-content-center align-items-center w-100 mt-4'>
        <div className='descuentos-div-romboide p-3'>
          <div className='contenido-romboide'>
            <h1 className='text-center'>descuentos siuu</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home