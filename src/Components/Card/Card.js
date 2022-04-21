import classes from "./card.module.scss";

export const Card = (props) => {
  return (
    <div className={classes.item}>
      <p className={classes.title}>{props.title}</p>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
