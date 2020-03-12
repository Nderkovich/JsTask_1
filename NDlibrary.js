function isArray(obj) {
    return Array.isArray(obj);
}

function isBoolean(obj) {
    return typeof (obj) == "boolean";
}

function isDate(obj) {
    return obj instanceof Date;
}

function isNumber(obj) {
    return typeof (pbj) == "number";
}

function isString(obj) {
    return typeof (obj) == "string";
}

function isFunction(obj) {
    return typeof (obj) == "function";
}

function isUndefined(obj) {
    return typeof (obj) == "undefined";
}

function isNull(obj) {
    return obj === null;
}

function first(arr) {
    return arr[0];
}

function last(arr) {
    return arr[arr.length];
}

function take(arr, number) {
    return Array.from(a).slice(0, number);
}

function skip(arr, number) {
    return Array.from(a).slice(number, a.length);
}

function asChain(arr) {

    var array = arr;

    return {
        skip: function (number) {
            console.log(arr);
            return asChain(skip(array, number));
        },

        take: function (number) {
            console.log(arr);
            return asChain(take(array, number));
        }
    };
}