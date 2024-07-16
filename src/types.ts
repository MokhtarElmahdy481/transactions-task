export type Customer = {
  id: number;
  name: string;
};
export type Transaction = {
  id: number;
  customer_id: number;
  date: string;
  amount: number;
};
export type TransformedData = {
  amount: number;
  customer: Customer;
  customer_id: number;
  date: string;
  id: number;
};
