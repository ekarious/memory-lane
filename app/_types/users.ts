enum Gender {
    MALE,
    FEMALE,
    TRANS,
    NON_BINARY,
    OTHER,
    NONE,
}
  
export type User = {
    id: number;
    firstName: string;
    lastName: string;
    gender: Gender;
    email: string;
    status: string;
    job: string;
    isActive: boolean;
    avatar: string;
    createdAt: Date;
    modifiedAt: Date;
}
