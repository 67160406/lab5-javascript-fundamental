# Lab 5: JavaScript Fundamental

เอกสารนี้จัดทำขึ้นเพื่ออธิบายการทำงานของโค้ด JavaScript ในแต่ละไฟล์  
พร้อมแสดงผลลัพธ์ที่ได้ และอธิบายว่าโค้ดทำงานอย่างไรจนได้ผลลัพธ์นั้น

---

## 2.1 ไฟล์ 01-variables.js

### 6. Challenge: Create a Person Object

**โค้ด :**

```js
console.log("\n=== Challenge: Person Object ===");
const student = {
  firstName: "Alice",
  lastName: "Smith",
  age: 20,
  gpa: 3.8,
  courses: ["HTML", "CSS", "JavaScript"],
  isActive: true,

  // Method (function in object)
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  getInfo: function () {
    return `${this.getFullName()}, Age: ${this.age}, GPA: ${this.gpa}`;
  },
};
console.log("Student object:");
console.log(student);
console.log("Full name:", student.getFullName());
console.log("Info:", student.getInfo());
console.log("Courses:", student.courses.join(", "));
```

**ผลลัพธ์ :**

```
=== Challenge: Person Object ===
Student object:
{
firstName: 'Alice',
lastName: 'Smith',
age: 20,
gpa: 3.8,
courses: [ 'HTML', 'CSS', 'JavaScript' ],
isActive: true,
getFullName: [Function: getFullName],
getInfo: [Function: getInfo]
}
Full name: Alice Smith
Info: Alice Smith, Age: 20, GPA: 3.8
Courses: HTML, CSS, JavaScript
```

**อธิบายการทำงาน :**

- สร้าง Object ชื่อ student เพื่อเก็บข้อมูลนักศึกษา โดยประกอบด้วย Properties หลายประเภท
  - firstName, lastName เป็น String
  - age, gpa เป็น Number
  - courses เป็น Array ของ String
  - isActive เป็น Boolean
- Method getFullName()
  เป็นฟังก์ชันภายใน Object ใช้ this เพื่ออ้างถึงข้อมูลภายใน Object เดียวกัน คืนค่าชื่อเต็มโดยใช้ Template Literal
- Method getInfo()
  เรียกใช้ this.getFullName() เพื่อนำชื่อเต็มมาใช้ร่วมกับอายุและเกรดเฉลี่ย
- courses.join(", ")
  แปลง Array ของรายวิชาให้เป็นข้อความเดียว โดยคั่นด้วยเครื่องหมายจุลภาค

---

## 2.2 ไฟล์ 02-functions.js

### 8. Returning Objects

**โค้ด :**

```js
function createUser(firstName, lastName, age) {
  return {
    firstName, // shorthand for firstName: firstName
    lastName,
    age,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
    getFullName() {
      // shorthand for getFullName: function() {}
      return `${this.firstName} ${this.lastName}`;
    },
    getAge() {
      return this.age;
    },
  };
}
console.log("\nReturning Objects:");
const newUser = createUser("John", "Doe", 30);
console.log(newUser);
console.log("Email:", newUser.email);
console.log("Full name:", newUser.getFullName());
```

**ผลลัพธ์ :**

```
Returning Objects:
{
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  email: 'john.doe@example.com',
  getFullName: [Function: getFullName],
  getAge: [Function: getAge]
}
Email: john.doe@example.com
Full name: John Doe
```

**อธิบายการทำงาน :**

- ฟังก์ชัน createUser() ทำหน้าที่สร้างและคืนค่า Object ผู้ใช้ใหม่
- ใช้ Property Shorthand ในการกำหนดค่า Property เมื่อชื่อ Variable และ Property เหมือนกัน
- Property email ถูกสร้างจากชื่อและนามสกุล โดยแปลงเป็นตัวพิมพ์เล็กด้วย toLowerCase()
- ใช้ Method Shorthand ในการสร้าง Method ภายใน Object
- ฟังก์ชันคืนค่า Object ที่มีทั้งข้อมูล (Properties) และพฤติกรรม (Methods)

### 9. Function as Parameter (Callback)

**โค้ด :**

