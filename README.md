# 2D-Array-JS
Two dimensional arrays stored in one dimensional arrays Javascript

Two different methods are avaliable, interleaving or triangular numbers.

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

Note: This library only returns the index. It does not return a array or mutate an existing array.
