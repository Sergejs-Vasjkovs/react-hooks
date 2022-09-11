import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <>
            {isAuth === false
                ? <button className="btn btn-primary" onClick={onLogin}>Войти</button>
                : <button className="btn btn-secondary" onClick={onLogOut}>Выйти</button>}
        </>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};

export default SimpleComponent;
