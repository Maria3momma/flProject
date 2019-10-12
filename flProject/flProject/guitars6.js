var Guitars = [

    {
        id: 1,
        name: "Fender Stratocaster",
        item: "Electric Guitar",
        accessories: ["Amplifier", "Strings", "Tuning knobs", "Fret board", "Bridge", "How to get started book"],
        color: ["white", "red", "black", "blue", "wood grain"],
        optional: ["Strings", "Multi-color body", "Stained wood grain"],
        price: 3000,
        model: "EG6400",
        upc: 353860,
        startCount: 7326
    },


    {
        id: 2,
        name: "Gibson Les Paul",
        item: "Electric Guitar",
        accessories: ["Amplifier", "Strings", "Tuning knobs", "Fret board", "Bridge", "How to get started book"],
        color: ["white", "red", "black", "blue", "wood grain"],
        optional: ["Multi-color body", "Stained wood grain"],
        price: 3000,
        model: "EG7400",
        upc: 113532,
        startCount: 7446
    },

    {
        id: 3,
        name: "Gibson Flying V",
        item: "Electric Guitar",
        accessories: ["Amplifier", "Strings", "Tuning knobs", "Fret board", "Bridge", "How to get started book"],
        color: ["white", "red", "black", "blue", "wood grain"],
        Optional: ["Multi-color body", "Stained wood grain"],
        price: 3000,
        model: "EG8600",
        upc: 113643,
        startCount: 3398
    },

    {
        id: 4,
        name: "Dreadnought",
        item: "Acoustic Guitar",
        accessories: ["Strings", "Tuning knobs", "Fret board", "Bridge", "How to get started book"],
        color: ["white", "red", "black", "blue", "wood grain"],
        optional: ["Multi-color body", "Stained wood grain"],
        price: 3000,
        model: "AG3219",
        upc: 353401,
        startCount: 9753
    },

    {
        id: 5,
        name: "Parlor",
        item: "Acoustic Guitar",
        accessories: ["Strings", "Tuning knobs", "Fret board", "Bridge", "How to get started book"],
        color: ["white", "red", "black", "blue", "wood grain"],
        optional: ["Multi-color body", "Stained wood grain"],
        price: 3000,
        model: "AG3319",
        upc: 353652,
        startCount: 8647
    },

    {
        id: 6,
        name: "Auditorium",
        item: "Acoustic Guitar",
        accessories: ["Strings", "Tuning knobs", "Fret board", "Bridge", "How to get started book"],
        color: ["white", "red", "black", "blue", "wood grain"],
        optional: ["Multi-color body", "Stained wood grain"],
        price: 3000,
        model: "AG4019",
        upc: 353860,
        startCount: 7326
    }
];


Guitars.forEach(function (Guitars) {
    console.log(Guitars.accessories)
});





/*Basic solid body colors
Basic multi-color body colors
Optional stained to show the wood grain body style
Optional solid body colors for an additional fee
Optional type of strings for an additional fee*/