```js
function processArray(arr, callback) {
  const result = [];
  for (const item of arr) {
    result.push(callback(item));
  }
  return result;
}
const numbers = [1, 2, 3, 4, 5];
const doubled = processArray(numbers, (x) => x * 2);
const squared = processArray(numbers, (x) => x * x);

console.log("\nCallback Function:");
console.log("Original:", numbers);
console.log("Doubled:", doubled);
console.log("Squared:", squared);
```

**ผลลัพธ์ :**

```
Callback Function:
Original: [ 1, 2, 3, 4, 5 ]
Doubled: [ 2, 4, 6, 8, 10 ]
Squared: [ 1, 4, 9, 16, 25 ]
```

**อธิบายการทำงาน :**

- ฟังก์ชัน processArray() รับค่า Array และ Callback Function เป็นพารามิเตอร์
- ใช้ for...of วนลูปข้อมูลแต่ละตัวใน Array
- เรียก Callback Function กับข้อมูลแต่ละตัว แล้วเก็บผลลัพธ์ลงใน Array ใหม่
- Arrow Function ถูกส่งเข้าไปเป็น Callback เพื่อกำหนดวิธีประมวลผลข้อมูล
  - (x) => x \* 2 ใช้คูณค่า
  - (x) => x \* x ใช้ยกกำลังสอง
- ฟังก์ชันคืนค่า Array ใหม่โดยไม่แก้ไขข้อมูลต้นฉบับ

---

## 2.3 ไฟล์ 03-control-flow.js

### 5. Short-Circuit Evaluation

**โค้ด :**

```js
console.log("\nShort-Circuit Evaluation:");

const user = { name: "John", age: 25 };
const admin = null;

// OR: use default value
const userName = admin?.name || user.name || "Anonymous";
console.log("User name:", userName);

// ?. คือการใช้ Optional Chaining - เป็นวิธีที่ปลอดภัยในการเข้าถึง properties ของ object ที่อาจเป็น null หรือ undefined
// admin?.name ก็คือ ถ้า admin มีค่า ให้เข้าถึง .name ไม่เช่นนั้นให้คืนค่า undefined
// 1. admin?.name
// - admin คือ null ❌
// - ไม่ error, ส่งคืน undefined
// 2. undefined || user.name
// - user.name คือ "John" ✅
// - ใช้ค่านี้ → "John"
// 3. ผลลัพธ์: "John"

// AND: check before accessing
const userProfile = user && user.profile;
console.log("User profile:", userProfile); // undefined
```

**ผลลัพธ์ :**

```
Short-Circuit Evaluation:
User name: John
User profile: undefined
```

**อธิบายการทำงาน :**

- ใช้ Optional Chaining (?.) เพื่อป้องกัน Error เมื่อตัวแปรเป็น null หรือ undefined
- ใช้ OR Short-Circuit (||) เพื่อเลือกค่าแรกที่เป็น truthy
  - ถ้า admin?.name ไม่มีค่า จะข้ามไปใช้ user.name
- ใช้ AND Short-Circuit (&&) เพื่อตรวจสอบก่อนเข้าถึง Property
  - หาก user เป็น truthy จึงจะตรวจสอบ user.profile
- หลักการ:
- || คืนค่าแรกที่เป็น truthy
- && คืนค่าแรกที่เป็น falsy หรือค่าท้ายสุด

### 7. Form Validation

**โค้ด :**

```js
function validateRegistration(formData) {
  // Create validation result object
  const errors = [];

  // Validate name
  if (!formData.name || formData.name.trim() === "") {
    errors.push("Name is required");
  } else if (formData.name.length < 3) {
    errors.push("Name must be at least 3 characters");
  }

  // Validate email
  if (!formData.email || formData.email.indexOf("@") === -1) {
    errors.push("Valid email is required");
  }

  // Validate age
  if (!formData.age || formData.age < 18) {
    errors.push("Must be 18 or older");
  }

  // Validate password
  if (!formData.password || formData.password.length < 6) {
    errors.push("Password must be at least 6 characters");
  }

  // Check if agree to terms
  if (!formData.agreeToTerms) {
    errors.push("Must agree to terms");
  }
  return {
    isValid: errors.length === 0,
    errors: errors,
  };
}

console.log("\nForm Validation:");

const validUser = {
  name: "John Doe",
  email: "john@example.com",
  age: 25,
  password: "securepass123",
  agreeToTerms: true,
};

const invalidUser = {
  name: "Jo",
  email: "invalidemail",
  age: 15,
  password: "pass",
  agreeToTerms: false,
};

console.log("Valid user:", validateRegistration(validUser));
console.log("Invalid user:", validateRegistration(invalidUser));
```

