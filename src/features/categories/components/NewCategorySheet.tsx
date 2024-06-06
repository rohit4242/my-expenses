import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useNewCategories } from "../hooks/use-new-categories";
import { insertCategorySchema } from "@/db/schema";
import { z } from "zod";
import { useCreateCategory } from "../api/use-create-category";
import CategoryForm from "./CategoryForm";

const formSchema = insertCategorySchema.pick({
  name: true,
});

type FormValues = z.input<typeof formSchema>;

const NewCategorySheet = () => {
  const { isOpen, onClose } = useNewCategories();

  const mutation = useCreateCategory();
  const onSubmit = (values: FormValues) => {
    mutation.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className=" space-y-4">
        <SheetHeader>
          <SheetTitle>Create new category</SheetTitle>
          <SheetDescription>
            Please fill out the form below to create a new
          </SheetDescription>
        </SheetHeader>
        <CategoryForm
          onSubmit={onSubmit}
          defaultValues={{ name: "" }}
          desabled={mutation.isPending}
        />
      </SheetContent>
    </Sheet>
  );
};

export default NewCategorySheet;
