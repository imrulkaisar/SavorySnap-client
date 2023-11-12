import { Alert, Button } from "keep-react";
import { Link } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";

const Test = () => {
  return (
    <div>
      <Alert
        additionalContent={
          <div className="mt-1 text-sm text-slate-500">
            Default message - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry
          </div>
        }
        icon={<BsInfoCircle className="text-blue-600 mt-5 text-4xl" />}
        title="Default message - make it short"
      />
    </div>
  );
};

export default Test;
