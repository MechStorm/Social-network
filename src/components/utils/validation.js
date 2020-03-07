export const required = values => {
    if(values) return undefined;
    return "That field is required!";
}

export const maxLengthValidation = maxLength => values => {
    if(values.length >= maxLength) return `That field must to be contained less ${maxLength} symbols `;
    return undefined;
}