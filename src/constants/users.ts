import { nanoid } from "@reduxjs/toolkit";
import { IUser } from "../interfaces/common";

export const TEST_USER: IUser = {
  id: nanoid(10),
  firstName: "John",
  lastName: "Doe",
};
