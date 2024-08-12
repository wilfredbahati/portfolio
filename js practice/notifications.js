const notificationsCritical =document.getElementsByClassName("critical");
console.log( notificationsCritical)


/*for (let i = 0; i < notificationsCritical.length; i++){
    notificationsCritical[i].style.backgroundColor="yellow";
    notificationsCritical[i].style.border="2px solid red";
}*/

for (item of  notificationsCritical){
    item.style.backgroundColor="yellow";
    item.style.border="2px solid red"; 
}