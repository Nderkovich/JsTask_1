function isArray(obj) {
    return Array.isArray(obj);
}

function isBoolean(obj) {
    return typeof obj === "boolean";
}

function isDate(obj) {
    return obj instanceof Date;
}

function isNumber(obj) {
    return typeof obj === "number";
}

function isString(obj) {
    return typeof obj === "string";
}

function isFunction(obj) {
    return typeof obj === "function";
}

function isUndefined(obj) {
    return typeof obj === "undefined";
}

function isNull(obj) {
    return obj === null;
}

function first(arr) {
    return arr[0];
}

function last(arr) {
    return arr[arr.length - 1];
}

function take(arr, number) {
    return Array.from(arr).slice(0, number);
}

function skip(arr, number) {
    return Array.from(arr).slice(number, a.length);
}

function asChain(arr) {

    return {
        skip: function (number) {
            return asChain(skip(arr, number));
        },

        take: function (number) {
            return asChain(take(arr, number));
        }
    };
}