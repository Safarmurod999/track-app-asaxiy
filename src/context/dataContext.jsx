import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";

const TransactionContext = createContext();

const initialState = {
  transactions: JSON.parse(localStorage.getItem("transactions")) || [],
  baseCurrency: "USD",
  exchangeRates: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return { ...state, transactions: [...state.transactions, action.payload] };
    case "SET_EXCHANGE_RATES":
      return { ...state, exchangeRates: action.payload };
    default:
      return state;
  }
};

export const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      const response = await axios.get("https://api.exchangerate-api.com/v4/latest/USD");
      dispatch({ type: "SET_EXCHANGE_RATES", payload: response.data.rates });
    };
    fetchExchangeRates();
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
  }, [state.transactions]);

  return (
    <TransactionContext.Provider value={{ state, dispatch }}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionContext;
