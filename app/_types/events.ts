import { Attachment } from "./attachments";
import { User } from "./users";

export type Event = {
    id: number;
    userId: number;
    title: string;
    description: string;
    isFamily: boolean;
    isFriend: boolean;
    createdAt: Date;
    modifiedAt: Date;
    user: User
    Attachments: Attachment[]
}
