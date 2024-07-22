import ProgressBar from "./components/progressBar/ProgressBar";
import {
  CircularProgressBarFixedValue30,
  CircularProgressBarFixedValue60,
} from "./components/progressBar/CircularProgressBar";
import {
  Button,
  EnableDisableButtons,
  LoadingButton,
  ToolTipOnHover,
} from "./components/button/Button";
import SingleFileUploader from "./components/fileUploader/SingleFileUploader";
export default function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button />
      <EnableDisableButtons />
      <LoadingButton />
      <ToolTipOnHover />
      <SingleFileUploader />
    </>
  );
}