**ผลลัพธ์ :**

```
Form Validation:
Valid user: { isValid: true, errors: [] }
Invalid user: {
  isValid: false,
  errors: [
    'Name must be at least 3 characters',
    'Valid email is required',
    'Must be 18 or older',
    'Password must be at least 6 characters',
    'Must agree to terms'
  ]
}
```

**อธิบายการทำงาน :**

- สร้าง Array errors เพื่อเก็บข้อความแสดงข้อผิดพลาด
- ตรวจสอบข้อมูลแต่ละ Field ตามเงื่อนไขที่กำหนด
  - name ต้องมีค่าและยาวอย่างน้อย 3 ตัวอักษร
  - email ต้องมีเครื่องหมาย @
  - age ต้องมีค่าและอายุไม่น้อยกว่า 18 ปี
  - password ต้องยาวอย่างน้อย 6 ตัวอักษร
  - agreeToTerms ต้องเป็น true
- หากไม่ผ่านเงื่อนไข จะเพิ่มข้อความ Error ลงใน Array
- ฟังก์ชันคืนค่า Object ที่ประกอบด้วย
  - isValid ระบุว่าข้อมูลถูกต้องหรือไม่
  - errors แสดงรายการข้อผิดพลาดทั้งหมด

---

## 2.4 ไฟล์ 04-loops.js

### 9. Chaining methods

**โค้ด :**

```js
console.log("\nMethod chaining:");

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter even > map to string > join
const evenStrings = data
  .filter((n) => n % 2 === 0) // [2, 4, 6, 8, 10]
  .map((n) => `${n}²=${n * n}`) // ["2²=4", "4²=16", ...]
  .join(", "); // "2²=4, 4²=16, ..."

console.log("Even numbers squared:", evenStrings);

// Calculate average with reduce and length
const numbers2 = [10, 20, 30, 40, 50];
const average = numbers2.reduce((sum, n) => sum + n, 0) / numbers2.length;
console.log("Average:", average);
```

**ผลลัพธ์ :**

```
Method chaining:
Even numbers squared: 2²=4, 4²=16, 6²=36, 8²=64, 10²=100
Average: 30
```

**อธิบายการทำงาน :**

- Method Chaining คือการเรียกใช้หลาย Method ต่อเนื่องกันในบรรทัดเดียว โดยผลลัพธ์จาก Method ก่อนหน้าจะถูกส่งให้ Method ถัดไป
- .filter()
  กรองเฉพาะเลขคู่จาก Array
  [1–10] → [2, 4, 6, 8, 10]
- .map()
  แปลงตัวเลขแต่ละตัวเป็น String พร้อมแสดงค่ากำลังสอง
  [2,4,6,8,10] → ["2²=4", "4²=16", …]
- .join(", ")
  รวม Array ของ String ให้เป็นข้อความเดียว โดยคั่นด้วยเครื่องหมายจุลภาค
- .reduce()
  รวมค่าทั้งหมดใน Array numbers2 โดยเริ่มต้นจาก 0
  10+20+30+40+50 = 150
- หารด้วย numbers2.length (5)
  ได้ค่าเฉลี่ยเท่ากับ 30

### 10. Challenge: Student Grades

**โค้ด :**

