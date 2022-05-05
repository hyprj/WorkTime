import React from "react";

import { Button, Cards, Card, classes } from "./index";

export const About = () => {
  return (
    <div className={classes.container}>
      <section className={classes.about}>
        <h2 className={classes.aboutHeader}>
          Better management approach. In every way.
        </h2>
        <h3 className={classes.about_subHeader}>
          Check out why WorkTime is a reliable tool.
        </h3>
        <Button size="biggest">
          <a href="#pros">See our pros</a>
          <i className="fa-solid fa-arrow-down" />
        </Button>
      </section>
      <section id="pros" className={classes.pros}>
        {/* <div className={classes.cards}>
          <div className="card">
            <div class="card__img">
              <i class="fa-solid fa-clock fa-4x"></i>
            </div>
            <div class="card__content">
              <h3 class="card__heading">Time and money saving</h3>
              <p class="card__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ducimus eveniet itaque ullam totam laudantium doloribus, nisi
                non. Quaerat, fuga pariatur.
              </p>
            </div>
          </div>
        </div> */}
        <Cards>
          <Card title="" icon="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            eveniet itaque ullam totam laudantium doloribus, nisi non. Quaerat,
            fuga pariatur.
          </Card>
          <Card title="" icon="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            eveniet itaque ullam totam laudantium doloribus, nisi non. Quaerat,
            fuga pariatur.
          </Card>
          <Card title="" icon="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            eveniet itaque ullam totam laudantium doloribus, nisi non. Quaerat,
            fuga pariatur.
          </Card>
          <Card title="" icon="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            eveniet itaque ullam totam laudantium doloribus, nisi non. Quaerat,
            fuga pariatur.
          </Card>
        </Cards>
      </section>
    </div>
  );
};
