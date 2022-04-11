import React, { Component, useState } from 'react'
import CheckSymptoms from '../components/tempComponents/CheckSymptoms'
import CheckCases from '../components/tempComponents/CheckCases'
import CheckHospitals from '../components/tempComponents/CheckHospitals'
import CovidStatus from '../components/tempComponents/CovidStatus'

export default  function LandingPage() {

  const[activeComponent ,  setActiveOne] = useState("CaseState")

  return (
    <main>
    <section>
      <div id='navigatemidButtons'>
        <div id='midbuttons'>
        <button onClick={() => setActiveOne("CaseState")}>Check Cases</button>
        <button onClick={() => setActiveOne("HospitalState")}>Nearby Hospitals</button>
        <button onClick={() => setActiveOne("SymptomsState")}>Covid Symptoms</button>
        <button onClick={() => setActiveOne("StatusState")}>Covid Status</button>
        </div>
      </div>
      <div id='swapContents'>
          {activeComponent === "CaseState" && <CheckCases/> }
          {activeComponent === "HospitalState" && <CheckHospitals/> }
          {activeComponent === "SymptomsState" && <CheckSymptoms/> }
          {activeComponent === "StatusState" && <CovidStatus/> }
      </div>
    </section>
  </main>

  )
}
