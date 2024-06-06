import { FC } from "react";
import AccountFilter from "./AccountFilter";
import DateFilter from "./DateFilter";

interface FiltersProps {}

const Filters: FC<FiltersProps> = ({}) => {
  return (
    <div className=" flex flex-col lg:flex-row items-center gap-y-2 lg:gap-y-0 lg:gap-x-2">
      <AccountFilter />
      <DateFilter />
    </div>
  );
};

export default Filters;
