var tdarrayindex = {
    encode: function(xval, yval, method, negative) {
        var x, y;
        if (!negative || negative === false) {
            x = xval;
            y = yval;
        } else if (negative === true) {
            x = xval >= 0 ? xval * 2 : xval * -2 - 1;
            y = yval >= 0 ? yval * 2 : yval * -2 - 1;
        } else {
            console.warn(negative + " is not valid; this option must be a bool");
        }

        if (!method || method === "szudzik") {
            var number = (x >= y) ? (x * x + x + y) : (y * y + x);
            return number;
        } else if (method === "interleave") {
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
        } else if (method === "hopullman") {
            var number = ((x + y - 2) * (x + y - 1)) / 2 + x;
            return number;
        } else if (method === "rosenstrong") {
            var number = Math.pow((Math.max(x, y)), 2) + Math.max(x, y) + x - y;
            return number;
        } else {
            console.warn(method + " is not a valid method");
        }
    },
    decode: function(val, method, negative, debug) {
        var debugbool;
        if (!debug || debug === true) {
            debugbool = true;
        } else if (debug === false) {
            debugbool = false;
        } else {
            console.warn(debug + "incorrect option; must be bool");
        }
        var result;
        if (!method || method === "szudzik") {
            var sqrtz = Math.floor(Math.sqrt(val)),
            sqz = sqrtz * sqrtz;
            result =  ((val - sqz) >= sqrtz) ? [sqrtz, val - sqz - sqrtz] : [val - sqz, sqrtz];
        } else if (method === "interleaving") {
            var numstring = val.toString();
            var resultstringx;
            var resultstringy;
            if (numstring.length % 2 !== 0) {
                numstring = "0" + numstring;
            }
            for (var f = 0; f < numstring.length - 1; f += 2) {
                resultstringx += numstring.charAt(f);
                resultstringy += numstring.charAt(f + 1);
            }
            result = [Number(resultstringx), Number(resultstringy)];
        } else if (method === "triangle") {
            if (debugbool) {
                console.warn("decoding method for triangular number does not exist");
            }
        } else if (method === "primefactor") {
            if (debugbool) {
                console.warn("decoding method for prime factorization does not exist");
            }
        } else if (method === "cantorpair") {
            var t = Math.floor((Math.sqrt(1 + 8 * val) - 1)/2);
            var xval = t * (t + 3) / 2 - val;
            var yval = val - t * (t + 1) / 2;
            result = [xval, yval];
        } else if (method === "bitwise") {
            var xval = val >> 16 & 0xFFFF;
            var yval = val & 0xFFFF;
            result = [xval, yval];
        } else if (method === "hopullman") {
            if (debugbool) {
                console.warn("decoding method for Hopkins Ullman pairing algorithm does not exist");
            }
        } else if (method === "rosenstrong") {
            var m = Math.floor(Math.sqrt(val));
            result = (val - m ^ 2 < m) ? [val - m ^ 2, m] : [m, m ^ 2 - 2 * m - val];
        } else {
            console.warn(method + " is not a valid method");
        }
        
        if (!negative || negative === false) {
            return result;
        } else if (negative === true) {
            var x = result[0] % 2 === 0 ? result[0] / 2 : ((result[0] + 1) / 2) * -1;
            var x = result[1] % 2 === 0 ? result[1] / 2 : ((result[1] + 1) / 2) * -1;
            return [x, y];
        } else {
            console.warn(negative + " is not valid; this option must be a bool");
        }
    }
};
