function expandedForm(num) {
    const parts = [];
    let multiplier = 1;

    while (num > 0) {
        const digit = num % 10;
        if (digit > 0) {
            parts.unshift(digit * multiplier);
        }
        num = Math.floor(num / 10);
        multiplier *= 10;
    }

    return parts.join(' + ');
}