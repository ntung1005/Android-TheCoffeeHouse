export const functionFormatNumber = (value: any) => {
    return Number(value).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
};
