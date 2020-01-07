export const formatPhone = (phone) => {
    const start = phone.substring(0, 3);
    const end = phone.substring(phone.length - 4);
    return start +`****` + end;
};

export const fromRMB = (amount) => {
    const exp = 10000;
    return  amount * exp;
};

export const toRMB = (amount) => {
    const exp = 10000;
    let result =  amount / exp;
    return result.toFixed(2);
};

export const toRMBFormat = (amount) => {
    return `￥`+toRMB(amount)
}
