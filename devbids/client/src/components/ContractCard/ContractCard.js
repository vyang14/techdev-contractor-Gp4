import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'
import ResponseToContract from '../ResponseToContract/ResponseToContract'
import './ContractCard.css'

export default function ContractCard() {
  const [contractBid, setContractBid] = useState('inactive')

  return (
    <Card style={{ width: '50rem' }}>
      <Card.Body>
        <Card.Title style={{ color: '#5b57db', fontSize: '27px' }}>
          Job Title:
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '20px' }}>
          Skills Required:
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '20px' }}>
          Price Range:
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '20px' }}>
          Completion Date:
        </Card.Subtitle>
        <Card.Text style={{ color: '#5b57db', fontSize: '18px' }}>
          Job Description:
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '18px' }}>
          Published by:
        </Card.Subtitle>
        {contractBid === 'inactive' && <Button
          onClick={() => setContractBid('active')}
          variant="primary"
          type="submit"
        >
          Place a Bid!
        </Button>}
        {contractBid === 'active' && <ResponseToContract />}
      </Card.Body>
      <div></div>
    </Card>
  )
}
