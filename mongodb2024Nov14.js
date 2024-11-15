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

db.listingsAndReviews.find(
    {
        "beds":5
    },{
        accommodates:1
    }

)
db.listingsAndReviews.aggregate([
    {
        $match: { "beds": 4 }
    },
    {
        $group: {
            _id: "$beds",  // 使用 "$name" 字段
            totalAccommodates: { $avg: "$accommodates" }  // 注意字段拼写
        }
    }
])

db.listingsAndReviews.aggregate([
    {
        $match: { "beds": {
            $gte:2,
            $lte:5
        }}
    },
    {
        $group: {
            _id: "$beds",  // 使用 "$name" 字段
            totalAccommodates: { $avg: "$accommodates" }  // 注意字段拼写
        }
    },{
        $sort:{_id:1}
    }
])

db.listingsAndReviews.aggregate([
    {
        $match: {
            "beds": {
                $gte: 2,
                $lte: 5
            }
        }
    },
    {
        $group: {
            _id: "$beds",
            totalAccommodates: { $avg: "$accommodates" }
        }
    },
    {
        $match: {
            "totalAccommodates": {
                $gte: 5
            }
        }
    },
    {
        $sort: { _id: 1 }
    }
])


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

