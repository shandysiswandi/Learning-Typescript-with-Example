/*! *****************************************************************************
Copyright (c) Learning Typescript with Example shandysiswandi. All rights reserved. MIT License.
***************************************************************************** */

/**
 * `type assertions`: ini seperti `casting type` hanya mirip ya. penjelasan lengkapnya,
 *  ada dua cara dalam penulisan `type assertions`
 *  link: https://www.typescriptlang.org/docs/handbook/basic-types.html#type-assertions
 */

// cara satu,
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length; // this is `type assertions`

// cara dua,
let someValue2: any = "this is a string";
let strLength2: number = (someValue as string).length; // this is `type assertions`
