var a=document.getElementById("journey-div")
var b=0;
var journeys=[
    {
        year:"2002",
        month:"Feb",
        image:"https://img.icons8.com/ios-filled/1x/birth-date.png",
        title:"Born Little boy",
        desc:""
    },
    {
        year:"2017",
        month:"Feb",
        image:"https://img.icons8.com/glyph-neue/256/school-building.png",
        title:"Complete 10th standard studies",
        desc:"Arignar anna government Hr.sec School"
    },
    {
        year:"2019",
        month:"Feb",
        image:"https://img.icons8.com/glyph-neue/256/school-building.png",
        title:"Complete 12th standard studies",
        desc:"Arignar anna government Hr.sec School"
    },
    {
        year:"2019",
        month:"Feb",
        image:"https://img.icons8.com/ios-filled/256/graduation-cap.png",
        title:"join professional course (ECE)",
        desc:"VSB Engineering Collage, Karur"
    },
    {
        year:"2022",
        month:"Nov",
        image:"https://img.icons8.com/ios-filled/256/manager.png",
        title:"join as a Project Trainee",
        desc:"ZOHO Corporation chennai"
    },
    {
        year:"2023",
        month:"Feb",
        image:"https://cdn.icon-icons.com/icons2/2596/PNG/512/bye_icon_155703.png",
        title:"Say bye to Project Trainee",
        desc:"ZOHO Corporation chennai"
    },
    {
        year:"2023",
        month:"Mar",
        image:"https://cdn-icons-png.flaticon.com/128/1390/1390354.png",
        title:"Start my own project",
        desc:"Application"
    },
]

function journeyAdder(){
    if(journeys.length <= b){
        clearInterval(intervalJourney);
        return
    }
    var [year,month,image,title,desc]=Object.values(this.journeys[b++])
    let journey=journeyCreater(year,month,image,title,desc)
    function journeyCreater(year,month,image,title,desc){

    return `<div id="journey-card" class="moveTransition">
        <span>
            <p>`+year+`</p>
            <p class="description">`+month+`</p>
        </span>
        <span><img src=`+image+` alt="⊛"></span>
        <span>
            <p>`+title+`</p>
            <p class="description">`+desc+`</p>
        </span>
        </div>`
    }
    this.a.insertAdjacentHTML("afterend",journey);
}
let intervalJourney=setInterval(journeyAdder,10);

