const companies= [
{name:"Google", category:"product based",start:1992,end:2004},
{name:"amozon", category:"service based",start:1993,end:2005},
{name:"paytam", category:"product based",start:1994,end:2007},
{name:"maruti suziki", category:"service based",start:1995,end:2008},
{name:"honda", category:"product based",start:1996,end:2003},
{name:"tcs", category:"service based",start:1998,end:2002},
{name:"wipro", category:"product based",start:1995,end:2001},
{name:"audicious", category:"service based ",start:1997,end:2006},

];
const ages =[33,12,20,16,5,54,21,44,61,13,45,25,64,32];
let total=0

// let fetchData= companies.forEach((company,index)=>(console.log(company.name)));

// const sb =companies.filter(mu=>mu.category==="service based")
// console.log(sb)
 

//  let sr = companies.filter(cu=>cu.category==="product based" ,)

//  console.log(sr)

// const dummy = companies.map((cm,index)=>{


//     return `${cm.name} ${cm.category} `

//    const sorted = companies.sort((c1,c2)=>(c1.start > c2.start ?1:-1));
//    console.log(sorted);

//    const ca =companies.sort((a,b)=>(a.end-b.end));
//    console.log(ca);
//        const ac = companies.sort((a,b)=>(a.start-b.start));

const sum = ages.reduce((total,nu)=>total+nu,0);
console.log(sum)





















  







