import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [otherState, setOtherState] = useState(false);
    useEffect(() => {
        renderCount.current++;
    });
    const toggleOtherState = () => {
        setOtherState(!otherState);
    };
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider />
            <p>Render count: {renderCount.current}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                Toggle other State
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;

// Хук useRef() возвращает изменяемый ref-объект. В его свойстве current будет находится заданное значение
// Важная особенность useRef() – ссылка на ref-объект неизменна, и поэтому сам он не может быть передан в useEffect() в качестве зависимости (так как useEffect() попросту не будет вызываться вновь). Но можно передать его свойство current и его изменение будет влиять на вызов useEffect().
