function toMoney(number) {
    let newMoney = '0';
    let isValidNumber = (null !== number && undefined !== number)
        && (number instanceof Number);

    if (isValidNumber) {
        newMoney = `\$${number}`;
    }

    return newMoney;
}