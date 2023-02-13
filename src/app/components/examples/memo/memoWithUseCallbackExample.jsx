import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });
    return (
        <button className="btn btn-primary" onClick={onLogOut}>
            LogOut
        </button>
    );
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

function areEqual(prevState, nextState) {
    if (prevState.onLogOut !== nextState.onLogOut) {
        return false;
    }
    return true;
}

const MemoizedLogOutButton = React.memo(LogOutButton, areEqual); // 2й пример areEqual - функция сверки, Она принимает два аргумента: предыдущие props и новые.
// Внутри нужно провести сравнение. Если мы не хотим, чтобы компонент ререндерился, то нужно вернуть true, иначе false
//  Такой способ сработает только для примитивных типов данных или сериализуемых объектов

// const MemoizedLogOutButton = React.memo(LogOutButton); - 1й пример

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);
    return (
        <>
            <button
                className="btn btn-primary mr-2"
                onClick={() => setState(!state)}
            >
                Initiate rerender
            </button>
            <MemoizedLogOutButton onLogOut={handleLogOut} />
        </>
    );
};

export default MemoWithUseCallbackExample;

// React.memo - НОС, кот сравнивает - изменились ли параметры, кот мы передаем компоненту. Если изменились - выдает нам новый компонент
// а если нет - хранит целиковый компонент в памяти. Напр, ререндерить тяжелые списки или когда дочерние компоненты ререндерятся при рендере родительского, а это не нужно
// useMemo - мемоизирует результат выполнения функции, а React.memo мемоизирует сам компонент

//  Функции нельзя сравнить с помощью areEqual(), можно только использовать “поверхностное сравнение” по ссылке. Поэтому нужно обернуть функцию в useCallback()
// здесь в 1м примере React.memo по поверхностой сверке понимает, что переданная ф-я handleLogOut равна предыдущей, тк useCallback хранит в себе функцию
// и дает нам возм-ть сранить эту ф-ю, чтобы они были равны

//  В React.memo() есть “поверхностная сверка” для ссылочных типов данных, и если ссылка всегда будет одна и та же, то повторного рендера не случится

// Наш проект может иметь сложную композицию компонентов c многими потомками.
// Если не сохранять ссылки на объекты, то это может вызывать утечки памяти или свести на нет использование React.memo().
// В коммерческой разработке можно нередко увидеть следование правилу — все объекты, передаваемые в потомки, должны быть мемоизированы.
// Ты тоже можешь следовать ему, это избавит от некоторых проблем с производительностью.

// Подведем промежуточные итоги. React.memo() нужен для оптимизации рендеров.
// Если мы передаём в него объекты, то обязательно нужно их мемоизировать или создавать функцию для сравнения данных – areEqual().
