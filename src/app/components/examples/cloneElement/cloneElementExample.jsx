import React from "react";
import CardWrapper from "../../common/Card";
import TextField from "../../common/form/textField";

import SmallTitle from "../../common/typografy/smallTitle";

const CloneElementExample = () => {
    const field = <TextField label="email" name="email" />; // получаем компонент и сохраняем в переменную
    const handleChange = (target) => {
        console.log("change", target);
    };
    return (
        <CardWrapper>
            <SmallTitle>Пример</SmallTitle>
            {field}
            {React.cloneElement(field, {
                onChange: handleChange,
                label: "Cloned email"
            })}
        </CardWrapper>
    );
};

export default CloneElementExample;

// React.cloneElement() нужно использовать в тех случаях, когда невозможно изменить props с помощью HOC, что часто происходит при написании переиспользуемых компонентов
// config может содержать все новые пропсы, key и ref. Полученный таким способом элемент будет иметь пропсы исходного элемента (element) и также новые пропсы из config.
// Если в config совпадет название пропса, который уже есть у element, то применится проп из config.key и ref из исходного элемента(element) будут сохранены, если в config они не были переданы.
// Новые дочерние элементы(children) заменят существующие(у element)
