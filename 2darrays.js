var tdarrayindex = function(x, y, method) {
    if (!method || method === "interleave") {
        var xstring = x.toString();
        var ystring = y.toString();
        if (xstring.length > ystring.length) {
            var zeroarray = Array(xstring.length - ystring.length + 1).join("0");
            ystring = zeroarray + ystring;
        } else if (ystring.length > xstring.length) {
            var zeroarray = Array(ystring.length - xstring.length + 1).join("0");
            xstring = zeroarray + xstring;
        }

        var l = xstring.length;
        var finalstring = '';

        for (var i = 0; i < l; i++) {
            finalstring += xstring[i] + ystring[i];
        }

        return Number(finalstring);
    } else if (method === "triangle") {
        var number = (Math.pow((x + y - 1), 2) + x + y - 1) / 2 + y;
        return number;
    } else if (method === "primefactor") {
        var number = Math.pow(2, y) * Math.pow(3, x);
        return number;
    } else if (method === "cantorpair") {
        var number = ((x + y) * (x + y + 1) / 2) + y;
        return number;
    } else if (method === "bitwise") {
        var number = x << 16 & 0xffff0000 | y & 0x0000ffff;
        return number;
    } else {
        console.warn(method + " is not a valid method");
    }
};
