function isRotation(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }

    return (str1 + str2).includes(str1);
}

console.log(isRotation("abcd", "cdab"));
// true