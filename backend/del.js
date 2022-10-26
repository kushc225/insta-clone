import { format } from "timeago.js";
new Date().getFullYear();
new Date().getMonth() + 1;
new Date().getDate();
// console.log(dayjs().second());
// console.log("2022-10-01T05:48:42.960+00:00" - "2022-09-13T17:18:42.213Z");
// console.log(format("2022-10-01T05:48:42.960+00:00"));
// let uploadTime = date.getHours()

var date1 = new Date("01/10/2022");
var date2 = new Date("01/10/2022");
let hour = new Date().getHours();
let min = new Date().getMinutes();
let sec = new Date().getSeconds();
// To calculate the time difference of two dates
hour = 2;
var Difference_In_Time = date2.getTime() - date1.getTime();
const dateOrg = {
  1: "01",
  2: "02",
  3: "03",
  4: "04",
  5: "05",
  6: "06",
  7: "07",
  8: "08",
  8: "08",
  9: "09",
};
for (let item in dateOrg) {
  console.log(item, dateOrg[item]);
  if (item == hour) {
    hour = dateOrg[item];
  }
}
console.log(hour);
// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
// console.log(Difference_In_Days);
