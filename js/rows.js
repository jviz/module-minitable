//Get the selected rows data
jviz.modules.tab.prototype.rows = function(sel)
{
  //Check the selection
  if(typeof sel === 'undefined'){ return this._data.src; }

  //Check for array
  if(jviz.is.array(sel) === false){ sel = [ sel ]; }

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

//Return only the checked rows
jviz.modules.tab.prototype.selectedRows = function()
{

};

//Set the row background color
jviz.modules.tab.prototype.rowBg = function(index, color)
{
  //
};

//Clear the row background color
jviz.modules.tab.prototype.rowBgClear = function(index)
{
  //
};

//Add a class to the row
jviz.modules.tab.prototype.addRowClass = function(index, name)
{
  //Check for undefined class name
  if(typeof name === 'undefined'){ return this; }

  //Get the row id
  var id = this._body.row.id + index;

  //Add the class to the row
  jviz.dom.class.add(id, name);

  //Return this
  return this;
};

//Remove a class from the specified row
jviz.modules.tab.prototype.removeRowClass = function(index, name)
{
  //Check for undefined class name
  if(typeof name === 'undefined'){ return this; }

  //Get the row id
  var id = this._body.row.id + index;

  //Add the class to the row
  jviz.dom.class.remove(id, name);

  //Return this
  return this;
};
