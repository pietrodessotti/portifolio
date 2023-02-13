/**
 * @param param0 added one initial date with year, month and day.
 * @param param1 added one final date with year, month and day (optional).
 * @param param2 use roundYears when want to round a date (optional).
 * @returns
 *
 * @export
 * @function
 * @name calculateDifferenceBetweenDates
 *
 * @description
 * Responsible for calculate the difference between dates
 * and formatted as prefer.
 */
export const calculateDifferenceBetweenDates = (
  initialDate: { year: number; month: number; day: number },
  roundYears?: boolean,
  finalDate?: { year: number; month: number; day: number }
) => {
  // One day Time in ms (milliseconds)
  var oneDay = 1000 * 60 * 60 * 24;

  var formatInitialDate = new Date(
    initialDate.year,
    initialDate.month - 1,
    initialDate.day
  );
  var formatFinalDate = finalDate
    ? new Date(finalDate.year, finalDate.month, finalDate.day)
    : new Date();

  // To Calculate the result in milliseconds and then converting into days
  var Result =
    Math.round(formatFinalDate.getTime() - formatInitialDate.getTime()) /
    oneDay;

  const calculateMonth = Result > 30 ? Result / 30 : 0;
  const calculateYear =
    calculateMonth && calculateMonth > 12 ? calculateMonth / 12 : 0;

  const floorYear = Math.floor(calculateYear);
  const floorMonth = Math.floor(calculateMonth);
  const separateDecimalNumber = calculateYear.toFixed(1).toString().split('.');
  const roundYear =
    separateDecimalNumber.length < 5
      ? Math.round(calculateYear + 1)
      : Math.round(calculateYear);

  const restMonths = Math.floor(floorMonth - floorYear * 12);

  let result = '';

  if (roundYears) return (result += `${roundYear} Anos`);

  if (floorYear) {
    result += floorYear + (floorYear === 1 ? ' Ano' : ' Anos');
  }

  if (restMonths) {
    result +=
      (floorYear ? ' e ' : '') +
      restMonths +
      (restMonths === 1 ? ' Mês' : ' Meses');
  }

  return result;
};
