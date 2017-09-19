var me = {
    name: "Anil",
    country: "India"
}
function myDetails()
{
console.log(me.name)
console.log(me.country)
}
myDetails()




//// while using the return
me = {
    name: "Anil",
    country: "India"
}
function myDetails()
{
a = 5;
console.log(me.name);
console.log(me.country);
return a;
}
myDetails();
VM493:8 Anil
VM493:9 India
5