// import React, { useContext } from "react";
// import { Pie, Bar } from "react-chartjs-2";
// import { Card, Row, Col, Container } from "react-bootstrap";
// import { Breadcrumbs } from "../../components";
// import TransactionContext from "../../context/dataContext";
// import { Chart as ChartJS } from "chart.js/auto";

// const Dashboard = () => {
//     const { state } = useContext(TransactionContext);

//     const incomeTransactions = state.transactions.filter(
//         (transaction) => transaction.type === "income"
//     );
//     const expenseTransactions = state.transactions.filter(
//         (transaction) => transaction.type === "expense"
//     );

//     const incomeData = incomeTransactions.reduce((acc, transaction) => {
//         acc[transaction.category] = acc[transaction.category]
//             ? acc[transaction.category] + transaction.amount
//             : transaction.amount;
//         return acc;
//     }, {});

//     const expenseData = expenseTransactions.reduce((acc, transaction) => {
//         acc[transaction.category] = acc[transaction.category]
//             ? acc[transaction.category] + transaction.amount
//             : transaction.amount;
//         return acc;
//     }, {});

//     const incomePieData = {
//         labels: Object.keys(incomeData),
//         datasets: [
//             {
//                 data: Object.values(incomeData),
//                 backgroundColor: ["#4CAF50", "#8BC34A", "#C8E6C9", "#388E3C"],
//                 hoverBackgroundColor: ["#388E3C", "#4CAF50", "#8BC34A", "#C8E6C9"],
//             },
//         ],
//     };

//     const expensePieData = {
//         labels: Object.keys(expenseData),
//         datasets: [
//             {
//                 data: Object.values(expenseData),
//                 backgroundColor: ["#F44336", "#FF7043", "#FFEBEE", "#D32F2F"],
//                 hoverBackgroundColor: ["#D32F2F", "#F44336", "#FF7043", "#FFEBEE"],
//             },
//         ],
//     };

//     const barChartData = {
//         labels: ["Income", "Expense"],
//         datasets: [
//             {
//                 label: "Amount",
//                 data: [
//                     incomeTransactions.reduce((acc, transaction) => acc + transaction.amount, 0),
//                     expenseTransactions.reduce((acc, transaction) => acc + transaction.amount, 0),
//                 ],
//                 backgroundColor: ["#4CAF50", "#F44336"],
//                 borderColor: ["#388E3C", "#D32F2F"],
//                 borderWidth: 1,
//             },
//         ],
//     };

//     return (
//         <section className="dashboard py-3">
//             <Container>
//                 <Breadcrumbs />
//                 <Row>
//                     <Col className="mb-4">
//                         <Card>
//                             <Card.Header>
//                                 <h5>Income vs Expense</h5>
//                             </Card.Header>
//                             <Card.Body>
//                                 <Bar data={barChartData} options={{ responsive: true }} />
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col className="mb-4">
//                         <Card>
//                             <Card.Header>
//                                 <h5>Income by Category</h5>
//                             </Card.Header>
//                             <Card.Body>
//                                 <Pie data={incomePieData} />
//                             </Card.Body>
//                         </Card>
//                     </Col>

//                     <Col className="mb-4">
//                         <Card>
//                             <Card.Header>
//                                 <h5>Expense by Category</h5>
//                             </Card.Header>
//                             <Card.Body>
//                                 <Pie data={expensePieData} />
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </Row>

//             </Container>
//         </section>
//     );
// };

// export default Dashboard;


import React, { useContext } from "react";
import { Pie, Bar } from "react-chartjs-2";
import { Card, Row, Col, Container } from "react-bootstrap";
import { Breadcrumbs } from "../../components";
import TransactionContext from "../../context/dataContext";
import { Chart as ChartJS } from "chart.js/auto";

const Dashboard = () => {
    const { state } = useContext(TransactionContext);

    const incomeTransactions = state.transactions.filter(
        (transaction) => transaction.type === "income"
    );
    const expenseTransactions = state.transactions.filter(
        (transaction) => transaction.type === "expense"
    );

    const incomeData = incomeTransactions.reduce((acc, transaction) => {
        acc[transaction.category] = acc[transaction.category]
            ? acc[transaction.category] + transaction.amount
            : transaction.amount;
        return acc;
    }, {});

    const expenseData = expenseTransactions.reduce((acc, transaction) => {
        acc[transaction.category] = acc[transaction.category]
            ? acc[transaction.category] + transaction.amount
            : transaction.amount;
        return acc;
    }, {});

    const incomePieData = {
        labels: Object.keys(incomeData),
        datasets: [
            {
                data: Object.values(incomeData),
                backgroundColor: ["#4CAF50", "#8BC34A", "#C8E6C9", "#388E3C"],
                hoverBackgroundColor: ["#388E3C", "#4CAF50", "#8BC34A", "#C8E6C9"],
            },
        ],
    };

    const expensePieData = {
        labels: Object.keys(expenseData),
        datasets: [
            {
                data: Object.values(expenseData),
                backgroundColor: ["#F44336", "#FF7043", "#FFEBEE", "#D32F2F"],
                hoverBackgroundColor: ["#D32F2F", "#F44336", "#FF7043", "#FFEBEE"],
            },
        ],
    };

    const barChartData = {
        labels: ["Income", "Expense"],
        datasets: [
            {
                label: "Amount",
                data: [
                    incomeTransactions.reduce((acc, transaction) => acc + transaction.amount, 0),
                    expenseTransactions.reduce((acc, transaction) => acc + transaction.amount, 0),
                ],
                backgroundColor: ["#4CAF50", "#F44336"],
                borderColor: ["#388E3C", "#D32F2F"],
                borderWidth: 1,
            },
        ],
    };

    return (
        <section className="dashboard py-3">
            <Container>
                <Breadcrumbs />
                <Row>

                    <Col xs={12} md={6} className="mb-4">
                        <Card>
                            <Card.Header>
                                <h5>Income by Category</h5>
                            </Card.Header>
                            <Card.Body>
                                <div style={{ position: "relative", height: "250px" }}>
                                    <Pie data={incomePieData} options={{ responsive: true, maintainAspectRatio: false }} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={6} className="mb-4">
                        <Card>
                            <Card.Header>
                                <h5>Expense by Category</h5>
                            </Card.Header>
                            <Card.Body>
                                <div style={{ position: "relative", height: "250px" }}>
                                    <Pie data={expensePieData} options={{ responsive: true, maintainAspectRatio: false }} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} className="mb-4">
                        <Card>
                            <Card.Header>
                                <h5>Income vs Expense</h5>
                            </Card.Header>
                            <Card.Body>
                                <Bar data={barChartData} options={{ responsive: true, maintainAspectRatio: false }} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Dashboard;
