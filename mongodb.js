use airbnb;


db.listingsAndReviews.find({
    amenities: {
        $in: ["Wifi", "Internet", "Cable TV"]
    }
})

db.listingsAndReviews.find({
    accommodates: {
        $gt:3,
        $lt:5
    }
})




use  mflix;
db.users.find()
db.users.insertMany([
    {
        "firstname": "joe",
        "lastname": "white",
        "age": 30,
        "sports": ["football", "baseball"]
    },
    {
    "firstname": "alice",
    "lastname": "yi",
    "age": 19,
    "sports": ["yoga", "dance"]
    }
]);

db.users.updateOne(
    {
        name: "Jon Snow"
    },
    {
        $unset: { email: "" }
    }
)

db.users.find()

db.users.updateMany(
    {},
    {
        $pull: {email:"harry_lloyd@gameofthron.es"}
    }
)???????
