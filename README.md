# 2D-Array-JS
Two dimensional arrays stored in one dimensional arrays Javascript

## API

```javascript
tdarrayindex(x, y, method)
```
Possible methods include:

```javascript
method = "triangle";
```

A index derived through triangular numbers. Read about it [here](https://en.wikipedia.org/wiki/Hilbert%27s_paradox_of_the_Grand_Hotel#Triangular_number_method).

```javascript
method = "interleave";
```

A index derived by rearranging the digits of each number. Read about it [here](https://en.wikipedia.org/wiki/Hilbert%27s_paradox_of_the_Grand_Hotel#Interleaving_method). This is the default.


```javascript
method = "primefactor";
```

A index derived through prime factors. Read about it [here](https://en.wikipedia.org/wiki/Hilbert%27s_paradox_of_the_Grand_Hotel#Prime_factorization_method). Note: this method creates very large arrays.

```javascript
method = "cantorpair";
```

A index derived through the cantor pairing function. Read about it [here](https://en.wikipedia.org/wiki/Pairing_function).

Check out [this page](https://thegreatrambler.github.io/2D-Array-JS/demo.html) for average function times and efficiency.

Note: This library only returns the index. It does not return a array or mutate an existing array.
