var minVal = 1000;
var maxVal = 10000;
var table;
var objArr;


var prisonerName = [];
var age = [];
var state = [];
var sex = [];
var race = [];
var method = [];

var posX = 100;
var posY = 700;

var yearsToggle = 0;
var yearsArray = [1997,1978,1979,1980,1981,9182,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015];
var stateArray = ["TX", "OK", "VA", "FL", "MI", "GA", "AL", "OH", "NC", "SC", "AZ", "LA", "AR", "MS", "IN", "DE", "CA","IL","NV","UT","TN","MD","WA","NE","MT","PA","KY","ID","SD","OR","CT","NM","CO","WY"];

function preload() {
  table = loadTable("execution_database.csv", "csv", "header");
}


function setup() {
  createCanvas(3000, 2000);

  ////print(table.getRowCount() + " total rows in table");
  // print(table.getColumnCount() + " total columns in table");

  background("black");

  fill(255);
  textSize(15);
  textFont("Helvetica");
  //text("State", posX, posY);

  noStroke();
  fill(255);
  rect(40, 1210, 2300, 5);


  // count the rows in our table
  var count = table.getRowCount();
  // parse the data returned by loadStrings()
  var rowHeight = 10;
  // loop through all rows to determine global minumum and maximum
  for (var row = 0; row < count; row++) {
    // loop through all the columns
    for (var col = 0; col < 10; col++) {
      var val = table.getString(row, col);
      // display the text on the canvas
      val = parseFloat(val);
      if (minVal > val)
        minVal = val;
      if (maxVal < val)
        maxVal = val;
    }
  }
  
  
  var data = table.getArray();
  
  objArr = data.reduce(function(prev,curr,i,arr){
    prev.push({
      gender: curr[3],
      year: curr[0],
      state: curr[6],
      method: curr[8]
    })
    return prev;
  },[])
  
  objByStates = stateArray.reduce(function(prev,cur,i,arr){
    prev[cur] = objArr.filter(function(el){
      return el.state === cur;
    })
    return prev;
  },{})
  

    var myDate = table.getColumn(0);
    prisonerName = table.getColumn(1);
    age = table.getColumn(2);
    sex = table.getColumn(3);
    race = table.getColumn(4);
    state = table.getColumn(6);
    method = table.getColumn(8);
    
    //print('length');
    //print(prisonerName.length);


  // // for each prisoner
  var counter = 0;
  var currentYear = 0;
fill(255,255,255,100);
stroke(255,255,255,100);
Array.prototype.map.call(yearsArray,function(currY,indY,hi){
  stateArray.map(function(el,i){
    objByStates[el].filter(function(obj,indo){return obj.year==currY}).map(function(ele,ind){
      ellipse(50+(i*300)+(ind*10),windowHeight-(indY*20+20),10,10);
      ele.xpoint = 50+(i*300)+(ind*10);
      ele.ypoint = windowHeight-(indY*20+20);
    })
  })
})

  // for(var i = 0; i < prisonerName.length; i++) {
  //   if (currentYear != myDate[i]) {
  //     counter = 0;
  //     text(myDate[i], counter, v+16);
  //   }
    
  //   currentYear = myDate[i];
  //   counter += 15;
    
  //   var v = map(myDate[i], 2015, 1977, 30, 900);
    
    // // print(myDate[i]);
    // if (state[i] == 'TX') {
    //   fill('red');
    //   console.log(state[i]);
    //   // ellipse(counter + 30, v, 12, 12);
    // } else if (state[i] == "AL") {
    //   fill('blue');
    // } else if (state[i] == "AL"){
    //   fill()
    // }
    // else {
    //   fill('white');
    // }
    // ellipse(counter + 30, v, 12, 12);
    // noStroke();
    
  // }

} // setup

function mouseMoved() {
   for(var i = 0; i < objArr.length; i++){
 //    var d = int(dist(mouseX, mouseY, this.xpoint, this.ypoint));
 // if  (d < 5) {
    if(mouseX - objArr[i].xpoint < 10) {
      text(this.state,50,50);
    }
 // }
    }
   
  
}


function draw() {

} // draw