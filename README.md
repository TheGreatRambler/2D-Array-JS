# 2D-Array-JS

Collection of functions that, given a x and y value, returns an index in a one dimensional array. These functions can also be used as pairing functions.

## API

```javascript
tdarrayindex: {
  encode: function(x, y, method, negative), // method & negative are optional
  decode: function(value, method, negative) // method & negative are optional
}
```
### Methods

```javascript
method = "szudzik";
```

A index derived through the szudzik pairing function by Matthew Szudzik at Wolfram Research. Read about it [here](https://codepen.io/sachmata/post/elegant-pairing). This is the default.

```javascript
method = "triangle";
```

A index derived through triangular numbers. Read about it [here](https://en.wikipedia.org/wiki/Hilbert%27s_paradox_of_the_Grand_Hotel#Triangular_number_method). Does not have decode function.

```javascript
method = "interleave";
```

A index derived by rearranging the digits of each number. Read about it [here](https://en.wikipedia.org/wiki/Hilbert%27s_paradox_of_the_Grand_Hotel#Interleaving_method).


```javascript
method = "primefactor";
```

A index derived through prime factors. Read about it [here](https://en.wikipedia.org/wiki/Hilbert%27s_paradox_of_the_Grand_Hotel#Prime_factorization_method). Note: this method creates very large arrays. Does not have decode function.

```javascript
method = "cantorpair";
```

A index derived through the cantor pairing function. Read about it [here](https://en.wikipedia.org/wiki/Pairing_function#Cantor_pairing_function) and read source [here](https://codepen.io/LiamKarlMitchell/pen/xnEca).

```javascript
method = "bitwise";
```

A index derived through bitwise functions. Read the source [here](https://gist.github.com/KenanSulayman/7720542).

```javascript
method = "hopullman";
```

A index derived through a pairing function devised by Hopcroft and Ullman. Read about it [here](http://mathworld.wolfram.com/PairingFunction.html). Does not have decode function.

```javascript
method = "rosenstrong";
```

A index derived through the Rosenburg-Strong pairing function. Read about it [here](https://arxiv.org/pdf/1706.04129.pdf). Does not have decode function.

To use `tdarrayindex.decode`, just input value from `tdarrayindex.encode` to get an array containing the x and y value.

Example:
```javascript
  var test = tdarrayindex.encode(2, 4, "szudzik"); // 18
  var xandy = tdarrayindex.decode(test, "szudzik"); // [2, 4]
```

### Negative

```javascript
negative = false
```
this specifies that negative values for either x or y are not to be supported. This is the default.

```javascript
negative = true
```
This specifies that negative values for either x or y are supported. Be warned that this method makes twice as large arrays if you only use positive values!

Check out [this page](https://thegreatrambler.github.io/2D-Array-JS/demo.html) for average function times and efficiency.

Note: This library only returns the index or gets x and y values from a value. It does not return a array or mutate an existing array.

If you like this javascript library, a :star: would be appreciated!
