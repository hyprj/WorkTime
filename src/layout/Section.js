import classes from "./section.module.scss";

export const Section = ({ title, children }) => {
  return (
    <div className={classes.sectionContainer}>
      <div className={classes.section}>
        <h2 className={classes.sectionTitle}>{title}</h2>
        <div className={classes.sectionContent}>{children}</div>
      </div>
    </div>
  );
};
