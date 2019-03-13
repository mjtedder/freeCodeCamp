//Setup
var contacts = [{
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

// The function should check:
function lookUpProfile(name, prop) {
    // If name is an actual contact's firstName and the given property (prop) is a property of that contact.
        for (i = 0; i < contacts.length; i++) {
            if (name === contacts[i].firstName) {
                console.log('name exists!')
                if (contacts[i].hasOwnProperty(prop)) {
                    // If both are true, then return the "value" of that property.
                    console.log(contacts[i][prop])
                } else {
                    console.log('error')
                }
            }
        }
    }

// If name does not correspond to any contacts then return "No such contact"

// If prop does not correspond to any valid properties of a contact found to match name then return "No such property"

// Change these values to test your function
lookUpProfile("Harry", "likes");