var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

// Create connection to database
var config = 
   {
    userName: 'pfcl', // update me
    password: 'Welcome.123', // update me
    server: 'pfcl.database.windows.net', // update me
    options: 
       {
          database: 'garbage_location' //update me
          , encrypt: true 
          , rowCollectionOnRequestCompletion : true
       }
   }
var connection = new Connection(config);

module.exports = {

conn :function conn(){
// Attempt to connect and execute queries if connection goes through
connection.on('connect', function(err) 
   {
     if (err) 
       {
          console.log(err)
       }
    else
       {
           console.log("Success");
           queryDatabase();
       }
   }
 );
},

// Inserting a row of data to the database
insert :function writeDataToDB(garbage_model,res)
   { console.log('Reading rows from the Table...');
     console.log("The data is :" + garbage_model.phone_id + "," );
       // Read all rows from table

     values = "'" + garbage_model.phone_id + "'"  +
              "," + "'" + garbage_model.curr_date + "'" +
              "," + "'" + garbage_model.curr_time + "'" +
              "," + "'" + garbage_model.longitude + "'" +
              "," + "'" + garbage_model.latitude + "'" +
              "," + "'" + garbage_model.is_plastic + "'" +
              "," + "'" + garbage_model.is_cigarettes + "'" +
              "," + "'" + garbage_model.is_glass + "'" +
              "," + "'" + garbage_model.is_food_waste + "'" +
              "," + "'" + garbage_model.is_paper + "'" +
              "," + "'" + garbage_model.is_chemicals + "'" +
              "," + "'" + garbage_model.is_metal + "'" +
              "," + "'" + garbage_model.will_be_picked_up + "'" +
              "," + "'" + garbage_model.quantity + "'" +
              "," + "'" + garbage_model.picture_id + "'"

     request = new Request(
          "INSERT INTO dbo.GarbageData  VALUES (" + values +")",
             function(err, rowCount, rows) 
                { 
                    if(err){
                        res.send(err);
                    }else{
                        res.send("OK");
                    }
                   // console.log(err);
                   // console.log(rowCount + ' row(s) returned');
                }
            );

     request.on('row', function(columns) {
        columns.forEach(function(column) {
            console.log("%s\t%s", column.metadata.colName, column.value);
         });
             });
     
        connection.execSql(request);
     
    
   },

  //Return rows from the table for a single phone_id
  get : function selectByID(garbage_model,res){
    var data;
    request = new Request(
        "SELECT * FROM dbo.GarbageData WHERE phone_id = " + "'" + garbage_model.phone_id + "'" + " FOR JSON AUTO",
           function(err, rowCount, rows) 
              { 
                  if(err){
                    res.send(err);
                  }else{
                  //console.log(rowCount + ' row(s) returned');
                  //Send the response to the client
                  res.send(rows);
                  }
              }
          );
   
   request.on('row', function(columns) {
      columns.forEach(function(column) {
         //console.log("%s\t%s", column.metadata.colName, column.value);
         //data.push([column.metadata.colName,column.value])
       });
           });

    connection.execSql(request);
    return data
  } 
}