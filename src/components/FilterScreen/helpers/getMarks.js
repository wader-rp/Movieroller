export const getMarks = (years) => {
  const marks = {};

  years.forEach((year, index) => {
    marks[year] = {
      style: {
        color: "#685454",
        fontFamily: "Orbitron",
        letterSpacing: 10,
        fontSize: 15,
        marginTop: index === 0 ? "10px" : "-40px",
      },
      label: <strong>{year}</strong>,
    };
  });

  return marks;
};
