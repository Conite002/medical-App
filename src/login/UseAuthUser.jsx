import React, { useState } from "react";

export default function useAuthUser(){
    const [isAuth, setIsAuth] = useState({
        status : false,
        uuids : [],
    })

    return {isAuth}
}
