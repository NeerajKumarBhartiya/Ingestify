import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Order } from '../../types';

interface OrderStatusChartProps {
  orders: Order[];
}

const STATUS_COLORS = {
  paid: '#10b981',
  pending: '#f59e0b',
  refunded: '#ef4444',
  cancelled: '#6b7280',
  authorized: '#8b5cf6',
  partially_refunded: '#f97316'
};

export default function OrderStatusChart({ orders }: OrderStatusChartProps) {
  const statusData = React.useMemo(() => {
    const statusCounts = orders.reduce((acc, order) => {
      const status = order.financial_status || 'unknown';
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(statusCounts).map(([status, count]) => ({
      name: status.replace('_', ' ').toUpperCase(),
      value: count,
      color: STATUS_COLORS[status as keyof typeof STATUS_COLORS] || '#9ca3af'
    }));
  }, [orders]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Status Distribution</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={statusData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
            >
              {statusData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Legend 
              verticalAlign="bottom" 
              height={36}
              formatter={(value, entry) => (
                <span style={{ color: entry.color }}>{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}