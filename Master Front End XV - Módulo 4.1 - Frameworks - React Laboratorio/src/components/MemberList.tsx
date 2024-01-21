import React from "react";
import { UserLemonCoders } from "../domain/list/list.interface";
import { MemberItem } from "./MemberItem";

export const MembersList = ({ member }: { member: UserLemonCoders[] }) => {
    console.log(member);

    return (
        <>
            <div className="container">
                <span className="">Avatar </span>
                <span className="">Id: </span>
                <span className="">Name:</span>
            </div>
            {member.map((member) => {
                return <MemberItem member={member} />
            })}
            {/* <Link to="/detail">Navigate to detail page</Link> */}

        </>
    );

};