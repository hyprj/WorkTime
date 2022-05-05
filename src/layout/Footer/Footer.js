import React from "react";

import classes from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <ul className={classes.footer_list}>
        <li className={classes.footer_listItem}>
          <button type="button" className={classes.footer_fakeLink}>
            Home
          </button>
        </li>
        <li className={classes.footer_listItem}>
          <button type="button" className={classes.footer_fakeLink}>
            Privacy
          </button>
        </li>
        <li className={classes.footer_listItem}>
          <button type="button" className={classes.footer_fakeLink}>
            Contact Us
          </button>
        </li>
        <li className={classes.footer_listItem}>
          <button type="button" className={classes.footer_fakeLink}>
            About Us
          </button>
        </li>
        <li className={classes.footer_listItem}>
          <button type="button" className={classes.footer_fakeLink}>
            Careers
          </button>
        </li>
        <li className={classes.footer_listItem}>
          <button type="button" className={classes.footer_fakeLink}>
            Newsletter
          </button>
        </li>
        <li className={classes.footer_listItem}>
          <button type="button" className={classes.footer_fakeLink}>
            Licensing
          </button>
        </li>
        <li className={classes.footer_listItem}>
          <button type="button" className={classes.footer_fakeLink}>
            Cookie settings
          </button>
        </li>
      </ul>
    </footer>
  );
};
