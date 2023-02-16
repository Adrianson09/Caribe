import Image from 'next/legacy/image'
import React from 'react'
import { Collapse, Text } from "@nextui-org/react";

const Mision = () => {
  return (
    <div className='m-10'>
        <div className=' p-5 '>
        <h1 className='text-center font-bold uppercase text-2xl p-4 '>About Us</h1>
        </div>

        <div className='max-w-[80%] m-auto grid grid-cols-2 gap-10' >
          <div className='p-4'>

          <Collapse.Group>
      <Collapse title="Mission" bordered expanded>
        <Text>
        Develop and manage hotel investments of superior standards in a sustainable,
         profitable manner and with a high-level team.
        </Text>
      </Collapse>
      <Collapse title="Vision" bordered>
        <Text>
        To be the leading developer at the regional level of the best and most prestigious
         brands of hotel chains.
        </Text>
      </Collapse>
      <Collapse title="Values" bordered>
        <Text>
        •We do more and better with less
        <br/>
        •Committed to growth
        <br/>
        •Teamwork
        <br/>
        •Responsibility
        </Text>
      </Collapse>
    </Collapse.Group>
          </div>
          <div>
            <h3 className='text-center font-bold p-4'>Sustainability Policy</h3>
            <p className='text-justify'>
            Caribe Hospitality is committed to developing hotel assets that operate profitably in accordance with applicable legal, financial, environmental, energy and other requirements. We are committed to the continuous improvement of our business processes, to environmental and energy performance, and to our Sustainability and Energy Management Systems. Caribe Hospitality is specifically committed to:
            <p className='text-justify'>-Environmental protection and pollution prevention.</p>
            <p className='text-justify'>-Establish environmental and energy objectives and goals for the SGS and SGE, as well as their respective review for the improvement of environmental and energy performance.</p>
            <p className='text-justify'>-Ensure the availability of updated information and the necessary resources to meet the objectives and goals.</p>
            <p className='text-justify'>-Support the activities of design and acquisition of energy efficient products, processes, facilities, equipment and services, which consider and impact environmental and energy performance.</p>
            </p>
          </div>
        
        </div>
       

        
    
    </div>
  )
}

export default Mision