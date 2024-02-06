export const getMarks = (years) => {
  const marks = {};

  years.forEach((year) => {
    marks[year] = {
      style: {
        color: "#685454",
        fontFamily: "Orbitron",
        letterSpacing: 10,
        fontSize: 18,
        marginTop: 5,
      },
      label: <strong>{year}</strong>,
    };
  });

  return marks;
};
