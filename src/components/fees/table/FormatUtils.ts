
export const formatCurrency = (amount: number): string => {
  return `K${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

export const formatGradeName = (grade: string): string => {
  switch (grade) {
    case "baby":
      return "Baby Class";
    case "middle":
      return "Middle Class";
    case "reception":
      return "Reception";
    case "grade1":
      return "Grade 1";
    case "grade2":
      return "Grade 2";
    case "grade3":
      return "Grade 3";
    case "grade4":
      return "Grade 4";
    case "grade5":
      return "Grade 5";
    case "grade6":
      return "Grade 6";
    case "grade7":
      return "Grade 7";
    default:
      return grade;
  }
};
