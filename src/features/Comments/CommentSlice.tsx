import { User } from "../../models";
import { UserType } from "../User/UserSlice";

export interface CommentType {
   id: string
   createdBy: UserType
   children?: CommentType[]
   comment: string
   createdAt: string
   edited?: boolean | null
}

export interface ReviewType {
   id: string
   comment: CommentType
   positive: boolean
   reviewOf: UserType
   reviewBy: UserType
}