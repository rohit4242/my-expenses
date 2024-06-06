"use client";

import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Plus } from "lucide-react";
import { columns } from "./columns";
import { Skeleton } from "@/components/ui/skeleton";
import { useNewCategories } from "@/features/categories/hooks/use-new-categories";
import { useGetCategories } from "@/features/categories/api/use-get-categories";
import { useBulkDeleteCategories } from "@/features/categories/api/use-bulk-delete-categories";

const CategoriesPage = () => {
  const newCategories = useNewCategories();
  const accountsQuery = useGetCategories();
  const deleteCategory = useBulkDeleteCategories();
  const accounts = accountsQuery.data || [];

  const isDisabled = accountsQuery.isLoading || deleteCategory.isPending;
  if (accountsQuery.isLoading) {
    return (
      <div className=" max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
        <Card className="border-none drop-shadow-sm">
          <CardHeader>
            <Skeleton className="h-8 w-48" />
          </CardHeader>
          <CardContent>
            <div className="h-[500px] w-full flex items-center justify-center">
              <Loader2 className=" size-6 text-slate-300 animate-spin" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className=" max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className=" gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className=" text-xl line-clamp-1">Categories Page</CardTitle>
          <Button size={"sm"} onClick={newCategories.onOpen}>
            <Plus className=" size-4 mr-2" />
            Add new
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable
            filterKey="name"
            onDelete={(row) => {
              const ids = row.map((r) => r.original.id);
              deleteCategory.mutate({ ids });
            }}
            disabled={isDisabled}
            columns={columns}
            data={accounts}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoriesPage;
