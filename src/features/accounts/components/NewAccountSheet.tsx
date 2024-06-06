import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useNewAccount } from "../hooks/use-new-account";
import AccountForm from "./AccountForm";
import { insertAccountSchema } from "@/db/schema";
import { z } from "zod";
import { useCreateAccount } from "../api/use-create-account";

const formSchema = insertAccountSchema.pick({
  name: true,
});

type FormValues = z.input<typeof formSchema>;

const NewAccountSheet = () => {
  const { isOpen, onClose } = useNewAccount();

  const mutation = useCreateAccount();
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
          <SheetTitle>Create new account</SheetTitle>
          <SheetDescription>
            Please fill out the form below to create a new
          </SheetDescription>
        </SheetHeader>
        <AccountForm
          onSubmit={onSubmit}
          defaultValues={{ name: "" }}
          desabled={mutation.isPending}
        />
      </SheetContent>
    </Sheet>
  );
};

export default NewAccountSheet;
