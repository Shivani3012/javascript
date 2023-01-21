// calculating the area of circle , triangle and rectangle using switch statement

var area = 'circle';
var PI = 3.142 , l =2, b=3, r=4;
switch (area){
    case 'circle':
        console.log("the area of circle is :" + PI*r**2);
        break;
    case 'rectangle':
        console.log("the area of rectangle is :" + l*b);
        break;
    case 'triangle':
        console.log("the area of triangle is :" + (l*b)/2);
        break;
    default : 
        console.log("Enter the valid shape for calculating the area")
}