export const DATA = {
    INGREDIENTS: [
        {
            id: "chocolate ice cream",
            name: "Chocolate Ice Cream",
            type: "ice_cream",
            description: "tasty",
            contains: ["cream", "milk_chocolate"]
        },
        {
            id: "m_and_ms",
            name: "M&Ms",
            type: "topping",
            contains: ["milk_chocolate"]
        },
        {
            id: "lemon",
            name: "Lemon Ice Cream",
            type: "ice_cream",
            contains: ["cream", "lemon"]
        },
        {
            id: "peanuts",
            name: "Peanuts",
            type: "topping",
            contains: ["peanuts"]
        },
        {
            id: "vanilla",
            name: "Vanilla Ice Cream",
            type: "ice_cream",
            contains: ["cream", "vanilla_extract"]
        },
        {
            id: "strawberry",
            name: "Strawberry Ice Cream",
            type: "ice_cream",
            contains: ["cream", "strawberries"]
        },
        {
            id: "caramel",
            name: "Caramel Sauce",
            type: "topping",
            contains: ["caramel"]
        },
        {
            id: "raspberry",
            name: "Raspberry Sauce",
            type: "topping",
            contains: ["raspberries"]
        }
    ],
    RECIPES: [
        {
            id: "the_basic",
            name: "The Basic",
            // Chocolate Ice Cream or Vanilla Ice Cream
            rules: ["or", "chocolate", "vanilla"]
        },
        {
            id: "chocolate_lovers",
            name: "Chocolate Lovers",
            // Chocolate Ice Cream and M&Ms and (not Strawberry Ice Cream nor Lemon Ice Cream) and Caramel Sauce
            rules: [
                "and",
                "chocolate",
                "m_and_ms",
                ["not", "strawberry", "lemon"],
                "caramel"
            ]
        },
        {
            id: "tooty_fruity",
            name: "Tooty Fruity",
            // (Lemon Ice Cream or Strawberry Ice Cream) and Raspberry Sauce and (not M&Ms nor Chocolate Ice Cream)
            rules: [
                "and",
                ["or", "lemon", "strawberry"],
                "raspberry",
                ["not", "m_and_ms", "chocolate"]
            ]
        }
    ]
};