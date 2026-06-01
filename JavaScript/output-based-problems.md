## 1. What is the output? And Fix it.
```js
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 1000 ); }
```

<details>

  <summary>Output</summary>

  ### 5 5 5 5 5

</details>

<details>

  <summary>Answer</summary>

  ```js
  for(var i=0; i< 5; i++) {
    (function (a) {
      setTimeout(() => {
        console.log(a)
      }, a * 1000)
    })(i)
  }
  ```

  ```js
  for(var i=0; i< 5; i++) {
      setTimeout(function (a){
        console.log(a)
      }.bind(null, i), i * 1000)  
  }
  ```

  ```js
  for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), i * 1000);
  }
  ```

</details>

---

## 2. What is the output?
```js
let obj1 = {
  name: 'Pratik',
  address: { pin: '123' }
}
let obj2 = {...obj1};
obj2.name = 'Ramesh';
obj2.address.pin = '345';
console.log(obj1);
```

<details>
  <summary>Answer</summary>

  ### 
  let obj1 = {
    name: 'Pratik',
    address: { pin: '345' }
  }
</details>

<details>
  <summary>Explaination</summary>

  Shallow Copy using Spread Operator
  ```js
  let obj2 = { ...obj1 };
  ```
  This creates a shallow copy:
    - name → copied by value
    - address → copied by reference
  
  Both obj1.address and obj2.address point to the same object in memory.

</details>

---
