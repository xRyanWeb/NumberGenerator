import { number_1, number_2 } from "../misc/App";
import { Add } from "./Added";

const input = document.getElementById("input") as HTMLInputElement;

const value: any = input.value;

export function getFunction() {
  if (value == Add(number_1, number_2)) {
    alert("Correct");
  }
}

const button1 = document.getElementById("addButton") as HTMLButtonElement;
