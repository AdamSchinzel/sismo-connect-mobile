import moment from "moment";

export const formatDate = (date: string) => {
  const dateJs = new Date(date);

  return moment(dateJs).format("DD. MM. YYYY");
};
