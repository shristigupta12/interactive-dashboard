// src/components/eCommerce/total-sales/TotalSalesChart.jsx
import { PieChart, Pie, Cell, ResponsiveContainer, Text } from 'recharts';
import { TotalSalesData } from '../data/total-sales-data';

const TotalSalesChart = () => {
  const totalValue = TotalSalesData.reduce((sum, entry) => sum + entry.value, 0);
  const affiliatePercentage = (TotalSalesData.find(d => d.name === 'Affiliate')?.value || 0) / totalValue * 100;

  const renderCustomizedLabel = ({ cx, cy }: { cx: number; cy: number }) => {
    return (
      <Text x={cx} y={cy} dy={5} textAnchor="middle" fill="#FFFFFF" className="text-sm font-semibold bg-gray-700 px-3 py-1 rounded">
        {`${affiliatePercentage.toFixed(1)}%`}
      </Text>
    );
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="w-[120px] h-[120px] flex justify-center items-center relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={TotalSalesData}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={60} 
              paddingAngle={4}
              dataKey="value"
              animationDuration={500}
              label={renderCustomizedLabel} 
              labelLine={false}
            >
              {
                TotalSalesData?.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color}  />
                ))
              }
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        {/* The percentage text overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded-[4px] font-semibold text-sm">
            {`${affiliatePercentage.toFixed(1)}%`}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-col gap-4 w-full font-medium">
        {TotalSalesData?.map((entry, index) => (
          <div key={`legend-${index}`} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }}></span>
              <span>{entry.name}</span>
            </div>
            <span className="font-medium">${entry.value.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalSalesChart;