# Event-Management

## [ Live Link](https://event-management-assignm-e9c86.web.app/)

Click here for the Live repo: [https://event-management-assignm-e9c86.web.app/](https://event-management-assignm-e9c86.web.app/)

<div align="center">
  <h1>MCQ TEST</h1>
</div>


###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer: </b></summary>

<p>

#### Answer: A: `{}..

<i>An empty object equal to grating is created. And console.log will output empty object.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer: </b></summary>
<p>

#### Answer: B: `TypeError`.

<i>It will throw a type error because a number and a string cannot be concatenated</i>

</p>
</details>


###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `['🍝', '🍫', '🥑', '🍔']`....

<i>প্রথমে food নামে একটি array নেয়া হয় , পরবর্তীতে info দিয়ে একটি Object তৈরি করে favoriteFood দিয়ে array ১ম ইনডেক্স কে ধরা হয়। এবং পরিবর্তীতে object (favoriteFood) এর মান সেট করার ফলে B: `['🍝', '🍫', '🥑', '🍔']` এটি তৈরি হয়। </i>

</p>
</details>


###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<i>Write your explanation here</i>

</p>
</details>


###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>

</p>
</details>