"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const spendingData = [
  { month: "Oct", value: 4620 },
  { month: "Nov", value: 4980 },
  { month: "Dec", value: 5210 },
  { month: "Jan", value: 4760 },
  { month: "Feb", value: 4390 },
  { month: "Mar", value: 4540 },
];

const expenseBreakdown = [
  { name: "Rent", value: 2400, color: "#10b981" },
  { name: "Food", value: 720, color: "#34d399" },
  { name: "Transport", value: 260, color: "#6ee7b7" },
  { name: "Entertainment", value: 340, color: "#a7f3d0" },
  { name: "Savings", value: 1800, color: "#047857" },
];

const transactions = [
  { id: 1, name: "Payroll Deposit", date: "Mar 10", amount: 4200, type: "income" },
  { id: 2, name: "Rent Payment", date: "Mar 09", amount: -2400, type: "expense" },
  { id: 3, name: "Grocery Market", date: "Mar 08", amount: -134.22, type: "expense" },
  { id: 4, name: "Coffee Shop", date: "Mar 08", amount: -18.5, type: "expense" },
  { id: 5, name: "ETF Auto Invest", date: "Mar 07", amount: -600, type: "expense" },
  { id: 6, name: "Freelance Client", date: "Mar 06", amount: 980, type: "income" },
  { id: 7, name: "Gym Membership", date: "Mar 05", amount: -55, type: "expense" },
  { id: 8, name: "Gas Station", date: "Mar 04", amount: -48.9, type: "expense" },
  { id: 9, name: "Streaming Bundle", date: "Mar 03", amount: -24.99, type: "expense" },
  { id: 10, name: "Restaurant", date: "Mar 02", amount: -72.35, type: "expense" },
  { id: 11, name: "Credit Card Cashback", date: "Mar 01", amount: 38.6, type: "income" },
  { id: 12, name: "Mobile Bill", date: "Feb 28", amount: -64, type: "expense" },
  { id: 13, name: "Internet Service", date: "Feb 27", amount: -79, type: "expense" },
  { id: 14, name: "Ride Share", date: "Feb 26", amount: -16.45, type: "expense" },
  { id: 15, name: "Savings Interest", date: "Feb 25", amount: 22.14, type: "income" },
];

const netWorth = 128540;
const monthlyChange = 3.8;

function amountColor(amount: number) {
  return amount >= 0 ? "text-emerald-400" : "text-rose-400";
}

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-white/10 bg-[#111] p-6"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Vault</p>
          <h1 className="mt-2 text-3xl font-semibold">Personal Finance Dashboard</h1>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-[#161616] p-4">
              <p className="text-sm text-zinc-400">Net Worth</p>
              <p className="mt-2 text-2xl font-semibold text-emerald-400">${netWorth.toLocaleString()}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#161616] p-4">
              <p className="text-sm text-zinc-400">30d Change</p>
              <p className="mt-2 text-2xl font-semibold text-emerald-400">+{monthlyChange}%</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#161616] p-4">
              <p className="text-sm text-zinc-400">Cash Accounts</p>
              <p className="mt-2 text-2xl font-semibold">$24,860</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#161616] p-4">
              <p className="text-sm text-zinc-400">Investments</p>
              <p className="mt-2 text-2xl font-semibold">$103,680</p>
            </div>
          </div>
        </motion.header>

        <section className="mt-6 grid gap-6 lg:grid-cols-3">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-white/10 bg-[#111] p-5 lg:col-span-2"
          >
            <h2 className="text-lg font-semibold">Spending (Past 6 Months)</h2>
            <div className="mt-4 h-[280px]">
              {mounted ? (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={spendingData}>
                    <XAxis dataKey="month" stroke="#a1a1aa" tickLine={false} axisLine={false} />
                    <YAxis stroke="#a1a1aa" tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}`} />
                    <Tooltip
                      contentStyle={{ background: "#171717", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10 }}
                      formatter={(value) => [`$${value}`, "Spending"]}
                    />
                    <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={3} dot={{ r: 4, fill: "#10b981" }} />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full animate-pulse rounded-xl bg-white/5" />
              )}
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-white/10 bg-[#111] p-5"
          >
            <h2 className="text-lg font-semibold">Expense Breakdown</h2>
            <div className="mt-4 h-[240px]">
              {mounted ? (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={expenseBreakdown} dataKey="value" nameKey="name" innerRadius={60} outerRadius={90} paddingAngle={2}>
                      {expenseBreakdown.map((entry) => (
                        <Cell key={entry.name} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ background: "#171717", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10 }}
                      formatter={(value) => [`$${value}`, "Amount"]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full animate-pulse rounded-xl bg-white/5" />
              )}
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              {expenseBreakdown.map((item) => (
                <li key={item.name} className="flex items-center justify-between text-zinc-300">
                  <span className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                    {item.name}
                  </span>
                  <span>${item.value}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 rounded-2xl border border-white/10 bg-[#111] p-5"
        >
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead className="text-zinc-400">
                <tr>
                  <th className="pb-3 font-medium">Description</th>
                  <th className="pb-3 font-medium">Date</th>
                  <th className="pb-3 font-medium">Type</th>
                  <th className="pb-3 text-right font-medium">Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx) => (
                  <tr key={tx.id} className="border-t border-white/8 transition hover:bg-white/[0.02]">
                    <td className="py-3">{tx.name}</td>
                    <td className="py-3 text-zinc-400">{tx.date}</td>
                    <td className="py-3 text-zinc-300">{tx.type === "income" ? "Income" : "Expense"}</td>
                    <td className={`py-3 text-right font-semibold ${amountColor(tx.amount)}`}>
                      {tx.amount >= 0 ? "+" : "-"}${Math.abs(tx.amount).toLocaleString(undefined, { maximumFractionDigits: 2 })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
