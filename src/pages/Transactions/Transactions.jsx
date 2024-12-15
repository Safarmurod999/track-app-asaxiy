import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { Breadcrumbs, TransactionForm, TransactionsFilter, TransactionList } from '../../components/index'

const Transactions = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className='converter py-3'>
      <Container>
        <Breadcrumbs />
        <Button type='primary' onClick={() => setShowModal(true)} >Add Transaction</Button>
        <TransactionForm showModal={showModal} setShowModal={setShowModal} />
        <TransactionsFilter />
        <TransactionList />
      </Container>
    </section>
  )
}

export default Transactions