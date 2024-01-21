import React from "react";
import { UserLemonCoders } from "../domain/list/list.interface";

export const MemberItem = ({ member }: { member: UserLemonCoders }) => {
    return (
        <div className="list-user-list-container " >
            <img className="avatar" alt='Users Lemoncode' src={member.avatar_url} />
            <span>{member.id}</span>
            <span>{member.login}</span>
        </div>
    );
}