```js
const students = [
  { name: "Alice", score: 95 },
  { name: "Bob", score: 75 },
  { name: "Charlie", score: 85 },
  { name: "Diana", score: 92 },
  { name: "Eve", score: 88 },
];

console.log("\nChallenge: Student Analysis");
console.log("Students:", students);

// 1. Get all names
const names = students.map((s) => s.name);
console.log("Names:", names.join(", "));

// 2. Filter high scorers (>= 85)
const highScorers = students.filter((s) => s.score >= 85);
console.log(
  "High scorers:",
  highScorers.map((s) => `${s.name} (${s.score})`).join(", ")
);

// 3. Calculate class average
const classAverage =
  students.reduce((sum, s) => sum + s.score, 0) / students.length;
console.log("Class average:", classAverage.toFixed(2));

// 4. Find top scorer
const topScorer = students.reduce((top, s) => (s.score > top.score ? s : top));
console.log("Top scorer:", `${topScorer.name} (${topScorer.score})`);

// 5. Create summary
const summary = students
  .map((s) => ({
    ...s,
    grade: s.score >= 90 ? "A" : s.score >= 80 ? "B" : "C",
  }))
  .sort((a, b) => b.score - a.score);
console.log("Summary (sorted):");
summary.forEach((s) => console.log(` ${s.name}: ${s.score} (${s.grade})`));
```

**ผลลัพธ์ :**

```
Challenge: Student Analysis
Students: [
  { name: 'Alice', score: 95 },
  { name: 'Bob', score: 75 },
  { name: 'Charlie', score: 85 },
  { name: 'Diana', score: 92 },
  { name: 'Eve', score: 88 }
]
Names: Alice, Bob, Charlie, Diana, Eve
High scorers: Alice (95), Charlie (85), Diana (92), Eve (88)
Class average: 87.00
Top scorer: Alice (95)
Summary (sorted):
 Alice: 95 (A)
 Diana: 92 (A)
 Eve: 88 (B)
 Charlie: 85 (B)
 Bob: 75 (C)
```

**อธิบายการทำงาน :**

- Get all names
  ใช้ .map() ดึงเฉพาะชื่อจาก Array of Objects
  ได้ Array ของชื่อทั้งหมด
- Filter high scorers
  ใช้ .filter() เลือกนักเรียนที่มีคะแนน ≥ 85
  แล้วใช้ .map() แปลงเป็นข้อความแสดงชื่อและคะแนน
- Calculate class average
  ใช้ .reduce() รวมคะแนนทั้งหมด (435)
  หารด้วยจำนวนนักเรียน (5) → ค่าเฉลี่ย = 87.00
- Find top scorer
  ใช้ .reduce() เปรียบเทียบคะแนน
  เลือกนักเรียนที่มีคะแนนสูงสุด → Alice (95)
- Create summary
  - ใช้ .map() เพิ่ม property grade ตามช่วงคะแนน
  - ใช้ Spread Operator (...s) คัดลอกข้อมูลเดิม
  - ใช้ .sort() เรียงคะแนนจากมากไปน้อย
  - ใช้ .forEach() แสดงผลนักเรียนแต่ละคน

---

## 2.5 ไฟล์ 05-integration.js

### Activity 5: Integration - Quiz Application

**โค้ด :**

