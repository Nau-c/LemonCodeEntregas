import React, { useState } from "react";
import { useEffect } from "react";
import { getStatusMembers } from "../../domain/list/list.request";
import { mapAssetProps } from "../../domain/list/list.mapper";
import { MembersList } from "../MemberList";

export const ListPage = () => {
    const [membersLemoncode, setMembersLemoncode] = React.useState([]);
    const [error, setError] = useState('')


    const getData = async () => {
        try {
            const response = await getStatusMembers()
            setMembersLemoncode(response.content)
        } catch (error) {
            setError(error)
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
        const mappedMembers = mapAssetProps(membersLemoncode)
        setMembersLemoncode(mappedMembers)
    }, []);

    console.log('membersLemoncode', membersLemoncode);
    if (!membersLemoncode) {
        return <div>loading...</div>
    }
    return (
        <div>
            <MembersList member={membersLemoncode} />
        </div>

    )

};





