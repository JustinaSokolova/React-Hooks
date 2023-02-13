import React from "react";
import SmallTitle from "../../common/typografy/smallTitle";

const withLogin = (Component) => (props) => {
    const isLogin = localStorage.getItem("auth");
    return (
        <>
            {isLogin ? <Component {...props} /> : <SmallTitle>Auth</SmallTitle>}
        </>
    );
};

export default withLogin; // называем с мал буквы, тк это не компонент а функция

// запись:
// const withLogin = (Component) => (props) => { ... }
// аналогична:
// const withLogin = function(Component) {
//  return function (props) { ... }
// }
