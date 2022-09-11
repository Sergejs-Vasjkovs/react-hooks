import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ComponentsGroup = ({ children }) => {
    return React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
            ...child.props,
            orderNumb: index + 1
        });
    });
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>

            <ComponentsGroup>
                <Component />
                <Component />
                <Component />
            </ComponentsGroup>
        </CollapseWrapper>
    );
};

ComponentsGroup.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const Component = ({ orderNumb }) => {
    return <div>Компонент списка: {orderNumb} </div>;
};

Component.propTypes = {
    orderNumb: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default ChildrenExercise;
