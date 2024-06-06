import { useOpenCategories } from "@/features/categories/hooks/use-open-categories";
import { useOpenTransaction } from "@/features/transactions/hooks/use-open-transaction";
import { cn } from "@/lib/utils";
import { TriangleAlert } from "lucide-react";
import { FC } from "react";

interface CategoryColumnProps {
  id: string;
  category: string | null;
  categoryId: string | null;
}

const CategoryColumn: FC<CategoryColumnProps> = ({
  id,
  category,
  categoryId,
}) => {
  const { onOpen: onOpenCategory } = useOpenCategories();
  const { onOpen: onOpenTransaction } = useOpenTransaction();
  const onClick = () => {
    if (categoryId) {
      onOpenCategory(categoryId);
    } else {
      onOpenTransaction(id);
    }
  };
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center cursor-pointer hover:underline",
        !category && "text-rose-500"
      )}
    >
      {!category && <TriangleAlert className="mr-2 size-4 shrink-0" />}
      {category || "Uncategorized"}
    </div>
  );
};

export default CategoryColumn;
