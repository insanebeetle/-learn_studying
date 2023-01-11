import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
//서로 다른 파일들로 코드를 분할 가능
export default Button;
