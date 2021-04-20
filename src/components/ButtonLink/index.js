import styles from './ButtonLink.module.css';

export default function ButtonLink({ name, iconSrc, handleClick }) {
  return (
    <button onClick={handleClick} className={styles.button_container}>
      {iconSrc && <img className={styles.icon} src={iconSrc} alt='' />}
      <p>{name}</p>
    </button>
  );
}
