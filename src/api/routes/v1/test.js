const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  console.log('file');
  res.json([
    {
      "_id": "5e51e97861deb5e0ac855f91",
      "index": 0,
      "guid": "5a88c5e6-d8fb-47ee-8639-9c9d0b14662f",
      "isActive": true,
      "balance": "$2,828.84",
      "picture": "http://placehold.it/32x32",
      "age": 39,
      "eyeColor": "brown",
      "name": "Bridges Hayes",
      "gender": "male",
      "company": "INSURETY",
      "email": "bridgeshayes@insurety.com",
      "phone": "+1 (881) 420-2305",
      "address": "446 Troy Avenue, Worcester, Kansas, 1878",
      "about": "Ea cupidatat anim dolore Lorem voluptate adipisicing velit proident magna minim. Consequat sit in veniam aute duis consectetur sit occaecat amet. Sint labore incididunt nulla eiusmod labore. Anim qui eu excepteur fugiat dolor ea adipisicing consequat officia sit proident.\r\n",
      "registered": "2016-02-05T08:09:45 -08:00",
      "latitude": 24.826231,
      "longitude": 3.343039,
      "tags": [
        "dolore",
        "incididunt",
        "voluptate",
        "in",
        "esse",
        "sunt",
        "mollit"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Barr House"
        },
        {
          "id": 1,
          "name": "Hyde Cooke"
        },
        {
          "id": 2,
          "name": "Wiley Hopper"
        }
      ],
      "greeting": "Hello, Bridges Hayes! You have 10 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5e51e97821d41ff200b91a88",
      "index": 1,
      "guid": "f007af4f-13d7-4e48-89b7-f400aa3e5353",
      "isActive": true,
      "balance": "$3,321.98",
      "picture": "http://placehold.it/32x32",
      "age": 35,
      "eyeColor": "blue",
      "name": "Jordan Hickman",
      "gender": "female",
      "company": "PROSELY",
      "email": "jordanhickman@prosely.com",
      "phone": "+1 (873) 544-3423",
      "address": "419 Virginia Place, Umapine, West Virginia, 4914",
      "about": "Aliqua excepteur enim sint amet labore. Occaecat non ut non laboris consequat aliqua sit. Minim exercitation in reprehenderit ipsum est est incididunt nulla aliqua. Sunt id commodo ullamco duis sint non nisi laboris cupidatat et. Adipisicing ad in aliquip ut ullamco nisi ullamco labore.\r\n",
      "registered": "2015-03-28T08:25:39 -08:00",
      "latitude": -58.977496,
      "longitude": 102.775376,
      "tags": [
        "magna",
        "occaecat",
        "ullamco",
        "veniam",
        "voluptate",
        "nisi",
        "commodo"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Katherine Matthews"
        },
        {
          "id": 1,
          "name": "Fanny Dickerson"
        },
        {
          "id": 2,
          "name": "Mccarty Knight"
        }
      ],
      "greeting": "Hello, Jordan Hickman! You have 2 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "5e51e97822eb5dca6170cb9a",
      "index": 2,
      "guid": "fd6204dd-2ede-44d7-bb12-c62575fb8f83",
      "isActive": false,
      "balance": "$1,114.79",
      "picture": "http://placehold.it/32x32",
      "age": 35,
      "eyeColor": "green",
      "name": "Freeman Coffey",
      "gender": "male",
      "company": "AQUAFIRE",
      "email": "freemancoffey@aquafire.com",
      "phone": "+1 (999) 482-2490",
      "address": "811 Doscher Street, Kilbourne, Alabama, 2368",
      "about": "Adipisicing laboris proident cillum consectetur. Exercitation culpa eu Lorem culpa tempor occaecat dolore officia. Officia cillum non ipsum incididunt ex consequat. Voluptate elit et id occaecat duis ad culpa culpa ut veniam voluptate eiusmod incididunt id. Sint cillum irure sit pariatur tempor magna. Nostrud est elit irure est fugiat proident et ex sunt eu nisi aliquip cillum.\r\n",
      "registered": "2017-12-24T01:38:40 -08:00",
      "latitude": -54.288737,
      "longitude": -93.524696,
      "tags": [
        "anim",
        "commodo",
        "pariatur",
        "Lorem",
        "et",
        "sit",
        "sint"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Blevins Chavez"
        },
        {
          "id": 1,
          "name": "Freida Cannon"
        },
        {
          "id": 2,
          "name": "Lilian Sullivan"
        }
      ],
      "greeting": "Hello, Freeman Coffey! You have 7 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5e51e9787f0041f642e57e27",
      "index": 3,
      "guid": "817172a2-573b-4913-8793-880c8bc861b2",
      "isActive": true,
      "balance": "$2,679.93",
      "picture": "http://placehold.it/32x32",
      "age": 38,
      "eyeColor": "blue",
      "name": "Best Boyer",
      "gender": "male",
      "company": "RETRACK",
      "email": "bestboyer@retrack.com",
      "phone": "+1 (851) 477-2144",
      "address": "135 Malta Street, Darlington, Oklahoma, 2558",
      "about": "Enim culpa incididunt laboris aliqua. Irure mollit excepteur duis id Lorem labore officia velit nulla elit irure cillum do nostrud. Tempor tempor dolor cillum eiusmod et. Occaecat nostrud duis occaecat pariatur aute eu commodo irure minim excepteur Lorem sint. Commodo do sit cillum deserunt mollit.\r\n",
      "registered": "2016-11-13T08:35:54 -08:00",
      "latitude": 88.220605,
      "longitude": 98.245982,
      "tags": [
        "pariatur",
        "consectetur",
        "quis",
        "dolore",
        "esse",
        "sunt",
        "ipsum"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Hill Rosales"
        },
        {
          "id": 1,
          "name": "Latasha Koch"
        },
        {
          "id": 2,
          "name": "Bette Burks"
        }
      ],
      "greeting": "Hello, Best Boyer! You have 7 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5e51e9782edfd3ed33fb006e",
      "index": 4,
      "guid": "c414aa90-ab1c-4823-b3e3-a3a6e3234a64",
      "isActive": false,
      "balance": "$2,963.05",
      "picture": "http://placehold.it/32x32",
      "age": 31,
      "eyeColor": "green",
      "name": "Ruiz Mckenzie",
      "gender": "male",
      "company": "HAIRPORT",
      "email": "ruizmckenzie@hairport.com",
      "phone": "+1 (879) 572-2311",
      "address": "869 Huron Street, Brazos, Palau, 2407",
      "about": "Consectetur deserunt elit cillum Lorem do. Excepteur sint fugiat aliqua eiusmod sit ipsum ea magna aute consequat cillum. Laboris esse eu Lorem amet consequat esse voluptate deserunt ipsum cupidatat ipsum nulla. Esse commodo ea dolor occaecat tempor dolor culpa aliqua exercitation laboris velit velit laboris excepteur. Ad commodo labore sit consequat pariatur non ipsum ipsum et voluptate labore.\r\n",
      "registered": "2015-07-27T04:44:15 -08:00",
      "latitude": 17.673596,
      "longitude": -142.712113,
      "tags": [
        "occaecat",
        "enim",
        "Lorem",
        "proident",
        "voluptate",
        "occaecat",
        "ipsum"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Small Obrien"
        },
        {
          "id": 1,
          "name": "Boyd Holman"
        },
        {
          "id": 2,
          "name": "Francis Albert"
        }
      ],
      "greeting": "Hello, Ruiz Mckenzie! You have 10 unread messages.",
      "favoriteFruit": "strawberry"
    }
  ]);
});
module.exports = router;
