import { useState } from "react";
import AlertDialog from "./AlertDialog.jsx";

function DefaultButton() {
  const buttonStyles = {
    width: "fitContent",
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    backgroundColor: "rgba(15, 23, 42, 1)",
    color: "rgba(255, 255, 255, 1)",
    outline: "transparent",
    border: "transparent",
    cursor: "pointer",
  };

  const [isDialog, setIsDialog] = useState(false);

  const openDialog = () => setIsDialog(true);
  const closeDialog = () => setIsDialog(false);

  return (
    <>
      <div style={{ marginTop: "30%" }}>
        <button style={buttonStyles} onClick={openDialog}>
          Delete
        </button>
      </div>
      {isDialog ? <AlertDialog handleClick={closeDialog} /> : null}
    </>
  );
}

export default DefaultButton;
