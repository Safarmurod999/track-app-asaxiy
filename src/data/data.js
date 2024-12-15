import Converter from "../pages/Converter/Converter";
import Transactions from "../pages/Transactions/Transactions";
import Dashboard from "../pages/Dashboard/Dashboard";
export const routesArr = [
  {
    id: 0,
    path: "/converter",
    element: Converter,
    name: "Converter",
    icon: "fa-solid fa-money-bill",
  },
  {
    id: 1,
    path: "/transactions",
    element: Transactions,
    name: "Transactions",
    icon: "fa-solid fa-exchange",
  },
  {
    id: 2,
    path: "/dashboard",
    element: Dashboard,
    name: "Dashboard",
    icon: "fa-solid fa-chart-bar",
  },
];
