import React, { useCallback } from "react";
import { useAccess } from "../../context/AccessContext";
import { useModal } from "../../hooks/useModal";
import { getCollection } from "../../service/firebase";
import { formatWeekData } from "../../service/utils";
import {
  Section,
  Table,
  useEffect,
  useState,
  getData,
  getWeek,
  WeekNav,
} from "./index";

import { Modal } from "../../Components/Modal/Modal";
// import { prepareTableData } from "../../service/api";
import { ModalTableRow } from "../../Components/Modal/ModalTableRow";
import { Shifts } from "../../Components/Shifts/Shifts";

export function Schedule() {
  const [tableData, setTableData] = useState();
  const [isShowing, toggle] = useModal();
  const [editableRow, setEditableRow] = useState(null);

  // const handleRowEdit = useCallback((rowData) => {
  //   setEditableRow(rowData);
  //   toggle();
  // });

  return (
    <Section title="Schedule">
      {/* <WeekNav week={week} setWeek={setWeek} getWeek={getWeek} /> */}
      {/* {tableData && (
        <Table columns={thead} data={fakeData} onRowClick={handleRowEdit} />
      )}
      {isShowing && editableRow && (
        <Modal onClose={toggle}>
          <ModalTableRow data={editableRow} />
        </Modal>
      )} */}
      {/* <Schedule /> */}
      <Shifts />
    </Section>
  );
}
