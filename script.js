

 rating = () => {
    let array = []
    let comp = parseInt(document.getElementById('complete').value);
    let attempts = parseInt(document.getElementById('attempt').value);
    let tds = parseInt(document.getElementById('touchdown').value);
    let yards = parseInt(document.getElementById('yards').value);
    let ints = parseInt(document.getElementById('int').value);
    
    let twopoint = 2.375;
   

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
    // let chart =document.getElementById("name_grab");
    let chart = document.getElementById("name_grab");
    let ax = chart.rows[0].cells[1];
        let bx = chart.rows[1].cells[1];
        let cx = chart.rows[2].cells[1];
        let dx = chart.rows[3].cells[1];
        let ex = chart.rows[4].cells[1];
        let fx = chart.rows[5].cells[1];
        let gx = chart.rows[6].cells[1];
        let hx = chart.rows[7].cells[1];
        let ix = chart.rows[8].cells[1];
        let jx = chart.rows[9].cells[1];

        let az = chart.rows[0].cells[3];
        let bz = chart.rows[1].cells[3];
        let cz = chart.rows[2].cells[3];
        let dz = chart.rows[3].cells[3];
        let ez = chart.rows[4].cells[3];
        let fz = chart.rows[5].cells[3];
        let gz = chart.rows[6].cells[3];
        let hz = chart.rows[7].cells[3];
        let iz = chart.rows[8].cells[3];
        let jz = chart.rows[9].cells[3];

        let ay = chart.rows[0].cells[5];
        let by = chart.rows[1].cells[5];
        let cy = chart.rows[2].cells[5];
        let dy = chart.rows[3].cells[5];
        let ey = chart.rows[4].cells[5];
        let fy = chart.rows[5].cells[5];
        let gy = chart.rows[6].cells[5];
        let hy = chart.rows[7].cells[5];
        let iy = chart.rows[8].cells[5];
        let jy = chart.rows[9].cells[5];

        let aw = chart.rows[0].cells[7];
        let bw = chart.rows[1].cells[7];
        let cw = chart.rows[2].cells[7];
        let dw = chart.rows[3].cells[7];
        let ew = chart.rows[4].cells[7];
        let fw = chart.rows[5].cells[7];
        let gw = chart.rows[6].cells[7];
        let hw = chart.rows[7].cells[7];
        let iw = chart.rows[8].cells[7];
        let jw = chart.rows[9].cells[7];
    
    let qbs = [ax, bx, cx, dx, ex, fx ,gx, hx,ix , jx, az, bz, cz, dz, ez, fz, gz, hz, iz, jz, ay, by,cy,dy,ey, fy, gy,hy,iy,jy, aw,bw,cw,dw,ew,fw,gw,hw,iw,jw];
    for(j= 0; j< 40; j++){
        let current = qbs[j].innerHTML;
        let grab = '';
        if(current < rating){
            qbs[j].classList.remove('green');
            qbs[j].classList.add('red');
            grab = 'less than';
        }
        else{
            qbs[j].classList.remove('red');
            qbs[j].classList.add('green');
            grab = 'greater than';
        }
        qbs[j].classList.add('red');
        console.log(j + ' : ' + current + ' is ' + grab + ' ' + rating);
        // if (fa < current){
        // qbs[j].classList.remove('green');   
        // qbs[j].classList.add('red');
        // console.log('less than ' +  current);
        // }
        // else{
        //     qbs[j].classList.remove('red');   
        //     qbs[j].classList.add('green');
        //     console.log('more than ' +  current);

        // }
    }
    //     for(p=0; p<8; p++){
    //         let selected = chart.rows[j].cells[p];

    //         if(fa > chart.rows[j].cells[p].innerHTML){
    //              selected.classList.add("green");
    //              selected.classList.remove("red");
    //         }
    //         else{
    //             selected.classList.add('red');
    //             selected.classList.remove('green');
    //         }
    //     }
    // }

    answer.innerHTML = fa;

    }

    //  var newDiv = document.createElement("div");
//    document.getElementById("qb_white").style.height = '50%';
// var Parent = document.getElementById(tableID);
// while(Parent.hasChildNodes())
// {
//    Parent.removeChild(Parent.firstChild);
// }
 
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

