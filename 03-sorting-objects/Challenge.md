# 03 - Sorting Objects Challenge

## Mission
Write code in your favourite programming language which sorts the objects of the input array by several properties. The input array contains many objects which represents an invoice number. Sort this array by customer number ascending and invoice number descending..

## Input
You'll have an json input of an array which contains multiple objects. Thes objects must be sortet by customer number ascending and invoice number descending.

```json
[
    {
        "customer_number": "1002442",
        "invoice": {
            "number": 850004111
        }
    },
    {
        "customer_number": "1352432",
        "invoice": {
            "number": 850002489
        }
    },
    {
        "customer_number": "1002442",
        "invoice": {
            "number": 850004391
        }
    },
    {
        "customer_number": "3944835",
        "invoice": {
            "number": 86028494
        }
    },
]
```

## Expected Output
```json
[
    {
        "customer_number": "1002442",
        "invoice": {
            "number": 850004391
        }
    },
    {
        "customer_number": "1002442",
        "invoice": {
            "number": 850004111
        }
    },
    {
        "customer_number": "1352432",
        "invoice": {
            "number": 850002489
        }
    },
    {
        "customer_number": "3944835",
        "invoice": {
            "number": 86028494
        }
    },
]
```