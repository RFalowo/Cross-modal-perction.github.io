// user defined type guard
export const isGetOrder = (value) => {
    const getOrder = value;
    return (getOrder !== undefined &&
        getOrder.type === "GetOrd" &&
        getOrder.data === null);
};
