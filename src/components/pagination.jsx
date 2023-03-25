import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = (props) => {
    const { itemsCount, pageSize, onPageChange, currentPage } = props;
    // cчитаем кол-во страниц, подгоняем чтобы было ..1 2 3..
    const pageCount = Math.ceil(itemsCount / pageSize);
    // если всего юз меньше чем нужно для вывода на странице, не надо вообще пагинацию показывать
    if (pageCount === 1) return null;
    // из pageCount надо реализовать массив через библ лодаш метод range
    const pages = _.range(1, pageCount + 1);

    return (
        <nav>
            <ul className="pagination">
                {pages.map((page) => (<li
                    className={"page-item" + (page === currentPage ? " active" : "")}
                    key={page}
                >
                    <button
                        className="page-link"
                        onClick={() => onPageChange(page)}>
                        {page}
                    </button>
                </li>))}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default Pagination;
