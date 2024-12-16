import React, { useContext, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import TransactionContext from '../../context/dataContext';
const TransactionForm = ({ showModal, setShowModal }) => {
    const { dispatch, state } = useContext(TransactionContext);
    const [formData, setFormData] = useState({
        amount: "",
        category: "",
        type: "income",
        date: "",
        currency: "USD",
        description: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD_TRANSACTION", payload: formData });
        setFormData({ amount: "", type: "income", date: "", currency: "USD", description: "", category: "", });
        setShowModal(false);
    };

    return (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Transaction Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Amount</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter amount"
                            value={formData.amount}
                            onChange={(e) => setFormData({ ...formData, amount: +e.target.value })}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter category"
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Type</Form.Label>
                        <Form.Control
                            as="select"
                            value={formData.type}
                            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        >
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            type="date"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Currency</Form.Label>
                        <Form.Control
                            as="select"
                            value={formData.currency}
                            onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                        >
                            {Object.keys(state.exchangeRates).map((currency) => (
                                <option key={currency} value={currency}>
                                    {currency}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Note</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter a note"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        />
                    </Form.Group>
                    <Button type="submit" className='mt-3'>Add Transaction</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default TransactionForm