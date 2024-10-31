import { useState } from "react";
import AlertDialog from "./AlertDialog.jsx";
import Button from "./Buttons.jsx";
import buttonStyles from "./Button.module.css";

function DefaultButton() {
  // const buttonStyles = {
  //   width: "fitContent",
  //   padding: "0.5rem 1rem",
  //   borderRadius: "0.5rem",
  //   backgroundColor: "rgba(15, 23, 42, 1)",
  //   color: "rgba(255, 255, 255, 1)",
  //   outline: "transparent",
  //   border: "transparent",
  //   cursor: "pointer",
  // };

  const [isDialog, setIsDialog] = useState(false);

  const openDialog = () => setIsDialog(true);
  const closeDialog = () => setIsDialog(false);

  return (
    <>
      <div style={{ marginTop: "30%" }}>
        <Button
          buttonText="Delete"
          onClick={openDialog}
          className={buttonStyles.defaultButton}
        />
      </div>
      {isDialog ? (
        <AlertDialog
          title="Are you absolutely sure?"
          message="This action cannot be undone. This will permanently delete your
account and remove your data from our servers."
          handleClick={closeDialog}
        />
      ) : null}
    </>
  );
}

export default DefaultButton;
