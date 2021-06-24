import styles from "./index.module.scss";

// section wrapper component that spans entire width of screen and colors
// background in alternating white/off-white

// make sure markdown starts and ends with this component, or doesn't use it at
// all. see PageContent component.
const Section = ({ children, dark }) => (
  <section className={styles.section} data-dark={dark}>
    <div className={styles.wrapper}>{children}</div>
  </section>
);

export default Section;