
    //  var pu=document.getElementById("d1").innerHTML="<span>:</span>";
    
    // document.getElementById("d1").innerHTML = "Time Left:- "+"<b>"+ minutes+jk + "m" + pu + seconds + "s "+"</b>";
   
    // if (distance < 0) {
    //     clearInterval(x);
    //     document.getElementById("demo").innerHTML = "EXPIRED";
    // }


window.onload=function(){
//   document.getElementById('id01').style.display='block';
// document.getElementById('subm').onclick = function() {document.getElementById('id01').style.display = "none";}
var timout=9; // in min

      var start=Date.now(),r=document.getElementById('r');
      (function f(){
      var tmn=timout*60*1e3; // convert in ms from min
      var diff=Date.now()-start,ns=(((tmn-diff)/1e3)>>0),m=(ns/60)>>0,s=ns-m*60;
  
     function pad() { if (m<100) {return m="0"+m}};  // if (m<10) {return m="00"+m}
      pad();
if (s>0) { r.innerHTML="Time Left:- "+"<b>"+m+"<span>"+":"+"</span>"+((''+s).length>1?'':'0')+s+"<b>";}
     
      if(diff>tmn){
        start = Date.now();
        outp();
        r = document.getElementById('r').innerHTML="<b>00:00</b>";
      }
      setTimeout(f,1e3);
      })();
}