// let qbs = [
//     {name: 'Drew Brees', rating: 115.7, name_column: 0,name_row: 0 ,rating_column:1},
//     {name: 'Patrick Mahomes', rating: 113.8, name_column: 0,name_row:1 ,rating_column:1 },
//     {name: 'Russell Wilson', rating: 110.9, name_column: 0,name_row: 2,rating_column: 1},
//     {name: 'Matt Ryan', rating: 108.1, name_column: 0,name_row: 3,rating_column: 1},
//     {name: 'Philip Rivers', rating: 105.5, name_column: 0,name_row: 4,rating_column:1 },
//     {name: 'Deshaun Watson', rating: 103.1, name_column: 0,name_row: 5,rating_column:1 },
//     {name: 'Carson Wentz', rating: 102.2, name_column: 0,name_row: 6,rating_column: 1},
//     {name: 'Jared Goff', rating: 101.1, name_column: 0,name_row:7 ,rating_column: 1},
//     {name: 'Ryan Fitzpatrick',  rating: 100.4, name_column:0 ,name_row:8 ,rating_column: 1},
//     {name: 'Kirk Cousins',  rating: 99.7, name_column: 0,name_row: 9,rating_column: 1},

//     {name: 'Andrew Luck',  rating: 98.7, name_column: 2,name_row: 0,rating_column: 3},
//     {name: 'Tom Brady',  rating: 97.7, name_column: 2,name_row: 1,rating_column: 3},
//     {name: 'Aaron Rodgers',  rating: 97.6, name_column: 2,name_row:2 ,rating_column:3 },
//     {name: 'Dak Prescott',  rating: 96.9, name_column: 2,name_row: 3,rating_column: 3},
//     {name: 'Ben Roethlisberger',  rating: 96.5, name_column: 2,name_row: 4,rating_column: 3},
//     {name: 'Nick Foles',  rating: 96.0, name_column: 2,name_row: 5,rating_column: 3},
//     {name: 'Mitchell Trubisky',  rating: 95.4, name_column:2 ,name_row:6 ,rating_column:3 },
//     {name: 'Cam Newton',  rating: 94.2, name_column: 2,name_row: 7,rating_column: 3},
//     {name: 'Derek Carr',  rating: 93.9, name_column: 2,name_row: 8,rating_column: 3},
//     {name: 'Baker Mayfield',  rating: 93.7 , name_column: 2,name_row: 9,rating_column: 3},
    
//     {name: 'Ryan Tannehill',  rating: 92.7, name_column: 4,name_row: 0,rating_column: 5},
//     {name: 'Eli Manning',  rating: 92.4, name_column: 4,name_row: 1,rating_column: 5},
//     {name: 'Marcus Mariota',  rating: 92.3, name_column: 4,name_row:2 ,rating_column: 5},
//     {name: 'Nick Mullens',  rating: 90.8, name_column: 4,name_row: 3,rating_column: 5 },
//     {name: 'Jameis Winston',  rating: 90.2, name_column: 4,name_row:4 ,rating_column: 5},
//     {name: 'Matthew Stafford',  rating: 89.9, name_column: 4,name_row:5 ,rating_column: 5},
//     {name: 'Andy Dalton',  rating: 89.6, name_column: 4,name_row: 6,rating_column: 5},
//     {name: 'Brock Osweiler',  rating: 86.0, name_column: 4,name_row: 7,rating_column: 5},
//     {name: 'Alex Smith',  rating: 85.7, name_column: 4,name_row: 8,rating_column: 5},
//     {name: 'Lamar Jackson',  rating: 84.5, name_column: 4,name_row: 9,rating_column: 5},
    
//     {name: 'Joe Flacco',  rating: 84.2, name_column: 6,name_row: 0,rating_column: 7},
//     {name: 'Jeff Driskel',  rating: 82.2, name_column: 6,name_row:1 ,rating_column: 7},
//     {name: 'C.J Beathard',  rating: 81.8, name_column: 6,name_row: 2,rating_column: 7},
//     {name: 'Case Keenum',  rating: 81.2, name_column: 6,name_row: 3,rating_column: 7},
//     {name: 'Blake Bortles',  rating: 79.8, name_column: 6,name_row: 4,rating_column: 7},
//     {name: 'Sam Darnold',  rating: 77.6, name_column:6 ,name_row: 5,rating_column: 7},
//     {name: 'Cody Kessler',  rating: 77.4, name_column:6 ,name_row: 6,rating_column: 7},
//     {name: 'Blaine Gabbert',  rating: 74.9, name_column: 6,name_row:7 ,rating_column: 7},
//     {name: 'Josh Allen',  rating: 67.9, name_column: 6,name_row: 8,rating_column: 7},
//     {name: 'Josh Rosen',  rating: 66.7, name_column: 6,name_row: 9,rating_column: 7},
// ];