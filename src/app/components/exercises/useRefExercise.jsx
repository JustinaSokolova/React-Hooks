import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";

const UseRefExercise = () => {
    const boxRef = useRef();
    const textRef = useRef();
    // const [textState, setTextState] = useState("Блок");

    const handleClickWidth = () => {
        boxRef.current.style.height = "150px";
        boxRef.current.style.width = "80px";
        textRef.current.innerHTML = "Text";
        // setTextState("Text");
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                ref={boxRef}
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small ref={textRef}>Блок</small>
            </div>
            <button
                className="btn btn-primary mt-3 "
                onClick={handleClickWidth}
            >
                Изменить блок
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
