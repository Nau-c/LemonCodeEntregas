import React from "react";
import { UserLemonCoders } from "../domain/list/list.interface";

export const MemberItem = ({ member }: { member: UserLemonCoders }) => {
    return (
        <div className="list-user-list-container grid grid-cols-180 130 50 100 grid-rows-170 text-lg" >
            <img className="avatar" alt='Users Lemoncode' src={member?.avatar_url} />
            <span>{member?.id}</span>
            <span>{member?.login}</span>
        </div>
    );
}