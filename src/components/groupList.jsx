import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    // было: items {doctor: {…}, waiter: {…}, physics: {…}, engineer: {…}, actor: {…},…}
    // items это объект, поэтому метод map применим когда вытащим ключи объекта в массив Object.keys(items)
    // console.log(Object.keys(items))

    // items приходят либо объект с объектами, либо массив с объектами
    let objects = {};
    if (items instanceof Object) {
        objects = Object.keys(items);
        console.log(objects);
    } else if (items instanceof Array) {
        objects = items;
        console.log(objects);
    }

    return (
        // item c byltrcjv item и указываем поле name
        <ul className="list-group">
            {objects.map((item) => (
                <li
                    className={
                        "list-group-item" +
                        (items[item] === selectedItem ? " active" : "")
                    }
                    key={items[item][valueProperty]}
                    onClick={() => onItemSelect(items[item])}
                    // чтобы курсор изменил вид с стрелки на руку
                    role="button"
                >
                    {items[item][contentProperty]}
                </li>
            ))}
        </ul>
    );
};
GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string,
    contentProperty: PropTypes.string,
    onItemSelect: PropTypes.func.isRequired,
    selectedItem: PropTypes.object
};

export default GroupList;