```js
console.log("🎯 === QUIZ APPLICATION === 🎯\n");

// Quiz data
const quizzes = [
  {
    question: "What is 5 + 3?",
    options: ["8", "7", "6", "9"],
    correctAnswer: 0, // Index of correct option
  },
  {
    question: "What is the capital of Thailand?",
    options: ["Phuket", "Bangkok", "Chiang Mai", "Pattaya"],
    correctAnswer: 1,
  },
  {
    question: "What is the largest planet?",
    options: ["Mars", "Saturn", "Jupiter", "Neptune"],
    correctAnswer: 2,
  },
  {
    question: "What is 2^8?",
    options: ["128", "256", "64", "512"],
    correctAnswer: 1,
  },
  {
    question: "Which is NOT a JavaScript data type?",
    options: ["string", "class", "symbol", "boolean"],
    correctAnswer: 1,
  },
];

// Quiz results
let results = [];

// Process each quiz
quizzes.forEach((quiz, index) => {
  const userAnswer = Math.floor(Math.random() * 4); // จำลองการทำ quiz
  const isCorrect = userAnswer === quiz.correctAnswer;
  results.push({
    questionNum: index + 1,
    question: quiz.question,
    userAnswer: quiz.options[userAnswer],
    correctAnswer: quiz.options[quiz.correctAnswer],
    isCorrect: isCorrect,
  });
});

// Display results
console.log("QUIZ RESULTS:");
console.log("─".repeat(60));

results.forEach((result) => {
  const status = result.isCorrect ? "✅ CORRECT" : "❌ WRONG";
  console.log(`Q${result.questionNum}: ${result.question}`);
  console.log(` Your answer: ${result.userAnswer}`);
  if (!result.isCorrect) {
    console.log(` Correct answer: ${result.correctAnswer}`);
  }
  console.log(` ${status}`);
  console.log();
});

// Calculate score
const correctCount = results.filter((r) => r.isCorrect).length;
const score = (correctCount / results.length) * 100;

console.log("─".repeat(60));
console.log(
  `FINAL SCORE: ${correctCount}/${results.length} (${score.toFixed(1)}%)`
);

// Grade assignment
let grade;
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}

console.log(`GRADE: ${grade}`);

// Feedback
console.log("\nFEEDBACK:");
if (score === 100) {
  console.log("🌟 Perfect score! Excellent work!");
} else if (score >= 80) {
  console.log("👍 Great job! Keep practicing.");
} else if (score >= 60) {
  console.log("📚 Good effort. Review the material and try again.");
} else {
  console.log("💪 Keep practicing. You'll improve!");
}

// Statistics
console.log("\n📊 STATISTICS:");
console.log(`Total questions: ${results.length}`);
console.log(`Correct: ${correctCount}`);
console.log(`Incorrect: ${results.length - correctCount}`);
console.log(`Success rate: ${score.toFixed(1)}%`);

// Category breakdown (if applicable)
const byCorrectness = results.reduce(
  (acc, r) => {
    acc[r.isCorrect ? "correct" : "incorrect"]++;
    return acc;
  },
  { correct: 0, incorrect: 0 }
);

console.log("\nAnswer breakdown:");
console.log(` ✅ Correct: ${byCorrectness.correct}`);
console.log(` ❌ Incorrect: ${byCorrectness.incorrect}`);

console.log("\n✅ All activities completed!");
console.log("━".repeat(60));
```

**ผลลัพธ์ :**

```
🎯 === QUIZ APPLICATION === 🎯

QUIZ RESULTS:
────────────────────────────────────────────────────────────
Q1: What is 5 + 3?
 Your answer: 8
 ✅ CORRECT

Q2: What is the capital of Thailand?
 Your answer: Phuket
 Correct answer: Bangkok
 ❌ WRONG

Q3: What is the largest planet?
 Your answer: Jupiter
 ✅ CORRECT

Q4: What is 2^8?
 Your answer: 256
 ✅ CORRECT

Q5: Which is NOT a JavaScript data type?
 Your answer: string
 Correct answer: class
 ❌ WRONG

────────────────────────────────────────────────────────────
FINAL SCORE: 3/5 (60.0%)
GRADE: D

FEEDBACK:
📚 Good effort. Review the material and try again.

📊 STATISTICS:
Total questions: 5
Correct: 3
Incorrect: 2
Success rate: 60.0%

Answer breakdown:
 ✅ Correct: 3
 ❌ Incorrect: 2

✅ All activities completed!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**อธิบายการทำงาน :**

- Quiz data
  ใช้ Array of Objects เก็บคำถาม ตัวเลือก และคำตอบที่ถูกต้อง (correctAnswer เป็น index ของ Array options)
- Process quiz
  ใช้ .forEach() วนลูปแต่ละคำถาม
  ใช้ Math.floor(Math.random() \* 4) สุ่มคำตอบ 0–3 เพื่อจำลองการทำ Quiz
  ตรวจสอบว่าคำตอบถูกหรือไม่ แล้วเก็บผลลัพธ์ลงใน Array results
- Display results
  วนลูป results แสดงคำถาม คำตอบผู้ใช้
  แสดงเฉลยเฉพาะกรณีที่ตอบผิด พร้อมสถานะถูก/ผิด
- Calculate score
  ใช้ .filter() นับจำนวนข้อที่ตอบถูก
  คำนวณคะแนนเป็นเปอร์เซ็นต์ (correctCount / total) × 100
- Grade assignment
  ใช้ if-else กำหนดเกรด A–F ตามช่วงคะแนน
- Statistics & breakdown
  ใช้ .reduce() นับจำนวนข้อที่ถูกและผิด
  สร้าง Object { correct, incorrect } เพื่อแสดงสถิติ
