export const EmployeeShift = ({ date }) => {
    const properDate = new Date(date);

    const day = properDate.getDay();
    const month = properDate.toLocaleString("en-US", { month: "short"});
    const dayName = properDate.toLocaleDateString("en-US", { weekday: "long"});
  
    return (
      <>
        <h2>{`${day} ${month}`}</h2>
        <p>{dayName}</p>
      </>
    );
  };