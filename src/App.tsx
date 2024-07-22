import ProgressBar from "./components/progressBar/ProgressBar";
import {
  Button,
  EnableDisableButtons,
  LoadingButton,
  ToolTipOnHover,
} from "./components/button/Button";
export default function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button />
      <EnableDisableButtons />
      <LoadingButton />
      <ToolTipOnHover />
      <ProgressBar />
    </>
  );
}
