# 02 - Missing Elements Challenge

## Mission
Write code in your favourite programming language which find these elements which are not in available in every array.

## Input
You'll have an json input of an array which contains multiple string arrays. This Array contains an unkown number of elements. 

```json
[
    ["elem1", "elem2", "elem3"],
    ["elem1", "elem2", "elem3", "elem4", "elem5", "elem6", "elem7"],
    ["elem2", "elem3"]
]
```

## Expected Output
```json
[
    ["elem1","elem4", "elem5", "elem6", "elem7"]
]
```