import React from "react";
import { UserLemonCoders } from "../domain/list/list.interface";
import { MemberItem } from "./MemberItem";
import { Link } from "react-router-dom";


interface MembersListProps {
    members: UserLemonCoders[];
    organization: string;

}
export const MembersList = ({ members, organization }: MembersListProps) => {
    return (
        <div className="flex justify-center flex-col w-full bg-gradient-to-b from-teal-500 via-teal-400 to-teal-300 items-center p-8">

            <div className="">
                <h2>Organization: {organization}</h2>
            </div>
            <div className="flex font-bold text-2xl items-center gap-20">
                <span className="pr-8">Avatar</span>
                <span className="">Id</span>
                <span className="">Name</span>
            </div>

            {members?.map((member) => {
                return <MemberItem key={member.id} member={member} />
            })}
            <Link to="/detail" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Navigate to detail page</Link>

        </div>
    );

};