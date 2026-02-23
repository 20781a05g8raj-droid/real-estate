'use client';

import { useState, useEffect } from 'react';
import styles from '../app/properties/[id]/page.module.css';

interface MortgageCalculatorProps {
    price: string;
}

export default function MortgageCalculator({ price }: MortgageCalculatorProps) {
    const numericPrice = parseInt(price.replace(/[^\d]/g, '')) || 0;
    const [totalPrice, setTotalPrice] = useState(numericPrice);
    const [downPayment, setDownPayment] = useState(numericPrice * 0.2);
    const [loanPeriod, setLoanPeriod] = useState(25);



    const calculateMonthly = () => {
        const principal = totalPrice - downPayment;
        const annualRate = 0.045; // 4.5% interest rate placeholder
        const monthlyRate = annualRate / 12;
        const numberOfPayments = loanPeriod * 12;

        if (principal <= 0) return 0;

        const monthlyPayment =
            (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
            (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

        return Math.round(monthlyPayment);
    };

    return (
        <div className={styles.mortgageGrid}>
            <div className={styles.mortgageInputs}>
                <div className={styles.mortgageInputGroup}>
                    <label>Total Price (INR)</label>
                    <input
                        type="text"
                        value={totalPrice}
                        onChange={(e) => setTotalPrice(parseInt(e.target.value) || 0)}
                    />
                </div>
                <div className={styles.mortgageInputGroup}>
                    <label>Down Payment (20%)</label>
                    <input
                        type="text"
                        value={downPayment}
                        onChange={(e) => setDownPayment(parseInt(e.target.value) || 0)}
                    />
                </div>
                <div className={styles.mortgageInputGroup}>
                    <label>Loan Period (Years)</label>
                    <select value={loanPeriod} onChange={(e) => setLoanPeriod(parseInt(e.target.value))}>
                        <option value={25}>25</option>
                        <option value={20}>20</option>
                        <option value={15}>15</option>
                        <option value={10}>10</option>
                    </select>
                </div>
            </div>
            <div className={styles.mortgageResults}>
                <div className={styles.mortgageResultLabel}>
                    INR <span className={styles.monthlyAmount}>{calculateMonthly().toLocaleString('en-IN')}</span> / month
                </div>
                <button className={styles.preApprovedBtn}>GET PRE-APPROVED</button>
            </div>
        </div>
    );
}
