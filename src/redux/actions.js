export const inc = () => ({ type: "INC" });
export const dec = () => ({ type: "DEC" });
export const random = (number) => ({ type: "RANDOM", payload: number });
