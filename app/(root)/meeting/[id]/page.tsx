"use client";

import { useParams } from "next/navigation";

const Meeting = () => {
    const params = useParams();

    return <div>Meeting: {params.id}</div>;
};

export default Meeting;