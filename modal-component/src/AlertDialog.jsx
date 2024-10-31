import styles from "./AlertDialog.module.css";
import PropTypes from "prop-types";

function AlertDialog({ handleClick }) {
  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.cardWrapper}>
          <div className={styles.titleAndMessage}>
            <div className={styles.title}>
              <h1>Are you absolutely sure?</h1>
            </div>
            <div className={styles.message}>
              <p>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </p>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.cancelButton} onClick={handleClick}>
              Cancel
            </button>
            <button className={styles.continueButton}>Continue</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AlertDialog;

AlertDialog.propTypes = {
  handleClick: PropTypes.func,
};
