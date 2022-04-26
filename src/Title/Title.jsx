import styles from '../Title/Title.module.css';
const Title = ({ title }) => { 
  return (
    <h2 className={styles.titleForm}>{title}</h2>
  );
}

export default Title;