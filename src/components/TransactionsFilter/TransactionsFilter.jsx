import { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useSearchParams } from 'react-router';

const TransactionsFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filters, setFilters] = useState({
        startDate: searchParams.get('startDate') || '',
        endDate: searchParams.get('endDate') || '',
        type: searchParams.get('type') || '',
        category: searchParams.get('category') || '',
    });
    const [errors, setErrors] = useState({ endDate: '' });

    const handleFrom = (e) => {
        const newParams = new URLSearchParams(searchParams);
        setFilters({ ...filters, startDate: e.target.value })
        newParams.set('startDate', e.target.value);
        setSearchParams(newParams);
    }
    const handleTo = (e) => {
        const newParams = new URLSearchParams(searchParams);

        const selectedDate = new Date(e.target.value);
        const startDate = new Date(filters.startDate);

        if (filters.startDate && selectedDate <= startDate) {
            setErrors({ ...errors, endDate: "End date must be after the start date." });
        } else {
            setErrors({ ...errors, endDate: '' });
            setFilters({ ...filters, endDate: e.target.value })
            newParams.set('endDate', e.target.value);
            newParams.set('type', 'income');
            setSearchParams(newParams);
        }
    }
    const handleType = (e) => {
        const newParams = new URLSearchParams(searchParams);
        setFilters({ ...filters, type: e.target.value })
        newParams.delete('type');
        if (e.target.value) {
            newParams.set('type', e.target.value);
        }

        setSearchParams(newParams);
    }

    const handleCategory = (e) => {
        const newParams = new URLSearchParams(searchParams);
        setFilters({ ...filters, category: e.target.value })
        newParams.set('category', e.target.value);
        newParams.delete('category');
        if (e.target.value) {
            newParams.set('category', e.target.value);
        }
        setSearchParams(newParams);
    }
    const clearFilters = () => {
        setFilters({ startDate: '', endDate: '', type: '' });
        setSearchParams({});
        location.reload();
    }
    return (
        <Form className="my-4">
            <Row className="g-3">
                <Col xs={12} sm={6} md={3}>
                    <Form.Group>
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control
                            type="date"
                            defaultValue={filters.startDate}
                            onChange={handleFrom}
                            required
                        />
                    </Form.Group>
                </Col>

                <Col xs={12} sm={6} md={3}>
                    <Form.Group>
                        <Form.Label>End Date</Form.Label>
                        <Form.Control
                            type="date"
                            defaultValue={filters.endDate}
                            onChange={handleTo}
                            isInvalid={!!errors.endDate}
                        />
                    </Form.Group>
                </Col>

                <Col xs={12} sm={6} md={3}>
                    <Form.Group>
                        <Form.Label>Type</Form.Label>
                        <Form.Control
                            as="select"
                            defaultValue={filters.type}
                            onChange={handleType}
                        >
                            <option value="">Choose type</option>
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </Form.Control>
                    </Form.Group>
                </Col>

                <Col xs={12} sm={6} md={3}>
                    <Form.Group>
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter category"
                            value={filters.category}
                            onChange={handleCategory}
                            required
                        />
                    </Form.Group>
                </Col>
            </Row>

            <div className="d-flex justify-content-end">
                <Button variant="primary" className="mt-3" onClick={clearFilters}>
                    Clear Filters
                </Button>
            </div>
        </Form>

    )
}

export default TransactionsFilter