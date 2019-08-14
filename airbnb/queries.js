//For Copy and Paste into Bash
db.listingsAndReviews.find({
}).limit(5).pretty()
coll.find({
}).limit(5).pretty()

//Find listing with 5 beds
db.listingsAndReviews.find({ //Find function
    beds:5
}).limit(5).pretty() // limit search to 5 and view in pretty mode

db.listingsAndReviews.find({
    beds:{
        $gt:2     //find the listings more than 2 beds    
    }               
                    
}).limit(5).pretty()
// gt: greater than, gte: greater than or equal
// lt: less than; lte: less than or equal

db.listingsAndReviews.find({
    beds:{
        $gt:2      
    }               
}, {
    address:1, 
    beds:1
}).limit(5).pretty()

db.listingsAndReviews.find({
    'address.country': 'Canada'
},{
    address:1
}).count() //show how many listing under Canada

//Find between 2-5 beds
db.listingsAndReviews.find({
    beds:{
        $gt:2,      
        $lt:5
    }               
}, {
    address:1, 
    beds:1
}).limit(5).pretty()

// Search based on 2 conditions
db.listingsAndReviews.find({
    $and:[
        {
            beds:{
                $gt:2,      
                $lt:6
            }
        },
        {
            'address.country':'Canada'
        }
    ]             
}, {
    address:1, 
    beds:1
}).limit(5).pretty()

db.listingsAndReviews.find({
  $or:[
      {
          $and[
              {
                  
              },
              {
                  
              }
              ]
      },
      {
          $and[
              {
                  
              },
              {
                  
              }
              ]
      }
    ]  
})

db.listingsAndReviews.find(
    {
        
    }
)

    

// Depends on whether you're trying to find documents where words contains both elements (text and here) using $all:
db.things.find({ words: { $all: ["text", "here"] }});
// or either of them (text or here) using $in:
db.things.find({ words: { $in: ["text", "here"] }});

db.listingsAndReviews.find


db.movies.find({year:{$lt:2000}}).count()

db.movies.find(
    {
        countries: 'USA'
    },{countries:1, year:1}
).sort(
    {
        year:1
    }
    ).limit(10).pretty()
    
db.movies.find(
    {
        countries: {$not:'USA'}
    },{countries:1, year:1}
).sort(
    {
        year:1
    }
    ).limit(10).pretty()
       
db.movies.find( { countries: { $not: 'USA' } },{countries:1} ).limit(10)
    