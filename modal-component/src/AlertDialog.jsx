import styles from "./AlertDialog.module.css";
import buttonStyles from "./Button.module.css";
import PropTypes from "prop-types";
import Button from "./Buttons.jsx";

function AlertDialog({ handleClick, title, message }) {
  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.cardWrapper}>
          <div className={styles.titleAndMessage}>
            <div className={styles.title}>
              <h1>{title}</h1>
            </div>
            <div className={styles.message}>
              <p>{message}</p>
            </div>
          </div>
          <div className={buttonStyles.buttonContainer}>
            <Button
              buttonText="Cancel"
              className={buttonStyles.cancelButton}
              onClick={handleClick}
            />
            <Button
              buttonText="Continue"
              className={buttonStyles.continueButton}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AlertDialog;

AlertDialog.propTypes = {
  handleClick: PropTypes.func,
  title: PropTypes.string,
  message: PropTypes.string,
};
