


let arr = new Array(1, 2, 3, 4);

Array.prototype.Piyush = function () {
  console.log('Hello from WEB 20');
};

 arr.Piyush()


 console.log(arr)

 let arr2 = new Array(1, 2, 3, 4, 5);

Array.prototype.bejho = function (value) {
  let index=this.length
  this[index]=value;
};

 arr2.bejho(7)
 arr2.bejho(10)

 console.log(arr2)
 
 let arr3 = new Array(1, 2, 3, 4, 5);

Array.prototype.bejho = function (value) {
  let index=this.length
  this[index]=value;
};

 arr3.bejho(7)
 arr3.bejho(10)

 console.log(arr3)

 

let arr4 = new Array(1, 2, 3,4,5,6);

Array.prototype.nikalo = function () {
 this.length--
 let popelem=this[this.length]
 delete this[this.length]
 return popelem
};

 arr4.nikalo()


 console.log(arr4)




