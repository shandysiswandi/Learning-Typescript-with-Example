/*! *****************************************************************************
Copyright (c) Learning Typescript with Example shandysiswandi. All rights reserved. MIT License.
***************************************************************************** */

/**
 * Sebenarnya bisa menggunakan petik satu ('') atau petik dua ("")
 * di antara tanda petik kita bisa isi nilai string didalamnya.
 *
 * cara lain adalah dengan menggunakan petik satu terbalik atau istilah umumnya backtick (``)
 * cara ini biasa digunakan untuk menggabungkan beberapa variable atau satu variable.
 */

// with let
let color: string = "blue";
color = "red";

let name: string = "Shandy Siswandi";

//with const
const job: string = "programmer";

let firstName: string = "Shandy";
let lastName: string = "Siswandi";
let age: string = "25 years old next month";

// with backtick (``)
const fullName: string = `Hello, my name is ${firstName} ${lastName}, I'll be ${age}`;

// without backtick (``)
const fullNameAndAge: string =
  "Hello, my name is " + firstName + " " + lastName + ", I'll be " + age;

/**
 * bisa kita bandingkan, lebih mudah dan sederhana menggunakan (``)
 */
