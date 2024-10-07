/* eslint-disable no-unused-vars */
import React from 'react'
import FullStackDevelopment from './FullStackDevelopment'
import DataScience from './DataScience'
import Cybersecurity from './Cybersecurity'
import Career from './Career'
import { useNavigate } from 'react-router-dom'

function All() {

  let navigate = useNavigate()

  navigate('/all')

  return <>
      
      <DataScience/>
      <FullStackDevelopment/>
      <Cybersecurity/>
      <Career/>

  </>
}

export default All