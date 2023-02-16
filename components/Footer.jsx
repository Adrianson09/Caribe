import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black/95 text-white  '>
        <section className='max-w-[80%] m-auto grid md:grid-cols-2 sm:grid-cols-1 gap-10 p-10  '>
            <div className='max-w-[650px] '>
                <h3 className='font-bold'>Costa Rica</h3>
                <a>Tel: +(506) 2208-8890</a>
                <p className='max-w-[450px]'>205 Avenida Escazú, Piso 5, Suite 5,
                    10203 San José, Escazú,
                    San José, Costa Rica</p>
            </div>
            <div className='max-w-[650px] '>
                <h3 className='font-bold'>México</h3>
                <a>Tel: +52 (55)46313338</a>
                <p className='max-w-[450px]'>Av. Del Imán 151, Int A110, Piso 1,
                    Suite B-38, Col. Pedregal De Carrasco.
                    México CDMX 04700.</p>

            </div>
        </section>
       
        <div className='bg-black/30'> 
     <p className='text-center'>Derechos reservados Caribe Hospitality.</p>
     </div>
    </footer>
     
  )
}

export default Footer