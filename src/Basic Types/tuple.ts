/*! *****************************************************************************
Copyright (c) Learning Typescript with Example shandysiswandi. All rights reserved. MIT License.
***************************************************************************** */

/**
 * Tuple : memungkinkan kita untuk mengekspresikan array dengan jumlah tetap elemen yang tipenya diketahui, tetapi tidak harus sama.
 * isi dalam array bisa apa saja, seperti: number, boolean, string dan lain-lain
 */

// deklarasi variable tuple type
let x: [string, number];

// inisialisasi variable
x = ["hello", 10]; // cara yang benar

// Initialize it incorrectly
// x = [10, "hello"]; // cara yang salah, error
