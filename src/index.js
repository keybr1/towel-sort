module.exports = function towelSort(matrix) {
    if (matrix === undefined || matrix.length === 0) return [];

    const newMatrix = matrix
        .map((i, index) => {
            if (index % 2 === 1) {
                i = i.sort((a, b) => b - a);
            }
            return i;
        })
        .toString()
        .split(",");

    const res = newMatrix.map((i) => parseInt(i));

    return res;
};
