import './Contracts.css'
import ContractCard from '../../components/ContractCard/ContractCard'
import {useQuery} from '@apollo/client'
import React from 'react'

import {QUERY_CONTRACTS} from '../../utils/queries'

export default function Contracts() {

  const {loading, data} = useQuery(QUERY_CONTRACTS)

  const contracts = data?.contracts || []
  

  return (
    <div>
      <div className='contacts-banner'></div>
      <div className="form-container">
        <div className="contracts-title">Contracts</div>
        
      </div>
    </div>
  )
}
