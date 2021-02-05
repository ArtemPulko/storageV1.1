

butt1.addEventListener("click", func1);
function func1()
{
   var colorDivs = document.getElementsByClassName("main");
            var r = Math.floor(Math.random() * (256)),
                r = Math.floor(Math.random() * (256)),
                g = Math.floor(Math.random() * (256)),
                b = Math.floor(Math.random() * (256)),
                color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
            colorDivs[0].style.backgroundColor = color;
}

butt2.addEventListener("click", func2);
function func2()
{
	window.location.href='NextPage.html';
}


function func3()
{

var x1 = 210, y1 = 0,x2 = 190,y2 = 270;
var d = document.getElementById('obj');
d.style.position = "absolute";







     


//y+1 = x-1
myLoop();
  function myLoop () {
    timer = setInterval(function () {

      x1 += 1;
      y1 += 1;

      x2 -= 1;
      y2 -= 1;

      

      d.style.left = x1+'px';      
      d.style.right = x2+'px';

      d.style.top = y2+'px';
      d.style.bottom = y1+'px';

if(x1 == 370){clearInterval(timer);}
      

    }, 10)

}
//y-1 = x-1
if(x1 == 370){
   move1();
     function move1() {
     setInterval(function () {

       x1 -= 1;
       y1 += 1;

        x2 += 1;
        y2 -= 1;

      

        d.style.left = x1+'px';      
        d.style.right = x2+'px';

        d.style.top = y2+'px';
        d.style.bottom = y1+'px';

     }, 10)

   }
}
// y-1 = x-1
/*move2();
  function move2() {
    setInterval(function () {

      x1 -= 1;
      y1 -= 1;

      x2 += 1;
      y2 += 1;

      

      d.style.left = x1+'px';      
      d.style.right = x2+'px';

      d.style.top = y2+'px';
      d.style.bottom = y1+'px';

    }, 10)

}*/

//y-1 = x+1
/*move3();
  function move3() {
    setInterval(function () {

      x1 += 1;
      y1 -= 1;

      x2 -= 1;
      y2 += 1;

      

      d.style.left = x1+'px';      
      d.style.right = x2+'px';

      d.style.top = y2+'px';
      d.style.bottom = y1+'px';

    }, 10)

}*/


}
