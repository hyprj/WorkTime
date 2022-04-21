import classes from "./about.module.scss";

export const About = () => {
  return (
    <div className={classes.container}>
      <section className={classes.about}>
        <h2 className={classes.aboutHeader}>WorkTime is an app for better organization's management.</h2>
      </section>
    </div>
  );
};
