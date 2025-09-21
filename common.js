import { getUserIDs } from "./data.js";

export const countUsers = () => getUserIDs().length;

console.log(countUsers);
