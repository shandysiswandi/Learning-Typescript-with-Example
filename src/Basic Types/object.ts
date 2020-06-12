/*! *****************************************************************************
Copyright (c) Learning Typescript with Example shandysiswandi. All rights reserved. MIT License.
***************************************************************************** */

/**
 * `object` adalah tipe yang mewakili tipe non-primitif, misal:
 * apa pun yang bukan number, string, boolean, bigint, simbol, null, atau undefined.
 */

// Dengan tipe `object`, API seperti `Object.create` dapat direpresentasikan dengan lebih baik. Sebagai contoh:
declare function create(o: object): void;

create({ prop: 0 }); // OK

// create(null); // Error
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

// contoh penerapan object akan lebih mudah dipahami nanti di pembahasan `class` atau `json`
