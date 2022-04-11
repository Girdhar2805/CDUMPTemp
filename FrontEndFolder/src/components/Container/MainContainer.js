import React from 'react'
import './MainContainer.css'
import CheckCases from '../tempComponents/CheckCases'

export default function MainContainer() {
  return (
    <>
     <main>
       <section>
         
         <div id='navigatemidButtons'>
           <div id='midbuttons'>
           <button>Check Cases</button>
           <button>Nearby Hospitals</button>
           <button>Covid Symstoms</button>
           <button>Covid Status</button>
           </div>

         </div>
         <div id='swapContents'>
         </div>
       </section>
     </main>
    </>
  )
}
