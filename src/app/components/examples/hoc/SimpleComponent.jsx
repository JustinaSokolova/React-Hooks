import React, { useState } from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    const [authState, setAuthState] = useState("false"); // тк булевое не отображается на фронте, делаем в виде строки

    const toggleAuthState = () => {
        setAuthState((prevState) => (prevState === "false" ? "true" : "false"));
        if (authState === "false") {
            onLogin();
        } else {
            onLogOut();
        }
    };
    return (
        <button className="btn btn-primary" onClick={toggleAuthState}>
            {isAuth ? "Выйти из системы" : "Войти"}
        </button>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};

export default SimpleComponent;
