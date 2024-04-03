const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];
  
  const transformedData = data.map(arr => arr.map(obj => {
    return {
      ...obj,
      age: obj.age * 2 // Example transformation: doubling the age
    };
  }));
  
  console.log(transformedData);
  // Output: [
  //   [
  //     { name: 'John', age: 50 },
  //     { name: 'Jane', age: 60 }
  //   ],
  //   [
  //     { name: 'Bob', age: 80 }
  //   ]
  // ]
   