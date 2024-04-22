import styles from "./Error.module.css";

const Error = ({ items }) => {
  return (
    <>
      {items.length === 0 && (
        <h2 className={styles.Err}>Nothing To Do Enjoy Your Day.</h2>
      )}
    </>
  );
};

export default Error;
