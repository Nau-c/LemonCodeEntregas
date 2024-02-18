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
        <>

            <div>
                <h2>Organization: {organization}</h2>
            </div>
            <div className="container grid grid-cols-180 130 50 100 grid-rows-40 font-bold text-5xl">

                <span className="">Avatar </span>
                <span className="">Id: </span>
                <span className="">Name:</span>
            </div>

            {members?.map((member) => {
                return <MemberItem key={member.id} member={member} />
            })}
            <Link to="/detail">Navigate to detail page</Link>

        </>
    );

};