import React, { useState } from "react";
import Card from "../../components/common/Card";

const withFunctions = Component => props => {
    const [isAuth, setIsAuth] = useState(!!localStorage.getItem("auth"));

    const onLogin = () => {
        localStorage.setItem("auth ", "token");
        setIsAuth(true);
    };

    const onLogOut = () => {
        localStorage.removeItem("auth ", "token");
        setIsAuth(false);
    };

    return (
        <Card>
            <Component
                isAuth={isAuth}
                onLogOut={onLogOut}
                onLogin={onLogin}
                {...props} />
        </Card>
    );
};

export default withFunctions;
