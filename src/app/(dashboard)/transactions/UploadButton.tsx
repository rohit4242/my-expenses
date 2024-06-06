import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { FC } from "react";
import { useCSVReader } from "react-papaparse";
interface UploadButtonProps {
  onUpload: (results: any) => void;
}

const UploadButton: FC<UploadButtonProps> = ({ onUpload }) => {
  const { CSVReader } = useCSVReader();

  return (
    <CSVReader onUploadAccepted={onUpload}>
      {({ getRootProps }: any) => (
        <Button size="sm" className="w-full lg:w-auto" {...getRootProps()}>
          <Upload className="size-4 mr-2" />
          Import
        </Button>
      )}
    </CSVReader>
  );
};

export default UploadButton;
