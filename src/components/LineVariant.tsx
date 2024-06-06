import { format } from "date-fns";
import { FC } from "react";
import {
  Tooltip,
  XAxis,
  ResponsiveContainer,
  CartesianGrid,
  Bar,
  LineChart,
  Line,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
interface LineVariantProps {
  data: {
    date: string;
    income: number;
    expenses: number;
  }[];
}

const LineVariant: FC<LineVariantProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
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
        <Line
          dataKey={"income"}
          dot={false}
          strokeWidth={2}
          stroke="#14b8a6"
          className="drop-shadow-sm"
        />
        <Line
          dot={false}
          strokeWidth={2}
          dataKey={"expenses"}
          stroke="#f43f5e"
          className="drop-shadow-sm"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineVariant;
