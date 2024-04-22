import styles from "./Containers.module.css";

const Containers = (props) => {
  return <div className={styles.Container}>{props.children}</div>;
};

export default Containers;
