import { Gender } from "@prisma/client";

// Users mock data.
const users = [
    {
      "firstName": "John",
      "LastName": "Doe",
      "gender": Gender.MALE,
      "email": "john.doe@example.com",
      "status": "",
      "job": "Software Engineer",
      "isActive": true,
      "createdAt": new Date("2025-02-17T02:12:33Z"),
      "modifiedAt": new Date("2025-02-18T02:12:33Z")
    },
    {
      "firstName": "Jane",
      "LastName": "Smith",
      "gender": Gender.FEMALE,
      "email": "jane.smith@example.com",
      "status": "",
      "job": "Product Manager",
      "isActive": true,
      "createdAt": new Date("2025-02-17T02:12:33Z"),
      "modifiedAt": new Date("2025-02-18T02:12:33Z")
    },
    {
      "firstName": "Alex",
      "LastName": "Johnson",
      "gender": Gender.NON_BINARY,
      "email": "alex.johnson@example.com",
      "status": "",
      "job": "Designer",
      "isActive": true,
      "createdAt": new Date("2025-02-17T02:12:33Z"),
      "modifiedAt": new Date("2025-02-18T02:12:33Z")
    },
    {
      "firstName": "Emily",
      "LastName": "Davis",
      "gender": Gender.FEMALE,
      "email": "emily.davis@example.com",
      "status": "",
      "job": "Data Analyst",
      "isActive": true,
      "createdAt": new Date("2025-02-17T02:12:33Z"),
      "modifiedAt": new Date("2025-02-18T02:12:33Z")
    },
    {
      "firstName": "Michael",
      "LastName": "Brown",
      "gender": Gender.MALE,
      "email": "michael.brown@example.com",
      "status": "",
      "job": "Marketing Specialist",
      "isActive": true,
      "createdAt": new Date("2025-02-17T02:12:33Z"),
      "modifiedAt": new Date("2025-02-18T02:12:33Z")
    }
];

export default users;