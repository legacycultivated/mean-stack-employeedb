import * as mongodb from "mongodb";

//create Employee interface where we define the structure of employee object
export interface Employee {
  name: string;
  position: string;
  level: "junior" | "mid" | "senior";
  _id?: mongodb.ObjectId;
}
