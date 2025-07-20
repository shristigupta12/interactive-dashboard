// src/components/eCommerce/total-sales/TotalSalesChart.jsx
import { PieChart, Pie, Cell, ResponsiveContainer, Text } from 'recharts';
import { TotalSalesData } from '../data/total-sales-data';
import { useTheme } from '../../../../contexts/theme-context';

const TotalSalesChart = () => {
  const {theme} = useTheme()
  const totalValue = TotalSalesData.reduce((sum, entry) => sum + entry.value, 0);
  const affiliatePercentage = (TotalSalesData.find(d => d.name === 'Affiliate')?.value || 0) / totalValue * 100;

  const renderCustomizedLabel = ({ cx, cy }: { cx: number; cy: number }) => {
    return (
      <Text x={cx} y={cy} dy={5} textAnchor="middle" fill={theme === 'dark' ? "#FFFFFF" : "#000000"} className="text-sm font-semibold bg-gray-700 px-3 py-1 rounded">
        {`${affiliatePercentage.toFixed(1)}%`}
      </Text>
    );
  };

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-6">
      <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] flex justify-center items-center relative">
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
                  <Cell key={`cell-${index}`} fill={theme === 'dark' ? entry.darkModeColor : entry.color}  />
                ))
              }
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        {/* The percentage text overlay */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${theme === 'dark' ? 'bg-white/10' : 'bg-gray-700'} text-white px-3 py-1 rounded-[4px] font-semibold text-sm `}>
            {`${affiliatePercentage.toFixed(1)}%`}
        </div>
      </div>

      {/* Legend */}
      <div className={`flex flex-col gap-3 sm:gap-4 w-full font-medium ${theme === 'dark' ? 'text-white/80' : 'text-black'}`}>
        {TotalSalesData?.map((entry, index) => (
          <div key={`legend-${index}`} className={`flex items-center justify-between text-sm ${theme === 'dark' ? 'text-white/80' : 'text-black'}`}>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: theme === 'dark' ? entry.darkModeColor : entry.color }}></span>
              <span className="truncate">{entry.name}</span>
            </div>
            <span className="font-medium">${entry.value.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalSalesChart;