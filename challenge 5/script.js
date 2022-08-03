//Date to count is 25 december, return restant days for 25 december, its has to be an int example: (24) output: 1
//If the date is the same the return must be 0, or if the date is future the return must be -num
function daysToXmas(day,month,year){
    //Defining variables
    const goalDate = {
      day:25,
      month:12,
      year:2021
    } ;
    
    let daysLeft = goalDate.day - day;
    let monthsLeft = goalDate.month - month;
    let yearsLeft = goalDate.year - year;
    //Here start the magic jeje
    goalDate.day = daysLeft
    goalDate.month = monthsLeft
    goalDate.year = yearsLeft
    
    return goalDate;
  }
  
  daysToXmas(1,1,2020);