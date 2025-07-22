import { useTheme } from "../../../../contexts/theme-context";
import { RevenueByLocationData } from "../data/revenue-by-location-data";

export const RevenueList = () => {
  const maxValue = 100;
  const {theme} = useTheme()
  return (
    <div className="flex flex-col gap-4">
      {RevenueByLocationData.features.map(feature => {
        const { name, value } = feature.properties;
        return (
          <div key={name} className="flex flex-col ">
            <div className={`flex justify-between text-sm font-medium items-center ${theme === 'dark' ? 'text-white/80' : 'text-black'}`}>
              <span>{name}</span>
              <span>{Math.round(value / 1000)}K</span>
            </div>

            <div className={`relative h-[2px] ${theme === 'dark' ? 'bg-white/10' : 'bg-blue-100'} rounded-full overflow-hidden`}>
              <div
                className={`absolute top-0 left-0 h-full bg-[#A8C5DA] rounded-full`}
                style={{ width: `${(value / (maxValue*1000)) * 100}%` }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
