import * as FunCollection from "./function-collection.js";
import { FunObject } from "./function-object.js";

export let addictionObject = new FunObject(
  FunCollection.add,
  "Addition",
  "Addition."
);

export let subtractionObject = new FunObject(
  FunCollection.subtraction,
  "Subtraction",
  "Subtraction."
);

export let multiplicationObject = new FunObject(
  FunCollection.multiplication,
  "Multiplication",
  "Multiplication."
);

export let divisionObject = new FunObject(
  FunCollection.division,
  "Division",
  "Division."
);

export let powerObject = new FunObject(FunCollection.power, "Power", "Power.");

export let addIntervalObject = new FunObject(
  FunCollection.addInterval,
  "Interval sum",
  "Interval sum."
);

export let integerDivisionObject = new FunObject(
  FunCollection.integerDivision,
  "Integer division",
  "Integer division."
);

export let remainderObject = new FunObject(
  FunCollection.remainder,
  "Remainder",
  "Remainder."
);

export let FunList = [
  addictionObject,
  subtractionObject,
  multiplicationObject,
  divisionObject,
  powerObject,
  addIntervalObject,
  integerDivisionObject,
  remainderObject
]