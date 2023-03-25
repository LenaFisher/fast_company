// функ делит весь объем эл на кусочки начиная с нужного индекса
function paginate(items, pageNumber, pageSize) {
    // нач инд=(номер стр-1)*планов кол-во польз на странице
    const startIndex = (pageNumber - 1) * pageSize;
    return [...items].splice(startIndex, pageSize);
}

export default paginate;
