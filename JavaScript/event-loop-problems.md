## 1 What is the output
```js
setTimeout(() => console.log(1))
Promise.resolve().then(() => console.log(2));
Promise.resolve().then(() => setTimeout(() => console.log(3)));
new Promise(() => console.log(4));
setTimeout(() => console.log(5));
```

<details>
  <summary>Click here to expand</summary>
  
  This content is hidden until you click the text above!
  
</details>

<details>
  <summary>🔍 Click to reveal the secret list</summary>

  ### You found it!
  Here is some formatted content:
  * **Bold item**
  * _Italicized item_
  * `Inline code`

</details>
