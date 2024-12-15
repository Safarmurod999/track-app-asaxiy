import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import TransactionContext from "../../context/dataContext";
import { useSearchParams } from "react-router";

const TransactionList = () => {
    const { state } = useContext(TransactionContext);
    const [searchParams] = useSearchParams();

    const filters = {
        startDate: searchParams.get("startDate") || "",
        endDate: searchParams.get("endDate") || "",
        type: searchParams.get("type") || "",
        category: searchParams.get("category") || "",
    };

    const filteredTransactions = state.transactions.filter((transaction) => {
        const transactionDate = new Date(transaction.date);
        const startDate = filters.startDate ? new Date(filters.startDate) : null;
        const endDate = filters.endDate ? new Date(filters.endDate) : null;

        const isWithinDateRange =
            (!startDate || transactionDate >= startDate) &&
            (!endDate || transactionDate <= endDate);

        const matchesType =
            !filters.type || transaction.type === filters.type;

        const matchesCategory =
            !filters.category || transaction.category === filters.category;

        return isWithinDateRange && matchesType && matchesCategory;
    });

    const totalIncome = filteredTransactions
        .filter((transaction) => transaction.type === "income")
        .reduce((acc, transaction) => {
            const convertedAmount =
                transaction.amount / state.exchangeRates[transaction.currency];
            return acc + convertedAmount;
        }, 0);

    const totalExpense = filteredTransactions
        .filter((transaction) => transaction.type === "expense")
        .reduce((acc, transaction) => {
            const convertedAmount =
                transaction.amount / state.exchangeRates[transaction.currency];
            return acc + convertedAmount;
        }, 0);

    const balance = totalIncome - totalExpense;

    return (
        <div>
        <div className="mt-4 mb-4 d-flex flex-column flex-md-row justify-content-center gap-3 text-center">
            <p className="fs-5 m-0">
                <strong>Total Income:</strong> ${totalIncome.toFixed(2)}
            </p>
            <p className="fs-5 m-0">
                <strong>Total Expense:</strong> ${totalExpense.toFixed(2)}
            </p>
            <p className="fs-5 m-0">
                <strong>Net Balance:</strong> ${balance.toFixed(2)}
            </p>
        </div>
    
        <div className="table-responsive">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className="text-center">#</th>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Currency</th>
                        <th>Note</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTransactions.length > 0 ? (
                        filteredTransactions.map((transaction, index) => (
                            <tr key={index}>
                                <td className="text-center">{index + 1}</td>
                                <td>{transaction.date}</td>
                                <td
                                    className={`text-capitalize ${transaction.type === "income"
                                        ? "text-success"
                                        : "text-danger"
                                    }`}
                                >
                                    {transaction.type}
                                </td>
                                <td>{transaction.category}</td>
                                <td>{transaction.amount.toFixed(2)}</td>
                                <td>{transaction.currency}</td>
                                <td>{transaction.note}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="text-center">
                                No transactions found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    </div>
    
    );
};

export default TransactionList;
