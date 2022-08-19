import Button from "../CompositionComponents/CompositionComponent";
import partiallyApply from "./components/partiallyApply";

const DangerButton = () => {
  return partiallyApply(Button, { color: "red" });
};

export default DangerButton;
