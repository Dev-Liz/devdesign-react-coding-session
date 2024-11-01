import { useState } from "react";
import AlertDialog from "./AlertDialog.jsx";
import Button from "./Buttons.jsx";
import buttonStyles from "../CSS/Button.module.css";

function DefaultButton() {
  const [isDialog, setIsDialog] = useState(false);

  const openDialog = () => setIsDialog(true);
  const closeDialog = () => setIsDialog(false);

  return (
    <>
      <div style={{ marginTop: "20%" }}>
        <Button
          buttonText="Delete"
          onClick={openDialog}
          className={buttonStyles.defaultButton}
        />
      </div>
      {isDialog ? (
        <AlertDialog
          title="Are you absolutely sure?"
          message="This action cannot be undone. 
          This will permanently delete your
          account and remove your data from our servers."
          handleClick={closeDialog}
        />
      ) : null}
    </>
  );
}

export default DefaultButton;
