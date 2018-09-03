const stringEmpty = "";
let finalString = stringEmpty;

module.exports = function() {
    finalString = stringEmpty;

    if (!arguments) {
        return stringEmpty;
    }

    if (arguments.length <= 0) {
        return stringEmpty;
    }

    Object.keys(arguments).map(argument => concatenate(arguments[argument]))

    return finalString;
}

const concatenate = obj => {
    let value = stringEmpty;
    let $isArray = isArray(obj);
    
    if ($isArray) {
        Object.keys(obj).map(index => concatenate(obj[index]))
    }

    if (!obj) {
        value = stringEmpty;
    } else {
        if (!$isArray) {
            value = String(obj)
        }
    }

    finalString += value;
}

const isArray = arg => {
    if (!arg) return false;

    return arg instanceof Array || Object.prototype.toString.call(arg) === '[object Array]';
}