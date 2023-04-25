const objects = [
    { quantity: 2, price: 10 },
    { quantity: 3, price: 5 },
    { quantity: 1, price: 20 },
  ];


  let total = objects.reduce((sum,b)=>{
    return sum+ b.price * b.quantity
},0);
  console.log(total)