/*! *****************************************************************************
Copyright (c) Learning Typescript with Example shandysiswandi. All rights reserved. MIT License.
***************************************************************************** */

/**
 * Enum : memungkinkan kita untuk membuat tipe data tambahan.
 * isi dalam array bisa apa saja, seperti: number, boolean, string dan lain-lain
 */

// deklarasi enum dengan nama `Color`
enum Color {
  Red,
  Green,
  Blue,
}

// deklarasi varibale `c` dengan tipe data `Color`
// dan mengisi dengan salah satu member atau anggota `Color`
let c: Color = Color.Green;

// secara default member atau anggota dari enum dimulai dari 0,
// tapi kita bisa mengubahnya secara manual dengan mengisi angka atau string
enum Warna {
  Red = 1,
  Green = "hijau",
  Blue = 0,
}

let w: Warna = Warna.Green;

// cara memanggil tipe data enum
// cara 1
let g: Warna = Warna.Green;
// cara 2
let colorName: string = Warna[0];
