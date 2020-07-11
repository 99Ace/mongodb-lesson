// goto connect in mongodb > clusters > and select mongo shell
//connect to mongoshell by copy the following line 3:
mongo "mongodb+srv://cluster0-hocdb.mongodb.net/<dbname>" --username <username>
password: XXXXXXXX

// SET COLL = DATABASE.COLLECTION TRACK
coll = db.players

// INSERT ONE 
coll.insert({
    first_name : 'Ryan',
    last_name : 'Giggs',
    position : 'Winger'
})

// VIEW DATABASE 'ALL' USING ({})  IN PRETTY FORMAT
coll.find({}).pretty()

//INSERT MANY
coll.insertMany([
    {first_name : 'Paul',last_name : 'Ince',position : 'Midfielder'},
    {first_name : 'Lee',last_name : 'Sharp',position : 'Winger'},
    {first_name : 'Ole Gunnar',last_name : 'Solskjaer',position : 'Forward'},
    {first_name : 'Andy',last_name : 'Cole',position : 'Forward'},
    {first_name : 'Dwight',last_name : 'Yorke',position : 'Forward'},
    {first_name : 'Terry',last_name : 'Sheringham',position : 'Forward'},
    {first_name : 'Steve',last_name : 'Bruce',position : 'Defender'},
    {first_name : 'Gary',last_name : 'Pallister',position : 'Defender'}
    
])

//UPDATE DATABASE
coll.update(
    {first_name:"Ryan"},
    {$set:{position:"Forward"}}
)

// DELETE DATABASE
coll.deleteOne(
    {first_name:"Paul"}
)

// LIMIT NUMBER OF VIEW
coll.find({}).limit(2).pretty()

// SORT DATA BY ASCENDING 1 OR DESCENDING -1
coll.find({}).sort({first_name: 1})
// or DESCENDING
coll.find({}).sort({first_name: -1})

// search for case-sensitive
coll.find({ position : {$regex: 'def' }}).pretty()
// search for case-insensitive
coll.find({ position : {$regex: 'def', $options:'i' }}).pretty()