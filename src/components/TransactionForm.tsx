// TransactionForm.tsx
import React, { useState } from 'react';
import './TransactionForm.css';

interface TransactionFormProps {
  addTransaction: (date: string, type: 'credit' | 'debit', amount: number,purpose:string) => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ addTransaction }) => {
  const [date, setDate] = useState<string>('');
  const [type, setType] = useState<'credit' | 'debit'>('credit');
  const [amount, setAmount] = useState<number>(0);
  const [purpose, setPurpose] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTransaction(date, type, amount,purpose);
    setDate('');
    setAmount(0);
    setPurpose('');

  };

  return (
    <form onSubmit={handleSubmit}>
      Date:<input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
        required 
      />
      Type<select value={type} onChange={(e) => setType(e.target.value as 'credit' | 'debit')}>
        <option value="credit">Credit</option>
        <option value="debit">Debit</option>
      </select>
      Amount<input 
        type="number" 
        value={amount} 
        onChange={(e) => setAmount(Number(e.target.value))} 
        required 
      />
      Add Note:<input 
        type="text" 
        value={purpose} 
        onChange={(e) => setPurpose(String(e.target.value))} 
        required 
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
