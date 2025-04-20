import { Input } from "./input";
import { Label } from "./label";

interface Iprop {
  title: string;
  placeholder: string;
}

const FormInput = ({ title, placeholder }: Iprop) => {
  return (
    <span className="space-y-2">
      <Label className="text-xs">{title}</Label>
      <Input placeholder={placeholder} />
    </span>
  );
};

export default FormInput;
