import React, { useState } from "react";
import CardWrapper from "../../common/Card";

const withFunctions = (SimpleComponent) => () => {
    const [isAuth, setIsAuth] = useState(false);

    const onLogin = () => {
        localStorage.setItem("auth", "token");
        setIsAuth(true);
        console.log("log in");
    };
    const onLogOut = () => {
        localStorage.removeItem("auth");
        setIsAuth(false);
        console.log("log out");
    };

    return (
        <>
            <CardWrapper>
                <SimpleComponent
                    isAuth={isAuth}
                    onLogin={onLogin}
                    onLogOut={onLogOut}
                />
            </CardWrapper>
        </>
    );
};

export default withFunctions;
