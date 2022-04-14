const EmployeeShift = ({ date }) => {
  const properDate = new Date(date);

  return (
    <>
      <h2>{`${properDate.getDay()} ${properDate.toLocaleString("en-US", {
        month: "short",
      })}`}</h2>
      <p>{properDate.toLocaleDateString("en-US", { weekday: "long" })}</p>
    </>
  );
};

export default EmployeeShift;
