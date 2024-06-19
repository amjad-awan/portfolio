const DateFormatter = ( isoDateString :any) => {
  const date = new Date(isoDateString);

  const options :{} = { day: '2-digit', month: 'long', year: 'numeric' };

  const formattedDate = date.toLocaleDateString('en-GB', options);

  return formattedDate
};



export default DateFormatter;
