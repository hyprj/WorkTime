import Section from "../../Components/UI/Section";
import Table from "../../Components/Table/Table";

const Schedule = () => {
  const tHeadData = [
    "",
    "Monday",
    "Thuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const employeesShifts = [
    {
      id: 1,
      data: [
        { day: 1, text: "14:00 - 22:00" },
        { day: 2 },
        { day: 3 },
        { day: 4 },
        { day: 5 },
        { day: 6 },
        { day: 7 },
      ],
    },
    {
      id: 2,
      data: [
        { day: 1 },
        { day: 2 },
        { day: 3 },
        { day: 4 },
        { day: 5 },
        { day: 6 },
        { day: 7, text: "07:00 - 15:00" },
      ],
    },
    {
      id: 3,
      data: [
        { day: 1 },
        { day: 2 },
        { day: 3, text: "10:00 - 18:00" },
        { day: 4 },
        { day: 5 },
        { day: 6 },
        { day: 7 },
      ],
    },
    {
      id: 4,
      data: [
        { day: 1 },
        { day: 2 },
        { day: 3, text: "10:00 - 18:00" },
        { day: 4 },
        { day: 5 },
        { day: 6 },
        { day: 7 },
      ],
    },
    {
      id: 5,
      data: [
        { day: 1 },
        { day: 2 },
        { day: 3, text: "10:00 - 18:00" },
        { day: 4 },
        { day: 5 },
        { day: 6 },
        { day: 7 },
      ],
    },
    {
      id: 6,
      data: [
        { day: 1 },
        { day: 2 },
        { day: 3, text: "10:00 - 18:00" },
        { day: 4 },
        { day: 5 },
        { day: 6 },
        { day: 7 },
      ],
    },
    {
      id: 7,
      data: [
        { day: 1 },
        { day: 2 },
        { day: 3, text: "10:00 - 18:00" },
        { day: 4 },
        { day: 5 },
        { day: 6 },
        { day: 7 },
      ],
    },
  ];

  return (
    <Section title="Schedule">
      <Table headData={tHeadData} bodyData={employeesShifts} />
    </Section>
  );
};

export default Schedule;
