/*! *****************************************************************************
Copyright (c) Learning Typescript with Example shandysiswandi. All rights reserved. MIT License.
***************************************************************************** */

// Fungsi return `never` harus memiliki titik akhir yang tidak dapat dijangkau.
// fungsi ini tidak akan pernah memiliki nilai balik (return)
function error(message: string): never {
  throw new Error(message);
}

// memanggil fungsi yang memiliki return `never`
function fail() {
  return error("Something failed");
}

// fungsi ini tidak akan pernah memiliki nilai balik (return)
function infiniteLoop(): never {
  while (true) {}
}

// lebih baik gunakan `void` kalau benar-benar tidak memerlukan tipe `never`
