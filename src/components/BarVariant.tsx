import { format } from "date-fns";
import { FC } from "react";
import {
  Tooltip,
  XAxis,
  AreaChart,
  Area,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
interface AreaVariantProps {
  data: {
    date: string;
    income: number;
    expenses: number;
  }[];
}

const BarVariant: FC<AreaVariantProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey={"date"}
          tickFormatter={(value) => format(value, "dd MMM")}
          style={{ fontSize: "12px" }}
          tickMargin={16}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey={"income"} fill="#14b8a6" className="drop-shadow-sm" />
        <Bar dataKey={"expenses"} fill="#f43f5e" className="drop-shadow-sm" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarVariant;
