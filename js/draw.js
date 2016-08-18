//Draw the table
jviz.modules.tab.prototype.draw = function(subset)
{
  //Check the subset
  if(typeof subset === 'undefined'){ var subset = {}; }

  //Reset the body
  jviz.dom.html('', this._body.id);

  //Check the data length
  if(this._data.length === 0){ return this; }

  //Max size
  var max_size = this._data.length - 1;

  //Parse the subset start point
  subset.start = (typeof subset.start === 'undefined') ? 0 : Math.max(0, parseInt(subset.start));

  //Parse the subset end point
  subset.end = (typeof subset.end === 'undefined') ? max_size : Math.min(max_size, parseInt(subset.end));

  //Array with the added rows
  var rows = [];

  //Display the data
  for(var i = subset.start; i <= subset.end; i++)
  {
    //Get the index
    var index = this._data.order[i];

    //Get the data row
    var data = this._data.src[index];

    //Get the row id
    var row_id = this._body.row.id + index;

    //Create the new row
    jviz.dom.append({ type: 'div', id: row_id, class: this._body.row.class }, this._body.id);

    //Read all the cells
    for(var j = 0; j < this._columns.src.length; j++)
    {
      //Get the cell
      var cell = this._columns.src[j];

      //Check the display
      if(cell.display === false){ continue; }

      //Get the cell id
      var cell_id = this._body.cell.id + index + '_' + j;

      //Create the cell
      jviz.dom.append({ type: 'div', id: cell_id, class: this._body.cell.class, html: data[cell.key] }, row_id);
    }

    //Add the row index
    rows.push({ id: row_id, index: index });
  }

  //Add the events
  for(var i = 0; i < rows.length; i++)
  {
    //Add the event
    jvizModulesTabRowsEvent(this, rows[i].id, rows[i].index);
  }

  //Return this
  return this;
};

//Rows event
function jvizModulesTabRowsEvent(_this, _id, _index)
{
  //Add the click event
  $('#' + _id).on('click', function(e){ return _this.rowsClick(_index); });
}