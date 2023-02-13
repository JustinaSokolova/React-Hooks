import React from "react";
import Component from "./someComponent";
import SimpleComponent from "./SimpleComponent";

import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import withLogin from "./withLogin";
import withPropsStyles from "./withPropsStyles";
import withFunctions from "./withFunctions";

const HOCExample = () => {
    const ComponentWithAuth = withLogin(Component); // передаем не экземпляр компонента, а конкретный компонент
    const ComponentWithPropsStyles = withPropsStyles(Component);
    const NewComponent = withPropsStyles(ComponentWithAuth); //  "композиция компонентов"
    const ComponentWithHoc = withFunctions(SimpleComponent);
    return (
        <>
            <CardWrapper>
                <SmallTitle>1. Обычный компонент</SmallTitle>
                <Divider />
                <Component />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>2. Функциональный HOC</SmallTitle>
                <Divider />
                <ComponentWithAuth />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>3. HOC With Styles and Props</SmallTitle>
                <ComponentWithPropsStyles />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>4. Composed HOC</SmallTitle>
                <NewComponent />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Homework</SmallTitle>
                <ComponentWithHoc />
            </CardWrapper>
        </>
    );
};

export default HOCExample;

// Компоненты высшего порядка (Higher-Order Components или HOC) – это один из продвинутых способов для повторного использования логики. HOC является одним из способов композиции компонентов.
// Higher-Order Component представляет собой функцию, которая принимает компонент (и возможно какие-то параметры) и возвращает новый компонент. Готовые HOC можно встретить во многих популярных библиотеках
