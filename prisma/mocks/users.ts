import { Gender } from "@prisma/client";

// Users mock data.
const users = [
    {
      "firstName": "John",
      "lastName": "Doe",
      "gender": Gender.MALE,
      "email": "john.doe@example.com",
      "status": "Member",
      "job": "Software Engineer",
      "isActive": true,
      "avatar": "avatar-1.png",
      "createdAt": new Date("2025-02-17T02:12:33Z"),
      "modifiedAt": new Date("2025-02-18T02:12:33Z")
    },
    {
      "firstName": "Jane",
      "lastName": "Smith",
      "gender": Gender.FEMALE,
      "email": "jane.smith@example.com",
      "status": "Member",
      "job": "Product Manager",
      "isActive": true,
      "avatar": "avatar-4.png",
      "createdAt": new Date("2025-02-17T02:12:33Z"),
      "modifiedAt": new Date("2025-02-18T02:12:33Z")
    },
    {
      "firstName": "Alex",
      "lastName": "Johnson",
      "gender": Gender.NON_BINARY,
      "email": "alex.johnson@example.com",
      "status": "Member",
      "job": "Designer",
      "isActive": true,
      "avatar": "avatar-3.png",
      "createdAt": new Date("2025-02-17T02:12:33Z"),
      "modifiedAt": new Date("2025-02-18T02:12:33Z")
    },
    {
      "firstName": "Emily",
      "lastName": "Davis",
      "gender": Gender.FEMALE,
      "email": "emily.davis@example.com",
      "status": "Member",
      "job": "Data Analyst",
      "isActive": true,
      "avatar": "avatar-5.png",
      "createdAt": new Date("2025-02-17T02:12:33Z"),
      "modifiedAt": new Date("2025-02-18T02:12:33Z")
    },
    {
      "firstName": "Michael",
      "lastName": "Brown",
      "gender": Gender.MALE,
      "email": "michael.brown@example.com",
      "status": "Member",
      "job": "Marketing Specialist",
      "isActive": true,
      "avatar": "avatar-2.png",
      "createdAt": new Date("2025-02-17T02:12:33Z"),
      "modifiedAt": new Date("2025-02-18T02:12:33Z")
    },
    {
      "firstName": "Sophie",
      "lastName": "Chen",
      "gender": Gender.FEMALE,
      "email": "sophie.chen@example.com",
      "status": "Member",
      "job": "UX/UI Designer",
      "isActive": true,
      "avatar": "avatar-8.png",
      "createdAt": new Date("2024-11-23T15:45:22Z"),
      "modifiedAt": new Date("2025-02-19T09:33:41Z")
    }
];

export default users;