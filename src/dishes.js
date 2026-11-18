import menu from './menu.json';

// Approved editorial selection. Null photographs remain typeset menu cards until matched.
const selection = [
  [
    "Signature Breakfast",
    "Signature Breakfast",
    "Breakfast",
    26000
  ],
  [
    "Big Day Breakfast",
    "Big Day Breakfast",
    "Breakfast",
    26000
  ],
  [
    "Classic Pancakes",
    "Classic Pancakes",
    "Breakfast",
    20000
  ],
  [
    "Banana & Nutella Waffles",
    "Banana & Nutella Waffles",
    "Breakfast",
    20000
  ],
  [
    "Egg & Bacon Avocado Toast",
    "Egg & Bacon Avocado Toast",
    "Breakfast",
    20000
  ],
  [
    "Signature Wings",
    "Signature Wings",
    "Starters",
    22000
  ],
  [
    "Signature Korean Prawns",
    "Signature Korean Prawns",
    "Starters",
    25000
  ],
  [
    "Calamari Fritti",
    "Calamari Fritti",
    "Starters",
    22000
  ],
  [
    "Signature Crispy Chicken Wrap",
    "Signature Crispy Chicken Wrap",
    "Starters",
    23000
  ],
  [
    "Signature Double Cheeseburger",
    "Signature Double Cheeseburger",
    "Mains",
    26000
  ],
  [
    "Signature Southern Fried Chicken Sandwich",
    "Signature Southern Fried Chicken",
    "Mains",
    25000
  ],
  [
    "Signature Spaghetti Bolognaise",
    "Signature Spaghetti Bolognaise",
    "Mains",
    26000
  ],
  [
    "Signature Beef & Onion Stir Fry",
    "Signature Beef & Onion Stir Fry",
    "Mains",
    26000
  ],
  [
    "Signature Prawns Coconut",
    "Signature Prawns Coconut",
    "Mains",
    32000
  ],
  [
    "Signature Claypot Kingfish",
    "Signature Claypot Kingfish",
    "Mains",
    31000
  ],
  [
    "Seafood Platter",
    "Seafood Platter",
    "Sharing",
    130000
  ],
  [
    "Mini Seafood Platter",
    "Mini Seafood Platter",
    "Sharing",
    55000
  ],
  [
    "Beef Tenderloin Steak",
    "Beef Tenderloin Steak",
    "Mains",
    49000
  ],
  [
    "Hug a Mug Feast Pizza",
    "Hug a Mug Feast",
    "Pizza & dessert",
    26000
  ],
  [
    "Banana Toffee Pudding",
    "Banana Toffee Pudding",
    "Pizza & dessert",
    18000
  ]
];
const photographs = { 'Calamari Fritti': '/photos/calamari.webp', 'Seafood Platter': '/photos/seafood.webp' };
const entries = new Map(menu.flatMap(section => section.groups.flatMap(([, items]) => items.map(item => [item[0], item]))));
export const featured = selection.map(([name, menuName, category, editorialPrice]) => {
  const [, price, description] = entries.get(menuName);
  return { name, category, description, price: Math.max(editorialPrice, price), discrepancy: editorialPrice !== price, image: photographs[name] ?? null };
});
export const signatures = [15, 0, 6, 11, 14, 19].map(index => featured[index]);
export const money = price => 'TSh ' + price.toLocaleString('en-US');
