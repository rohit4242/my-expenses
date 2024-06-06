import { FC } from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

interface RadarVariantProps {
  data: {
    name: string;
    value: number;
  }[];
}

const COLORS = ["#14b8a6", "#06b6d4", "#f43f5e", "#f97316"];

const RadarVariant: FC<RadarVariantProps> = ({ data }) => {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <RadarChart
        cx={
          '50%'
        }
      
        cy={'50%'}
        outerRadius={'60%'}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis style={{fontSize: "12px"}} dataKey={'name'} />
        <PolarRadiusAxis style={{fontSize: "12px"}} />
        <Radar dataKey={'value'} stroke="#14b8a6" fill="#14b8a6" fillOpacity={0.6} />
      
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarVariant;
