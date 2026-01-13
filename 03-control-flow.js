// ============================================
// Activity 3: Control Flow & Logic
// ============================================
console.log("=== Control Flow & Logic Practice ===\n");
// ─────────────────────────────────
// 1. if/else Statements
// ─────────────────────────────────
function checkAge(age) {
  if (age < 13) {
    return "Child";
  } else if (age < 18) {
    return "Teenager";
  } else if (age < 60) {
    return "Adult";
  } else {
    return "Senior";
  }
}
console.log("Age Classification:");
console.log("Age 5:", checkAge(5));
console.log("Age 15:", checkAge(15));
console.log("Age 25:", checkAge(25));
console.log("Age 65:", checkAge(65));
// ─────────────────────────────────
// 2. Switch Statement
// ─────────────────────────────────
function getDayName(dayNum) {
  switch (dayNum) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Unknown day";
  }
}
console.log("\nDay Names:");
for (let i = 1; i <= 8; i++) {
  console.log(`Day ${i}:`, getDayName(i));
}
// ─────────────────────────────────
// 3. Ternary Operator
// ─────────────────────────────────
const isWeekend = (day) => (day === 6 || day === 7 ? "Weekend" : "Weekday");
console.log("\nWeekday/Weekend:");
console.log("Monday (1):", isWeekend(1));
console.log("Saturday (6):", isWeekend(6));
// ─────────────────────────────────
// 4. Logical Operators (&&, ||, !)
// ─────────────────────────────────
console.log("\nLogical Operators:");
const age = 25;
const hasLicense = true;
const hasInsurance = true;
// AND (&&) - all must be true
const canDrive = age >= 18 && hasLicense && hasInsurance;
console.log("Can drive:", canDrive);
// OR (||) - at least one must be true
const isSpecial = age === 18 || age === 21 || age === 25;
console.log("Is special age:", isSpecial);
// NOT (!)
const isNotAdult = !(age >= 18);
console.log("Is not adult:", isNotAdult);
// ─────────────────────────────────
// 5. Short-Circuit Evaluation -- JavaScript หยุดประเมินค่าตรงกลางเมื่อรู้ผลลัพธ์แล ้ว
// ─────────────────────────────────
console.log("\nShort-Circuit Evaluation:");
const user = { name: "John", age: 25 };
const admin = null;
// OR: use default value
const userName = admin?.name || user.name || "Anonymous";
console.log("User name:", userName);
// ?. คือการใช ้Optional Chaining - เป็นวิธีที่ปลอดภัยในการเข ้าถึง properties ของ object ที่อาจเป็น null หรือ undefined
// admin?.name ก็คือ ถ ้า admin มีค่า ให้เข ้าถึง .name ไม่เชนนั้นให ้คืนค่า ่ undefined
// 1. admin?.name
// - admin คือ null ❌
// - ไม่ error, สงคืน ่ undefined
// 2. undefined || user.name
// - user.name คือ "John" ✅
// - ใชค่านี้ → " ้ John"
// 3. ผลลัพธ์: "John"
// AND: check before accessing
const userProfile = user && user.profile;
console.log("User profile:", userProfile); // undefined
// ─────────────────────────────────
// 6. Grading System
// ─────────────────────────────────
function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}
console.log("\nGrading System:");
const scores = [95, 85, 75, 65, 55];
scores.forEach((score) => {
  console.log(`Score ${score}: Grade ${getGrade(score)}`);
});
// ─────────────────────────────────
// 7. Form Validation
// ─────────────────────────────────
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
// ─────────────────────────────────
// 8. Challenge: Traffic Light
// ─────────────────────────────────
function getTrafficAction(color) {
  switch (color) {
    case "red":
      return "🛑🛑 STOP";
    case "yellow":
      return "🟨🟨 SLOW DOWN";
    case "green":
      return "🟢🟢 GO";
    default:
      return "❓ INVALID COLOR";
  }
}
console.log("\nChallenge: Traffic Light");
const lights = ["red", "yellow", "green", "blue"];
lights.forEach((light) => {
  console.log(`${light}: ${getTrafficAction(light)}`);
});
console.log("\n✅ Activity 3 completed!");
