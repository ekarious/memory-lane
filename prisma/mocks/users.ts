import { Gender } from "@prisma/client";

// Users mock data.
const users = [
    {
      "firstName": "John",
      "LastName": "Doe",
      "gender": Gender.MALE,
      "email": "john.doe@example.com",
      "phone": 1234567890,
      "status": "active",
      "job": "Software Engineer",
      "createdAt": new Date("2025-02-18T02:12:33Z"),
      "modifiedAt": new Date("2025-02-18T02:12:33Z")
    },
    {
      "firstName": "Jane",
      "LastName": "Smith",
      "gender": Gender.FEMALE,
      "email": "jane.smith@example.com",
      "phone": 9876543210,
      "status": "active",
      "job": "Product Manager",
      "createdAt": new Date("2025-02-18T02:12:33Z"),
      "modifiedAt": new Date("2025-02-18T02:12:33Z")
    },
    {
      "firstName": "Alex",
      "LastName": "Johnson",
      "gender": Gender.NONBINARY,
      "email": "alex.johnson@example.com",
      "phone": null,
      "status": "inactive",
      "job": "Designer",
      "createdAt": new Date("2025-02-18T02:12:33Z"),
      "modifiedAt": new Date("2025-02-18T02:12:33Z")
    },
    {
      "firstName": "Emily",
      "LastName": "Davis",
      "gender": Gender.FEMALE,
      "email": "emily.davis@example.com",
      "phone": 1231231234,
      "status": "active",
      "job": "Data Analyst",
      "createdAt": new Date("2025-02-18T02:12:33Z"),
      "modifiedAt": new Date("2025-02-18T02:12:33Z")
    },
    {
      "firstName": "Michael",
      "LastName": "Brown",
      "gender": Gender.MALE,
      "email": "michael.brown@example.com",
      "phone": null,
      "status": "active",
      "job": "Marketing Specialist",
      "createdAt": new Date("2025-02-18T02:12:33Z"),
      "modifiedAt": new Date("2025-02-18T02:12:33Z")
    }
];

export default users;