import { useEffect, useState } from "react";
import { Section } from "../../layout/Section";
import { Table } from "../../Components/Table/Table";
import { MobileTable } from "../../Components/Table/MobileTable";
import { useWindowSize } from "../../hooks/useWindowSize";

import { db, getData } from "../../service/firebase";
import { getWeek } from "../../utils";
import { WeekNav } from "../../Components/Table/WeekNav";

export {
  Section,
  Table,
  MobileTable,
  useWindowSize,
  useEffect,
  useState,
  db,
  getData,
  getWeek,
  WeekNav,
};
