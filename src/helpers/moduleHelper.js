export function propertyHandler(value) {
    const getValue = () => value;
    const setValue = updatedValue => value = updatedValue;

    return [getValue, setValue];
}