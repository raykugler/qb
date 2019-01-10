let qbs = [
    {name: 'Drew Brees', rating: 115.7},
    {name: 'Patrick Mahomes', rating: 113.8},
    {name: 'Russell Wilson', rating: 110.9},
    {name: 'Matt Ryan', rating: 108.1},
    {name: 'Philip Rivers', rating: 105.5},
    {name: 'Deshaun Watson', rating: 103.1},
    {name: 'Carson Wentz', rating: 102.2},
    {name: 'Jared Goff', rating: 101.1},
    {name: 'Ryan Fitzpatrick',  rating: 100.4},
    {name: 'Kirk Cousins',  rating: 99.7},
    {name: 'Andrew Luck',  rating: 98.7},
    {name: 'Tom Brady',  rating: 97.7},
    {name: 'Aaron Rodgers',  rating: 97.6},
    {name: 'Dak Prescott',  rating: 96.9},
    {name: 'Ben Roethlisberger',  rating: 96.5},
    {name: 'Nick Foles',  rating: 96.0},
    {name: 'Mitchell Trubisky',  rating: 95.4},
    {name: 'Cam Newton',  rating: 94.2},
    {name: 'Derek Carr',  rating: 93.9},
    {name: 'Baker Mayfield',  rating: 93.7 },
    {name: 'Ryan Tannehill',  rating: 92.7},
    {name: 'Eli Manning',  rating: 92.4},
    {name: 'Marcus Mariota',  rating: 92.3},
    {name: 'Nick Mullens',  rating: 90.8 },
    {name: 'Jameis Winston',  rating: 90.2},
    {name: 'Matthew Stafford',  rating: 89.9},
    {name: 'Andy Dalton',  rating: 89.6},
    {name: 'Brock Osweiler',  rating: 86.0},
    {name: 'Alex Smith',  rating: 85.7},
    {name: 'Lamar Jackson',  rating: 84.5},
    {name: 'Joe Flacco',  rating: 84.2},
    {name: 'Jeff Driskel',  rating: 82.2},
    {name: 'C.J Beathard',  rating: 81.8},
    {name: 'Case Keenum',  rating: 81.2},
    {name: 'Blake Bortles',  rating: 79.8},
    {name: 'Sam Darnold',  rating: 77.6},
    {name: 'Cody Kessler',  rating: 77.4},
    {name: 'Blaine Gabbert',  rating: 74.9},
    {name: 'Josh Allen',  rating: 67.9},
    {name: 'Josh Rosen',  rating: 66.7},
];
 rating = () => {
    let array = []
    let comp = parseInt(document.getElementById('complete').value);
    let attempts = parseInt(document.getElementById('attempt').value);
    let tds = parseInt(document.getElementById('touchdown').value);
    let yards = parseInt(document.getElementById('yards').value);
    let ints = parseInt(document.getElementById('int').value);
    
    let twopoint = 2.375;
    let parentTable = document.getElementById('name_grab');
    let parentTableTwo = document.getElementById('name_grab_two');
    let parentTableThree = document.getElementById('name_grab_three');
    let parentTableFour = document.getElementById('name_grab_four');

    let answer = document.getElementById('qb')
    let a = ((comp / attempts) -.3) * 5;
    let b = ((yards / attempts)- 3) * .25;  
    let c = (tds / attempts) * 20;
    let d = 2.375-((ints / attempts) * 25)
    
    if(a >= twopoint){
        a = twopoint;
    }
    if(a <= 0){
        a = 0;
    }
    if(b >= twopoint){
        b = twopoint;
    }
    if(b <= 0){
        b = 0;
    }
    if(c >= twopoint){
        c = twopoint;
    }
    if(c <= 0){
        c = 0;
    }
    if(d >= twopoint){
        d = twopoint;
    }
    if(d <= 0){
        d = 0;
    }
    let rating = ((a + b + c + d) /6 ) * 100;
    let fa = rating.toFixed(2);
     console.log(rating);
     answer.innerHTML = fa;
     while(parentTable.hasChildNodes())
     {
        parentTable.removeChild(parentTable.firstChild);
     }
     while(parentTableTwo.hasChildNodes())
     {
        parentTableTwo.removeChild(parentTableTwo.firstChild);
     }
     while(parentTableThree.hasChildNodes())
     {
        parentTableThree.removeChild(parentTableThree.firstChild);
     }
     while(parentTableFour.hasChildNodes())
     {
        parentTableFour.removeChild(parentTableFour.firstChild);
     }
     list(fa);
   

    }

 list=(fa)=>{

     let name_holder = document.getElementById('name_grab');
     let name_holder_two = document.getElementById('name_grab_two');
     let name_holder_three = document.getElementById('name_grab_three');
     let name_holder_four = document.getElementById('name_grab_four');
     let j = 0;
     for (i = 0; i < qbs.length; i++){
        let newListName = document.createElement("tr");

        let newNameTextHolder = document.createElement("td");
        let newNameText = document.createTextNode(qbs[i].name + ': ');

        let newRatingTextHolder = document.createElement("td");
        let newRatingText = document.createTextNode(qbs[i].rating);
        
        newListName.className = "qb_rows";
        newNameText.className = "qb_name";
        newRatingText.className = "qb_rating";
        newNameTextHolder.className = 'qb_text_holder';
        newRatingTextHolder.className = 'qb_rating_holder';


        newNameTextHolder.appendChild(newNameText);
        newRatingTextHolder.appendChild(newRatingText);

        newListName.appendChild(newNameTextHolder);
        newListName.appendChild(newRatingTextHolder);
     

        if(j <= 9 ){ 
            name_holder.appendChild(newListName); 
        }
        else if (j >= 10 && j <= 19){
            name_holder_two.appendChild(newListName);
        }
        else if (j >= 20 && j <= 29){
            name_holder_three.appendChild(newListName)
        }
        else {
            name_holder_four.appendChild(newListName);
        }
        j++;

     }
    //  var newDiv = document.createElement("div");
//    document.getElementById("qb_white").style.height = '50%';
// var Parent = document.getElementById(tableID);
// while(Parent.hasChildNodes())
// {
//    Parent.removeChild(Parent.firstChild);
// }
 }
 reset=()=>{
    document.getElementById('complete').value = 0;
    document.getElementById('attempt').value = 0;
    document.getElementById('touchdown').value = 0;
    document.getElementById('yards').value = 0;
    document.getElementById('int').value = 0;
    document.getElementById('qb').innerHTML = 0;
 }

 // AVERAGE 91.33!!!!! //

 //  document.getElementById("demo").innerHTML = x

// a = (comp/att -.3) * 5;
// b=(yds/att - 3) *.25;
// c= (td/att) * 20;
// d= 2.375-(int/att * 25)

// ((a + b + c + d)/6) * 100

// const euros = [29.76, 41.85, 46.5];
// const sum = euros.reduce((total, amount) => total + amount); 