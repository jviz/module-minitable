# tab

The base table module for jviz.

## Install

You can install the `tab` module using the jviz CLI:

```
jviz install --save tab
```

## Options

### ajax `Object`

Do an ajax request to get the data of the table from the server. The `ajax` options gets the following keys:

- `url`: (**mandatory**) sets the url to retrieve the data from the server.
- `type`: sets the method to retrieve the data. Examples: `GET`, `POST`...
- `parse`: a `function` to parse the retrieved data.

```javascript
jviz.modules.tab({
  "ajax":
  {
    "url": "data.json",
    "type": "get",
    "parse": function(d)
    {
      //Do something with the data and return the parsed data
      //....
      return d;
    }
  }
});
```

### columns `Array`

An array with the columns information.

### data `Array`

An array with the data to display on the table.

```javascript
jviz.modules.tab({
  "data":
  [
    { "name": "John", "age": 25 },
    { "name": "Susan", "age": 26 },
    { "name": "Bob", "age": 24 }
  ]
});
```

### parent `String`

Sets the parent element where the table must be builded.


## Events

### Register a new event

You can register a new event using the `on` method. For example, with the following code

```javascript
tab.on('click:head', function(){ /* ... */ });
```

the function provided will he called when the user clicks on some cell of the header.

### Reference

#### click:head

This event will be executed when the user clicks on a cell of the header.
