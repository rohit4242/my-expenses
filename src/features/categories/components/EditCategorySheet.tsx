import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { insertAccountSchema, insertCategorySchema } from "@/db/schema";
import { z } from "zod";
import { useOpenCategories } from "../hooks/use-open-categories";
import { Loader2 } from "lucide-react";
import { useEditCategory } from "../api/use-edit-category";
import { useDeleteCategory } from "../api/use-delete-category";
import { useConfirm } from "@/hooks/use-confirm";
import CategoryForm from "./CategoryForm";
import { useGetCategory } from "../api/use-get-category";

const formSchema = insertCategorySchema.pick({
  name: true,
});

type FormValues = z.input<typeof formSchema>;

const EditCategorySheet = () => {
  const { isOpen, onClose, id } = useOpenCategories();

  const [ConfirmDialog, confirm] = useConfirm(
    "Are you sure?",
    "You are about to delete this category"
  );
  const deleteMutation = useDeleteCategory(id);

  const categoryQuery = useGetCategory(id);
  const editMutation = useEditCategory(id);

  const isPending = editMutation.isPending || deleteMutation.isPending;
  const isLoading = categoryQuery?.isLoading;

  const onSubmit = (values: FormValues) => {
    editMutation.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  const onDelete = async () => {
    const ok = await confirm();
    if (ok) {
      deleteMutation.mutate(undefined, {
        onSuccess: () => {
          onClose();
        },
      });
    }
  };
  const defaultValues = categoryQuery?.data
    ? {
        name: categoryQuery?.data.name,
      }
    : {
        name: "",
      };
  return (
    <>
      <ConfirmDialog />
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className=" space-y-4">
          <SheetHeader>
            <SheetTitle>Edit Category</SheetTitle>
            <SheetDescription>Edit an existing category</SheetDescription>
          </SheetHeader>
          {isLoading ? (
            <div className=" absolute inset-0 flex items-center justify-center">
              <Loader2 className=" size-4 text-muted-foreground animate-spin" />
            </div>
          ) : (
            <CategoryForm
              id={id}
              onSubmit={onSubmit}
              defaultValues={defaultValues}
              desabled={isPending}
              onDelete={onDelete}
            />
          )}
        </SheetContent>
      </Sheet>
    </>
  );
};

export default EditCategorySheet;
