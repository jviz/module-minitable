//Get the selected rows data
jviz.modules.tab.prototype.rows = function(sel)
{
  //Check the selection
  if(typeof sel === 'undefined'){ return this._data.src; }

  //Check for array
  if(jviz.array.is(sel) === false){ sel = [ sel ]; }

  //New array
  var out = [];

  //Read all the selected indexes
  for(var i = 0; i < sel.length; i++)
  {
    //Get the data index
    var index = parseInt(sel[i]);

    //Check for negative index
    if(index < 0){ continue; }

    //Check the data length
    if(index >= this._data.src.length){ continue; }

    //Save the row info
    out.push(this._data.src[index]);
  }

  //Return the selected rows
  return out;
};

//Row click
jviz.modules.tab.prototype.rowsClick = function(index)
{
  //Show in console
  console.log('Clicked on row ' + index);

  //Call the event listener
  jviz.events.send(this._events + 'click:row', this._data.src[index], index);
};