var App = {
    launch: function () {
        App.calculateDegrees()
    },
    calculateDegrees: function () {
    //var x1 = document.getElementById("x1-value").value;
    var x1=$("#x1-value").val();
    //var y1 = document.getElementById("y1-value").value;
    var y1=$("#y1-value").val();
    //var x2 = document.getElementById("x2-value").value;
    var x2=$("#x2-value").val();
    //var y2 = document.getElementById("y2-value").value;
    var y2=$("#y2-value").val();
    var result=Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
    //var x=$("#myDIV").html;
    var x = document.getElementById("myDIV");
       if (x.style.display === "none") {
           x.style.display = "block";
       } else {
           x.style.display = "none";
       }
    var display=document.getElementById("display")
    display.innerHTML=parseFloat(result);
    return false;
    },


    calculateValue: function(v1,a1,v2,a2){
        if(v1==NaN||a2==NaN||v1==NaN||a2==NaN){
            throw Error('The given argument is not a number');
        }
        else if(typeof v1 !== 'number' || typeof a1 !== 'number' ||typeof v2 !== 'number' || typeof a2 !== 'number'  ){
            throw Error('The given argument is not a number');
        }
        else{
        return Math.atan2(a2 - a1, v2 - v1) * 180 / Math.PI;
    }
}
};