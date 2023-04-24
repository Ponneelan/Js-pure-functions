function getData(dates,range1,range2){
    data = dates.filter((val)=>{
        return (val>= range1 && val < range2);
    });
    return data;
}


const date1 = new Date(2022,3,25);
const date2 = new Date(2022,3,15);
const date3 = new Date(2022,3,5);
const date4 = new Date(2022,4,5);
const date5 = new Date(2022,4,15);
const date6 = new Date(2022,4,25);
const date7 = new Date(2022,5,5);

dates = [date1,date2,date3,date4,date5,date6,date7]

let range1 = new Date(2022,3,25);
let range2 = new Date(2022,4,26);

console.log(getData(dates,range1,range2));
