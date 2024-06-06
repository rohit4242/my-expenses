import { insertCategorySchema } from "@/db/schema";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
const formSchema = insertCategorySchema.pick({
  name: true,
});

type FormValues = z.input<typeof formSchema>;

interface AccountFormProps {
  id?: string;
  defaultValues?: FormValues;
  onSubmit: (values: FormValues) => void;
  onDelete?: () => void;
  desabled?: boolean;
}

const CategoryForm: FC<AccountFormProps> = ({
  defaultValues,
  onSubmit,
  onDelete,
  desabled,
  id,
}) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  const handleSubmit = (values: FormValues) => {
    onSubmit(values);
  };
  const handleDelete = () => {
    onDelete?.();
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className=" space-y-4 pt-4"
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  disabled={desabled}
                  placeholder="e.g. Food, Travel, etc."
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="w-full" disabled={desabled}>
          {id ? "Save changes" : "Create category"}
        </Button>
        {!!id && (
          <Button
            type="button"
            onClick={handleDelete}
            variant={"outline"}
            disabled={desabled}
            className="w-full"
          >
            <Trash className=" size-4 mr-2" />
            Delete category
          </Button>
        )}
      </form>
    </Form>
  );
};

export default CategoryForm;
