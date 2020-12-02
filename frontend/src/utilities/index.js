export const formatDate = (p_date) => {
  const publishedDate = new Date(p_date);
  const date = publishedDate.getDate();
  const p_month = publishedDate.getMonth();
  const year = publishedDate.getFullYear();
  let month = "";

  switch (p_month) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "Febuary ";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
    default:
      break;
  }

  return `${date} ${month} ${year}`;
};
