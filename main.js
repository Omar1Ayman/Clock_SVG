let w = window.clock.style.width.toString().replace("px","");

addToSvg('clock' , 'circle' , [ ['cx',w/2] , ['cy',w/2] , ['r' , w/2-5],['style','fill:white;stroke:black;stroke-width:10;']])
addToSvg('clock' , 'circle' , [ ['cx',w/2] , ['cy',w/2] , ['r' , 6],['style','fill:white;stroke:black;stroke-width:1;']])
addToSvg('clock' , 'circle' , [ ['cx',w/2] , ['cy',w/2] , ['r' , 3],['style','stroke:black;stroke-width:1;']])


for(let i=1;i<=12;i++){

        addToSvg('clock' , 'line' , 
        [ ['x1',w/2],['y1',w/27] ,['x2',w/2],['y2',w/8] , 
        ['transform','rotate('+(i*360/12)+' '+w/2+' '+w/2+ ') '],
        ['style','stroke:black;stroke-width:3;'],
       
    ] )
}

for(let i=1;i<=200;i++){

        addToSvg('clock' , 'line' , 
        [ ['x1',w/2-1],['y1',w/20] ,['x2',w/2],['y2',w/10] , 
        ['transform','rotate('+i*3+' '+w/2+' '+w/2+ ') '],
        ['style','stroke:black;stroke-width:.5;'],
       
    ] )
}
addToSvg('clock' , 'line' , 
[ 
    ['id','pin_h'] , ['x1',w/2] , ['y1' , w/2],['x2',w/2],['y2',w/4],
    ['transform','rotate(0 '+w/2+' '+w/2+ ') '],
    ['style','stroke:black;stroke-width:3;'],
])

addToSvg('clock' , 'line' , 
[ 
    ['id','pin_m'] , ['x1',w/2] , ['y1' , w/2],['x2',w/2],['y2',w/5],
    ['transform','rotate(30 '+w/2+' '+w/2+ ') '],
    ['style','stroke:black;stroke-width:3;'],
])

addToSvg('clock' , 'line' , 
[ 
    ['id','pin_s'] , ['x1',w/2] , ['y1' , w/2],['x2',w/2],['y2',w/7],
    ['transform','rotate(60 '+w/2+' '+w/2+ ') '],
    ['style','stroke:black;stroke-width:2;'],
])




function addToSvg(mainSvgId , elSvg , attrbs)
{
    let el = document.createElementNS('http://www.w3.org/2000/svg' , elSvg);
    for(let i=0;i<attrbs.length;i++){
        el.setAttribute(attrbs[i][0] ,attrbs[i][1])
    }

    document.querySelector('#'+mainSvgId).appendChild(el);
}

function setTime(){
    let now = new Date(),
        h = now.getHours(),
        m = now.getMinutes(),
        s = now.getSeconds();

    document.getElementById('pin_h').setAttribute(
        'transform' ,'rotate('+(h+m/60)*360/12+' '+w/2+' '+w/2+')'
    );

    document.getElementById('pin_m').setAttribute(
        'transform' ,'rotate('+(m+s/60)/60*360+' '+w/2+' '+w/2+')'
    );

    document.getElementById('pin_s').setAttribute(
        'transform' ,'rotate('+(s/60)*360+' '+w/2+' '+w/2+')'
    );
    setTimeout(setTime , 1000)

}