import axios from "axios";
import { Customer, Transaction } from "./types";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const getCustomers = async () => {
  const response = await api.get<Customer[]>("/customers");
  return response.data;
};

export const getTransactions = async () => {
  const response = await api.get<Transaction[]>("/transactions");
  return response.data;
};
export const getAll = async () => {
  const response1 = getTransactions();
  const response2 = getCustomers();
  const [Transactions, Customers] = await Promise.all([response1, response2]);

  console.log(Transactions.map(tr=> {
    return { ...tr, customer: Customers.find(c => c.id == tr.customer_id) }
  }));
  

  const dd = Transactions.map(tr=> {
    return { ...tr, customer: Customers.find(c => c.id == tr.customer_id) }
  });

  return dd;
};
