import React, { useState, useRef, useEffect } from 'react';
import './index.css';
import logo from './assets/logo.png';

// Generated dish images
import imgParatha from './assets/dish_paratha.png';
import imgQehwa from './assets/matka_chai_logo.jpg';
import imgFries from './assets/dish_fries.png';
import imgSandwiches from './assets/dish_sandwiches.png';
import imgFrenchFood from './assets/dish_french_food.png';
import imgMexicanFood from './assets/dish_mexican_food.png';
import imgBiryani from './assets/dish_biryani.png';
import imgWildFlour from './assets/wild_flour_logo.png';
import imgFluffyChef from './assets/the_fluffy_chef_Logo.jpeg';


// ─── Dish Filter Categories ───
const dishCategories = [
  { id: 'all', name: "All", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", emoji: "🍽️" },
  { id: 'bbq', name: "BBQ & Grill", image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&h=300&fit=crop", emoji: "🔥" },
  { id: 'burgers', name: "Burgers", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop", emoji: "🍔" },
  { id: 'pizza', name: "Pizza", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop", emoji: "🍕" },
  { id: 'tacos', name: "Tacos & Mexican", image: imgMexicanFood, emoji: "🌮" },
  { id: 'fries', name: "Fries", image: imgFries, emoji: "🍟" },
  { id: 'pasta', name: "Pasta", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop", emoji: "🍝" },
  { id: 'asian', name: "Asian / Wok", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop", emoji: "🥡" },
  { id: 'wraps', name: "Wraps & Rolls", image: imgSandwiches, emoji: "🌯" },
  { id: 'desserts', name: "Desserts", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop", emoji: "🧁" },
  { id: 'kunafa', name: "Kunafa & Sweets", image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400&h=300&fit=crop", emoji: "🍯" },
  { id: 'coffee', name: "Coffee", image: imgQehwa, emoji: "☕" },
  { id: 'boba', name: "Boba Tea", image: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=300&fit=crop", emoji: "🧋" },
  { id: 'sushi', name: "Japanese / Sushi", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop", emoji: "🍣" },
  { id: 'pakistani', name: "Pakistani", image: imgBiryani, emoji: "🇵🇰" },
  { id: 'continental', name: "Continental", image: imgFrenchFood, emoji: "🍳" },
  { id: 'paratha', name: "Paratha", image: imgParatha, emoji: "🫓" },
];

// ─── Real Creek Walk DHA Karachi Restaurants ───
const restaurantsData = [
  // ── Main Food Carts & Grills ──
  {
    id: 17,
    name: "Matka Chai",
    type: "Matka Chai",
    category: "Main Food Carts & Grills",
    tags: ['coffee', 'pakistani', 'paratha'],
    specialty: "Authentic Matka Chai, Clay Pot Biryani, and Traditional Handi",
    cuisines: ["Pakistani", "Tea", "Desi"],
    dishes: [
      "Sabz Chai", "Matka Chai", "Kashmiri Chai", "Beef Nali Biryani",
      "Chicken White Handi", "Puri Paratha", "Matka Lemon Cocktail"
    ],
    whatsapp: "+923345588889",
    menuLink: "#",
    orderLink: "#",
    rating: 4.8,
    priceRange: "$$",
    isPopular: true,
    fullMenu: [
      {
        section: "Matka Chai",
        items: [
          { name: "Sabz Chai", price: "Rs315", desc: "Refreshing green tea, offering a light, mild flavor & known for its invigorating properties" },
          { name: "Honey Lemon Chai", price: "Rs375", desc: "Refreshing tea infused with natural honey & a hint of zesty lemon for a soothing flavor" },
          { name: "Malai Badam Chai", price: "Rs375", desc: "Creamy tea blended with rich malai, crunchy almonds, offering a nutty & decadent flavor" },
          { name: "Indian Masala Chai", price: "Rs315", desc: "Robust black tea brewed with a blend of aromatic Indian spices for a strong & flavorful experience" },
          { name: "Cinnamon Chai", price: "Rs315", desc: "Warming tea infused with aromatic cinnamon, providing a comforting & sweet spicy essence" },
          { name: "Matka Chai", price: "Rs250", desc: "A traditional tea, slowly brewed, served in an earthy clay pot for a distinct aroma & taste" },
          { name: "Elaichi Chai", price: "Rs315", desc: "Aromatic tea brewed with fragrant green cardamom pods, providing a warm & spicy flavor" },
          { name: "Chocolate Chai", price: "Rs375", desc: "A sweet, comforting chai infused with rich chocolate, providing a delightful & warm beverage" },
          { name: "Kashmiri Chai", price: "Rs375", desc: "A pink, creamy tea, often garnished with crushed nuts, offering a rich & subtly sweet taste" },
          { name: "Zafran Chai", price: "Rs375", desc: "Exquisite tea flavored with delicate saffron strands, offering a luxurious & distinct taste" }
        ]
      },
      {
        section: "Beverages",
        items: [
          { name: "Pepsi - 345 Ml", price: "Rs120", desc: "Chilled carbonated beverage with a refreshing and mildly sweet flavor." },
          { name: "Mirinda - 345 Ml", price: "Rs120", desc: "Carbonated orange soda with a refreshing and mildly sweet flavor." },
          { name: "7up - 345 Ml", price: "Rs120", desc: "Bubbly carbonated beverage with a refreshing citrus flavor." },
          { name: "Mountain Dew - 345 Ml", price: "Rs120", desc: "American style citrus beverage with a refreshing and mildly sweet flavor" }
        ]
      },
      {
        section: "Matka Biryani",
        items: [
          { name: "Beef Nali Biryani", price: "Rs1,950", desc: "A special beef nali biryani, prepared in a clay pot, featuring succulent bone marrow & aromatic rice" },
          { name: "Chicken Biryani", price: "Rs1,560", desc: "A flavorful chicken biryani, slow cooked in a traditional clay pot for tender meat & aromatic rice" },
          { name: "Chicken White Biryani", price: "Rs1,950", desc: "A delicate white chicken biryani, prepared in a clay pot & offering a mild yet rich flavor profile with tender chicken" },
          { name: "Beef Biryani", price: "Rs1,950", desc: "Rich beef biryani, slow cooked in a traditional clay pot with fragrant spices & tender beef" }
        ]
      },
      {
        section: "Handi",
        items: [
          { name: "Chicken White Handi", price: "Rs1,950", desc: "A creamy white chicken handi & slow cooked to perfection with mild spices for a delicate flavor" },
          { name: "Kofta Kebab Handi", price: "Rs2,340", desc: "Delicate meatballs kofta cooked in a rich, flavorful curry & presented warm in a traditional handi" },
          { name: "Chicken Reshmi", price: "Rs2,080", desc: "Tender chicken pieces in a rich, creamy, mildly spiced sauce, cooked & served in a traditional handi" },
          { name: "Chicken Handi", price: "Rs1,950", desc: "Tender chicken cooked in a traditional handi with rich spices & a creamy sauce" },
          { name: "Seekh Kebab Handi", price: "Rs2,080", desc: "Grilled minced meat seekh kebabs simmered in a savory, aromatic gravy, cooked & served in a traditional handi" }
        ]
      },
      {
        section: "Sides",
        items: [
          { name: "Puri Paratha", price: "Rs65", desc: "A delightful blend of puri, paratha, deep fried to a golden crisp, offering a rich & flaky texture" },
          { name: "Garlic Naan", price: "Rs195", desc: "Fluffy naan infused with fresh garlic, cilantro & baked to perfection in a tandoor for a fragrant accompaniment" },
          { name: "Rogni Naan", price: "Rs195", desc: "A rich, fluffy naan, brushed with butter, often topped with sesame seeds & baked fresh in a tandoor" },
          { name: "Naan", price: "Rs105", desc: "Soft, fluffy leavened flatbread, freshly baked in a tandoor & ideal for accompanying any meal" }
        ]
      },
      {
        section: "Matka Lemon Session",
        items: [
          { name: "Cocktail", price: "Rs390", desc: "A delightful blend of various fresh fruit juices, creating a sweet, refreshing mixed & served chilled" },
          { name: "Anar", price: "Rs260", desc: "A refreshing beverage made from fresh pomegranates, offering a sweet & tangy flavor with a vibrant color" },
          { name: "Falsa", price: "Rs260", desc: "A unique, tart beverage made from the tropical falsa berry, offering a distinctive sweet & sour taste" },
          { name: "Leechy Delux", price: "Rs260", desc: "An exotic, sweet beverage featuring the delicate, fragrant taste of lychee & a delightful tropical refreshment" },
          { name: "Lemon", price: "Rs260", desc: "A refreshing beverage made from fresh lemons, offering a zesty & tangy taste to quench your thirst" },
          { name: "Blue Berry", price: "Rs260", desc: "A cool, sweet beverage infused with the natural flavor of blueberries, providing a fruity & vibrant taste" }
        ]
      }
    ]
  },
  {
    id: 18,
    name: "Wildflour Bistro",
    type: "Bistro & Cafe",
    category: "DA Creek Club / Marina",
    image: imgWildFlour,
    tags: ['continental', 'coffee', 'desserts', 'burgers', 'pasta'],
    specialty: "Gourmet Breakfast, Signature Mains, and Copper Kettle Collection",
    cuisines: ["Continental", "Bistro", "Breakfast"],
    dishes: [
      "Egg White Omelette", "Brioche French Toast", "Butter Croissant",
      "Mac & Cheese", "Classic Entrecote", "Chicken Chuck", "Caked Alaska"
    ],
    whatsapp: "+923000000000",
    menuLink: "#",
    orderLink: "#",
    rating: 4.9,
    priceRange: "$$$",
    isPopular: true,
    fullMenu: [
      {
        section: "Eggs",
        items: [
          { name: "Egg White Omelette", price: "Rs 1650", desc: "Prepared with spinach, mushrooms & cheese." },
          { name: "Cheese & Mushroom Omelette", price: "Rs 3650", desc: "A fluffy omelette folded with sautéed mushrooms and melted cheese for a simple, comforting classic." },
          { name: "Omelette Mexicana with Chili Con Carne", price: "Rs 4050", desc: "A bold omelette filled with shredded cheese peppers, and our beef-and-bean chili." },
          { name: "The Bear", price: "Rs 1450", desc: "Creamy garlic herbed cream cheese filled omelette with soft folds, silky texture, and richness. Inspired by the famous tv moment" },
          { name: "Shakshuka", price: "Rs 1450", desc: "A rich tomato-pepper stew topped with baked eggs. Served with rustic bread." },
          { name: "Fried Eggs with Wildflour Chili Crisp", price: "Rs 1850", desc: "Sunny-side eggs drizzled with our signature chili crisp." },
          { name: "Gourmet Platter", price: "Rs 3350", desc: "Creamy, slow-cooked scrambled eggs with baked beans, beef bacon, sausages & hashbrowns." },
          { name: "Herb Omelette", price: "Rs 1950", desc: "A fluffy omelette folded with parsley, chives & tarragon." },
          { name: "Eggs Benedict with Smoked Salmon", price: "Rs 3250", desc: "Poached eggs on brioche with silky hollandaise" }
        ]
      },
      {
        section: "Signature Breakfast Plates",
        items: [
          { name: "Brioche French Toast", price: "Rs 1850", desc: "Thick slices of brioche caramelized to golden perfection. Served with a berry compote and vanilla cream." },
          { name: "Cinnamon Apple French Toast", price: "Rs 2850", desc: "Fluffy brioche soaked in warm cinnamon custard, topped with caramelized apples and a touch of maple." },
          { name: "Wildflour Maple Pancakes", price: "Rs 2850", desc: "Light, buttery pancakes finished with rich maple syrup — elegant, soft, and effortlessly indulgent." },
          { name: "Hazelnut Chocolate Banana Waffles", price: "Rs 2250", desc: "Crisp golden waffles loaded with hazelnut chocolate and fresh banana." },
          { name: "Southern Hot Honey Chicken & Waffles", price: "Rs 3500", desc: "Crispy southern fried chicken served on warm golden waffles, finished with our spicy hot-honey butter." },
          { name: "Crepe Suzette", price: "Rs 1450", desc: "A delicate French crêpe glazed in buttery caramel-orange sauce, finished with fresh zest and a hint of vanilla." },
          { name: "K-Town Galette", price: "Rs 2350", desc: "A buckwheat galette filled with a soft desi omelette, green chillies, tomatoes, onions, and herbs. Classic Karachi flavours, reimagined the Wildflour way." }
        ]
      },
      {
        section: "Viennoiseries & Breads",
        items: [
          { name: "Butter Croissant", price: "Rs 650", desc: "Classic flaky all-butter croissant." },
          { name: "Almond Croissant", price: "Rs 760", desc: "Buttery, flaky pastry filled with velvety almond cream and topped with a golden layer of toasted almonds." },
          { name: "Pain au Chocolat", price: "Rs 1100", desc: "Golden layers wrapped around rich dark chocolate." },
          { name: "Traditional Baguette", price: "Rs 1500", desc: "Served with butter, homemade jam & honey." },
          { name: "Plain Bagel Cream Cheese", price: "Rs 850", desc: "A warm, toasty bagel generously slathered in silky cream cheese." },
          { name: "Bagel Egg and Cheese", price: "Rs 1850", desc: "Fluffy egg and melted cheese tucked into a perfectly toasted bagel." },
          { name: "Lox Bagel", price: "Rs 4450", desc: "Bagel spread with cream cheese and topped with thinly sliced lox , usually garnished with red onions and capers" },
          { name: "Bread Basket", price: "Rs 1450", desc: "A mix of fresh bread rolls, focaccia, ciabatta, and bread sticks." }
        ]
      },
      {
        section: "Lighter Options",
        items: [
          { name: "Oatmeal Cup", price: "Rs 2950", desc: "Warm almond-milk oatmeal topped with berry compote." },
          { name: "Honey Yogurt & Granola", price: "Rs 1800", desc: "Creamy yogurt with Wildflour honey and house granola." },
          { name: "Seasonal Fresh Fruit Salad", price: "Rs 1250", desc: "A refreshing mix of seasonal fruits." },
          { name: "Breakfast for Two", price: "Rs 6950", desc: "A shared morning tray with: Assorted viennoiseries, Two eggs per person (any style), Seasonal fresh fruit, Your choice of fresh juice or coffee" }
        ]
      },
      {
        section: "Add-ons",
        items: [
          { name: "Smoked Salmon", price: "Rs 1800", desc: "" },
          { name: "Beef Bacon", price: "Rs 1500", desc: "" },
          { name: "Beef Sausages - 2 Pieces", price: "Rs 800", desc: "" }
        ]
      },
      {
        section: "Soups & Salads",
        items: [
          { name: "House Salad", price: "Rs 700", desc: "Crisp rocket and juicy cherry tomatoes dressed in a delicate balsamic vinaigrette." },
          { name: "Classic Chicken Noodle Soup", price: "Rs 1200", desc: "Tender chicken, soft noodles, and garden vegetables simmered in a flavorful broth — soothing, nourishing, and always a favorite." },
          { name: "Creamy Chicken & Mushroom Soup", price: "Rs 1250", desc: "The soup that understands you — tender chicken, golden mushrooms, and a velvety cream base that tastes like comfort, competence, and good decisions." },
          { name: "Mulligatawny Soup", price: "Rs 950", desc: "An Anglo-Indian favorite with warming spices, lentils, and a touch of coconut — soulful, fragrant, and beautifully balanced." },
          { name: "Creamy Tomato Soup", price: "Rs 850", desc: "A smooth, comforting classic made with ripe tomatoes, caramelized garlic, and a hint of basil — simple, timeless, and deeply satisfying." },
          { name: "Pumpkin Curry Soup", price: "Rs 850", desc: "A velvety pumpkin soup gently infused with warm curry spices — warm, aromatic, and beautifully balanced." },
          { name: "Seafood Chowder", price: "Rs 1050", desc: "A hearty, creamy chowder with fresh fish, prawns, and seasonal vegetables — rich, cozy, and full of flavor." },
          { name: "Roasted Chicken Rice Paper Rolls", price: "Rs 1950", desc: "Oriental spice–marinated roasted chicken, pulled and rolled with fresh lettuce and roasted peanuts in a tangy sesame dressing." },
          { name: "Greek Farmer Salad", price: "Rs 2450", desc: "A traditional mix of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and creamy feta cheese — tossed in oregano and olive oil." },
          { name: "Crushed Potato Salad", price: "Rs 1950", desc: "Crispy smashed potatoes tossed in a creamy, herbed dressing with just the right amount of tang." },
          { name: "Caprese Salad", price: "Rs 3950", desc: "Fresh mozzarella, ripe tomatoes, and basil drizzled with silky balsamic — simple, bright, and unmistakably Italian." },
          { name: "Caesar Salad", price: "Rs 2400", desc: "A classic Caesar with crisp romaine and arugula, tossed in our creamy Caesar dressing and topped with shaved Parmesan and homemade garlic croutons. (Add Chicken | 900)" },
          { name: "Charred Corn & Quinoa Salad", price: "Rs 2450", desc: "Smoky corn and hearty quinoa mixed with sundried tomatoes, jalapeño, and seasonal vegetables — finished with a fresh basil dressing. (Add Chicken | 900)" },
          { name: "French Medallion Steak Salad", price: "Rs 3800", desc: "Tender marinated beef medallions, seared to perfection and served over crisp icebergs and arugula, feta cheese and with our Dijon shallot steakhouse dressing." }
        ]
      },
      {
        section: "Starters",
        items: [
          { name: "Seared Scallops in Lemon Butter", price: "Rs 9050", desc: "Golden, pan-seared scallops finished with bright lemon-butter sauce." },
          { name: "Harissa Prawns", price: "Rs 3450", desc: "Jumbo prawns seared in smoky harissa butter — fiery, fragrant, and full of Wildflour flair." },
          { name: "Crispy Zucchini Fries with Lemon Aioli", price: "Rs 2350", desc: "Thin-cut zucchini lightly fried until crisp and golden, served with a bright lemon aioli — the lighter, fancier cousin of regular fries." },
          { name: "Dynamite Bites", price: "Chicken Rs 1800 | Prawns Rs 2950", desc: "Crispy, golden bites tossed in our signature dynamite sauce — creamy, spicy, and addictive." },
          { name: "Crispy Poppers", price: "Chicken Rs 1800 | Fish Rs 2250", desc: "Golden, bite-size poppers, lightly seasoned and fried until crisp, served with our house dipping sauce." },
          { name: "Burrata with Fresh Tomatoes and Basil", price: "Rs 3750", desc: "Creamy burrata served over fresh tomatoes, basil, and a drizzle of balsamic vinegar and olive oil." },
          { name: "Flash-Fried Chilli Calamari", price: "Rs 2550", desc: "Light, crisp calamari tossed in Wildflour’s chilli seasoning — addictive, golden, and gone before you know it." },
          { name: "Buffalo Wings", price: "Rs 5500", desc: "Six crispy chicken wings coated in our tangy buffalo glaze — bold, spicy, and dangerously easy to finish." },
          { name: "Truffled Mushroom Toast", price: "Rs 2550", desc: "Creamy truffled mushrooms piled on toasted brioche and finished with chives." },
          { name: "Beef Carpaccio", price: "Rs 2800", desc: "Paper thin slices of premium beef drizzled with lemon oil and Parmesan." }
        ]
      },
      {
        section: "Signature Mains",
        items: [
          { name: "Poulet Rôti (½ Chicken)", price: "Rs 6550", desc: "French-style roast chicken served with golden potatoes and its natural jus." },
          { name: "Classic Entrecote", price: "Rs 5850", desc: "Juicy, grilled steak served with Wildflour herb butter and crisp golden fries, finished with our signature entrecote sauce." },
          { name: "Korean Beef Bowl", price: "Rs 4250", desc: "Sweet, savory Korean-style beef served over warm rice with pickled vegetables, scallions, and sesame." },
          { name: "Veal Milanese with Rocket", price: "Rs 6550", desc: "Tender veal cutlet, breaded and fried to a perfect golden crunch, served with a fresh rocket salad and shaved Parmesan." },
          { name: "Moroccan Chicken with Garlic Rice", price: "Rs 2850", desc: "Warmly spiced Moroccan-style grilled chicken served with fragrant garlic rice." },
          { name: "Chargrilled Jalapeño Chicken with Garlic Rice", price: "Rs 2850", desc: "Juicy chargrilled chicken with a jalapeño kick, paired with aromatic garlic rice." },
          { name: "Pan-Seared Fish with Lemon Butter Sauce", price: "Rs 3000", desc: "Delicately pan-seared fish finished with a bright, silky lemon butter sauce." },
          { name: "Risotto with Grilled Chicken", price: "Rs 3150", desc: "Creamy risotto finished with tender grilled chicken and delicate herbs." },
          { name: "Zurich-Style Veal & Mushrooms", price: "Rs 7450", desc: "Tender veal strips cooked in a silky Swiss cream sauce with sautéed mushrooms, finished with a hint of lemon and served with crisp golden rösti — an Alpine classic." },
          { name: "Salmon a la Hollandaise", price: "Rs 11450", desc: "Poached or pan-seared salmon, finished with classic hollandaise and served with steamed, seasonal vegetables." },
          { name: "The Wildflour Gruyère Quiche", price: "Rs 3950", desc: "Our signature buttery quiche made with aged Gruyère and your choice of Three Cheese, Chicken & Mushroom, or Spinach — served warm with a crisp green salad." },
          { name: "Chicken Milanese with Rocket", price: "Rs 4950", desc: "Crisp, golden, pan-fried chicken fillet served with a bright rocket & Parmesan salad — simple, fresh, and endlessly satisfying." },
          { name: "Chargrilled Fillet with Pepper Sauce", price: "Rs 1850", desc: "Tender chargrilled chicken fillet served with a rich, cracked pepper sauce." },
          { name: "Lemon Parmesan Risotto with Garlic Butter Prawns", price: "Rs 4750", desc: "Creamy risotto finished with lemon zest and Parmigiano Reggiano, topped with jumbo prawns sautéed in garlic butter." },
          { name: "Pan-Seared Sesame Tofu with Jasmine Rice", price: "Rs 3750", desc: "Light, fresh and delicious — tender tofu pan-seared in fragrant sesame oil, served over warm jasmine rice and topped with bright scallions and a sprinkle of sesame seeds." }
        ]
      },
      {
        section: "Burgers & Sandwiches",
        items: [
          { name: "Croissant Sandwich", price: "Chicken Rs 2850 | Tuna Rs 4250", desc: "Your choice of tuna salad or chicken salad folded into a flaky, buttery croissant." },
          { name: "Old-Fashioned Grilled Cheese", price: "Rs 2750", desc: "Golden, crisp, butter-toasted brioche bread filled with a generous melt of cheddar, mozzarella and Gruyère. Best paired with Tomato Soup." },
          { name: "Panini Pesto Chicken", price: "Rs 2700", desc: "Warm grilled panini stuffed with basil pesto, seasoned chicken, fresh Mozzarella cheese, and roasted tomatoes." },
          { name: "Panini Sundried Tomato & Cheese", price: "Rs 1850", desc: "A vegetarian favourite — fresh Mozzarella cheese, sundried tomatoes, herbs, and a touch of olive oil pressed in a golden, crispy panini." },
          { name: "Ciabatta Chicken Pesto Burrata Sandwich", price: "Rs 5750", desc: "Warm grilled ciabatta layered with Wildflour basil pesto, juicy chicken, creamy burrata, and toasted hazelnuts." },
          { name: "Mediterranean Romesco Foccacia", price: "Rs 4850", desc: "House focaccia layered with roasted red pepper romesco, fresh mozzarella, and peppery rocket." },
          { name: "Crispy Buffalo Chicken Burger", price: "Rs 5850", desc: "Crispy fried chicken tossed in spicy Buffalo sauce, layered with lettuce, pickles, and a cool ranch dressing." },
          { name: "The Old School Club Sandwich", price: "Rs 3950", desc: "A triple-stacked classic: roasted chicken, lettuce, tomatoes, cheese, and crispy beef bacon with a smear of mayo — toasted to perfection." },
          { name: "Truffle Grilled Chicken Focaccia", price: "Rs 2850", desc: "Grilled chicken layered on toasted house focaccia with subtle truffle notes, served with your choice of lemon butter or hollandaise." },
          { name: "Smoked Salmon Club", price: "Rs 11850", desc: "Layers of smoked salmon, zesty cream cheese, lettuce, fresh greens, and cucumbers in a classic club-style build." },
          { name: "Wildflour Cheeseburger", price: "Rs 6050", desc: "Juicy seasoned patty topped with melted cheese, lettuce, pickles, and our signature sauce - served on soft potato bun." },
          { name: "Chimichurri Steak Sandwich", price: "Rs 4250", desc: "Perfectly served steak sliced tender and dressed in chimichurri, layered with crisp greens and creamy mustard aioli." },
          { name: "The Prawn Roll", price: "Rs 4250", desc: "Fresh prawns lightly dressed in lemon mayo with chives, celery, and a hint of paprika — tucked into a soft, buttery roll." }
        ]
      },
      {
        section: "Copper Kettle Collection",
        items: [
          { name: "Basket of French Fries", price: "Rs 950", desc: "The classic feature! Not just any fry. Just as you remember." },
          { name: "French Connection", price: "Beef Rs 3950 | Chicken Rs 2750", desc: "Steak covered with scrumptious French mushroom sauce served with fries and seasonal vegetables." },
          { name: "Steak A Claim", price: "Beef Rs 3950 | Chicken Rs 2750", desc: "Delicately seasoned steak topped with in rich creamy white mushroom and thyme sauce, served with mixed vegetables." },
          { name: "Chili Chicken", price: "Rs 2950", desc: "Boneless chicken marinated in yummy chili sauce, served with egg fried rice, and coleslaw." },
          { name: "Henny Penny", price: "Rs 3250", desc: "Boneless Chicken stroganoff in fresh cream and mushrooms, served with generous portion of fried rice." },
          { name: "Straight from the Net", price: "Rs 3950", desc: "Jumbo prawns crumbed & deep fried with tartar sauce, served with fries & coleslaw." },
          { name: "Italian Casanova", price: "Rs 3450", desc: "Grilled chicken breast topped with melted cheese, served with veggies & garlic beard." },
          { name: "Chicken Chuck", price: "Rs 4950", desc: "Juicy tender chicken breast stuffed with mushrooms and shaved cheddar cheese, then lightly breaded & topped with sesame butter sauce, served with mashed potatoes and crunchy coleslaw." },
          { name: "Son of a Botch", price: "Beef Rs 2650 | Chicken Rs 1950", desc: "Finest ground beef or chicken burger with chili and fries." },
          { name: "Bird in Hand", price: "Rs 2900", desc: "Golden crumbed battered breast of chicken burger, topped with salsa sauce, tomato slices, and lettuce." },
          { name: "The Politician", price: "Rs 3450", desc: "Ingredients change according to the chef’s whim. You tell us what you want, but since promises are meant to be broken, we will give our surprise." },
          { name: "Something Fishy", price: "Rs 2950", desc: "Deep fried crumbed fish fingers, served with tartar sauce, fries, and coleslaw." },
          { name: "Fisherman’s Catch", price: "Rs 3950", desc: "Deep fried crumbed fish & prawns served with fries & tartar sauce." }
        ]
      },
      {
        section: "Pasta",
        items: [
          { name: "Creamy Seafood Pasta", price: "Rs 3150", desc: "Linguini tossed with mixed seafood in a light, flavorful sauce." },
          { name: "Baked Chicken Macaroni", price: "Rs 6050", desc: "Creamy baked macaroni folded with tender chicken and golden cheese." },
          { name: "Aglio Olio", price: "Rs 2450", desc: "Spaghetti tossed with garlic, chili flakes, olive oil, and parsley." },
          { name: "Penne Arabiata", price: "Chicken Rs 2750 | Prawns Rs 3250", desc: "Penne pasta in a bold, spicy tomato sauce with garlic, basil, and a touch of heat." },
          { name: "Bolognese", price: "Rs 3250", desc: "Slow-cooked beef bolognese simmered with tomatoes, aromatics, and Parmesan — tossed with al dente pasta and finished with fresh basil." },
          { name: "Lasagna", price: "Rs 3750", desc: "Layers of silky pasta sheets, slow-braised beef ragu, béchamel, mozzarella, and Parmesan baked to golden perfection." },
          { name: "Mac & Cheese", price: "Rs 4450", desc: "A creamy, three-cheese sauce folded through tender macaroni, finished with a buttery crumb topping." }
        ]
      },
      {
        section: "Dessert",
        items: [
          { name: "Panacotta with berry compote", price: "Rs 1200", desc: "Silky vanilla panna cotta topped with a bright, tangy berry compote." },
          { name: "Mousse Au Chocolat", price: "Rs 2950", desc: "Rich dark chocolate mousse" },
          { name: "Caked Alaska", price: "Rs 1600", desc: "Needs no introduction. Copper Kettle’s signature dessert for a decade. It is scrumptious!" },
          { name: "Black Magic", price: "Rs 1550", desc: "Hot brownie, too tempting to refuse, topped with vanilla ice-cream and covered with chocolate sauce." },
          { name: "The Ultimate Chocolate Cake", price: "Rs 2250", desc: "Signature indulgence" },
          { name: "Tiramisu Maison", price: "Rs 2450", desc: "House version of Italy’s favorite dessert" }
        ]
      }
    ]
  },
  {
    id: 19,
    name: "The Fluffy Chef",
    type: "Burgers",
    category: "Main Food Carts & Grills",
    image: imgFluffyChef,
    tags: ['burgers', 'fries'],
    specialty: "Karachi's Best Smash Burgers & Viral Lacha Paratha Burgers",
    cuisines: ["Burgers", "Fast Food"],
    dishes: [
      "Viral Lacha Paratha Beef Smash", "American Classic", "Butter Burger",
      "Crispy Chicken", "Plain Fries", "Masala Wings"
    ],
    whatsapp: "+923058446854",
    menuLink: "#",
    orderLink: "#",
    rating: 4.8,
    priceRange: "$$",
    isPopular: true,
    fullMenu: [
      {
        section: "Combo Meals",
        items: [
          { name: "American Classic Combo", price: "Rs 1,595", desc: "" },
          { name: "Smokey BBQ Double Beef Smash Combo", price: "Rs 1,595", desc: "" },
          { name: "Oklohama Double Beef Smash Combo", price: "Rs 1,595", desc: "" },
          { name: "Chilli Double Beef Smash Combo", price: "Rs 1,595", desc: "" },
          { name: "Crispy Chicken Combo", price: "Rs 995", desc: "" },
          { name: "Honey Chipotle Combo", price: "Rs 1,195", desc: "" },
          { name: "Korean Chicken Combo", price: "Rs 1,195", desc: "" },
          { name: "Nashville Chicken Combo", price: "Rs 1,049", desc: "" }
        ]
      },
      {
        section: "Family Deals",
        items: [
          { name: "Fluffy Family Deal 1", price: "Rs 2,899", desc: "4 Crispy Chicken Burger, 2 Fries, 4 Cold Drinks" }
        ]
      },
      {
        section: "Beef Burgers",
        items: [
          { name: "Butter Burger", price: "Rs 1,143", desc: "150 gms charcoal smoked beef patty with butter inside , house sauce , cheese , lettuce and caramelised onions and mushroom inside a toasted brioche bun." },
          { name: "OG Fluffy with Egg", price: "Rs 1,186", desc: "150 gms beef patty with house sauce, lettuce, sunny side up egg, cheese inside a toasted brioche bun ." },
          { name: "Three cheese Burger with beef bacon", price: "Rs 1,186", desc: "150 gms beef patty filled with three types of cheese inside , house sauce ,beef bacon, lettuce and relish in a toasted brioch bun" }
        ]
      },
      {
        section: "FRIES",
        items: [
          { name: "Plain Fries", price: "Rs 336", desc: "Golden, Crispy, And Lightly Seasoned, Our French Fries Are The Perfect Side Or A Satisfying Snack." },
          { name: "Masala Fries", price: "Rs 378", desc: "Crispy, Flavorful, And Packed With Spice—Our Masala Fries Are A Bold Twist On A Classic!" },
          { name: "Chipotle Fries", price: "Rs 548", desc: "Crispy Fries With Smoky Chipotle Mayo, Melted Cheese, And Seasoned Chicken For The Perfect Flavor Kick." },
          { name: "fluffy Animal Fries", price: "Rs 846", desc: "Loaded fries with mustard sauce, chopped onions, chopped tomato's, relish, beef pepperoni , smashed beef patty and mozzarella cheese on the top." },
          { name: "curly fries", price: "Rs 463", desc: "curly fries with inhouse seasoning" }
        ]
      },
      {
        section: "TENDERS",
        items: [
          { name: "Chicken Tenders", price: "Rs 548", desc: "Crispy, Juicy, And Perfectly Golden—Our Plain Tenders Are Simply Delicious!" },
          { name: "Nashville Tenders", price: "Rs 591", desc: "Crispy, Juicy Tenders Coated In Bold, Spicy Nashville Seasoning For A Fiery Kick!" },
          { name: "Buffalo Tenders", price: "Rs 591", desc: "Crispy, Juicy Tenders Tossed In Zesty Buffalo Sauce For The Perfect Spicy Kick!" },
          { name: "Korean Tenders", price: "Rs 591", desc: "Crispy Tenders Glazed In Sweet And Spicy Korean Sauce, Topped With Sesame Seeds!" }
        ]
      },
      {
        section: "BEEF SMASH BURGERS",
        items: [
          { name: "American Classic", price: "Rs 761", desc: "Double Smashed Patties With Cheese, Lettuce, Raw Onions, Tomato & Mustard Sauce" },
          { name: "Smoky BBQ", price: "Rs 761", desc: "Double Smashed Patties With Cheese, Lettuce, Sauteed Mushrooms, Onions & BBQ Sauce" },
          { name: "Oklahoma Onion Burger", price: "Rs 761", desc: "Double Beef Patties, Caramelized Onions, Melted American Cheese, Lettuce & Mustard" },
          { name: "Chilli Beef Smash", price: "Rs 786", desc: "Double Beef Patties, Chilies, Cheddar Cheese, Fresh Jalapeños, Diced Onions, & Sour Cream" },
          { name: "Viral Lacha Paratha Beef Smash", price: "Rs 931", desc: "140 gms Double beef patties ,cheese , lettuce, onions, tomato's ,relish in crispy Lacha paratha." },
          { name: "Animal Smash", price: "Rs 786", desc: "" }
        ]
      },
      {
        section: "CHICKEN BURGERS",
        items: [
          { name: "Crispy Chicken", price: "Rs 591", desc: "Juicy, Tender Chicken Fillet Golden-Brown Crust, Perfect Crunch And Flavorful" },
          { name: "Nashville Chicken", price: "Rs 676", desc: "Spicy, Crispy Chicken Paired With Cool, Crunchy Toppings, All In A Soft Brioche Bun." },
          { name: "Korean Chicken", price: "Rs 718", desc: "Juicy Chicken Fillet With Korean Spicy-Sweet Sauce, Crisp Coleslaw, & Jalapeños." },
          { name: "Honey Chipotle Chicken", price: "Rs 676", desc: "Tempting Mix Of Sweet, Smoky, And Spicy Tastes, Juicy Tasty Chicken Fillet" },
          { name: "Grilled Chicken", price: "Rs 676", desc: "Marinated Chicken Breast, Lettuce, Mushrooms, And Tomatoes, Toasted Brioche Bun" }
        ]
      },
      {
        section: "WINGS",
        items: [
          { name: "Masala Wings", price: "Rs 506", desc: "Crispy Wings Tossed In Bold, Flavorful Masala Spices For A Perfect Spicy Kick!" },
          { name: "Nashville Wings", price: "Rs 548", desc: "Crispy Wings Coated In Fiery Nashville Seasoning For A Bold, Spicy Bite!" },
          { name: "Buffalo Wings", price: "Rs 548", desc: "Crispy, Juicy Wings Drenched In Zesty Buffalo Sauce For A Bold, Tangy Heat!" },
          { name: "Korean Wings", price: "Rs 552", desc: "Crispy Wings Glazed In Sweet And Spicy Korean Sauce, Topped With Sesame Seeds!" }
        ]
      },
      {
        section: "DRINKS",
        items: [
          { name: "Cold Drinks", price: "Rs 127", desc: "" },
          { name: "Mineral Water", price: "Rs 85", desc: "500ml" }
        ]
      }
    ]
  }
];

// ─── Group labels for section headers ───
const categoryOrder = [
  "Main Food Carts & Grills",
  "Desserts, Coffee & Drinks",
  "DA Creek Club / Marina",
];

// ─── Components ───

function DishCarousel({ activeFilter, onFilterChange }) {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth } = carouselRef.current;
      if (scrollLeft <= 0) {
        carouselRef.current.scrollLeft = scrollWidth / 2;
      }
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 10) {
        carouselRef.current.scrollLeft = scrollWidth / 2;
      }
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const items = Array.from({ length: 30 }).flatMap((_, index) =>
    dishCategories.map((dish) => (
      <div
        key={`${dish.id}-${index}`}
        className={`dish-card ${activeFilter === dish.id ? 'dish-card-active' : ''}`}
        onClick={() => onFilterChange(dish.id)}
        title={`Filter by ${dish.name}`}
      >
        <span className="dish-card-label">{dish.name}</span>
        <img src={dish.image} alt={dish.name} className="dish-card-image" loading="lazy" />
        {activeFilter === dish.id && <div className="dish-card-active-indicator"></div>}
      </div>
    ))
  );

  // Start in the middle so user can infinitely scroll in both directions
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = carouselRef.current.scrollWidth / 2;
    }
  }, []);

  return (
    <div className="dish-carousel-wrapper">
      <button className="carousel-arrow left" onClick={scrollLeft} aria-label="Scroll left">
        &#8249;
      </button>
      <div className="dish-carousel" ref={carouselRef}>
        <div className="dish-carousel-track" aria-hidden="false">
          {items}
        </div>
      </div>
      <button className="carousel-arrow right" onClick={scrollRight} aria-label="Scroll right">
        &#8250;
      </button>
    </div>
  );
}

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.3;
  return (
    <span className="star-rating" title={`${rating} out of 5`}>
      {'★'.repeat(fullStars)}
      {hasHalf && '½'}
      <span className="star-value">{rating}</span>
    </span>
  );
}

const getRestaurantImage = (tags) => {
  if (!tags) return "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop";
  if (tags.includes('tacos') || tags.includes('mexican')) return imgMexicanFood;
  if (tags.includes('fries')) return imgFries;
  if (tags.includes('wraps') || tags.includes('sandwiches')) return imgSandwiches;
  if (tags.includes('asian') || tags.includes('chinese')) return "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&h=400&fit=crop";
  if (tags.includes('bbq')) return "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&h=400&fit=crop";
  if (tags.includes('pizza')) return "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop";
  if (tags.includes('burgers')) return "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop";
  if (tags.includes('coffee')) return imgQehwa;
  if (tags.includes('desserts')) return "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&h=400&fit=crop";
  if (tags.includes('kunafa')) return "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&h=400&fit=crop";
  if (tags.includes('sushi')) return "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&h=400&fit=crop";
  if (tags.includes('pakistani') || tags.includes('paratha')) return imgBiryani;
  if (tags.includes('continental')) return imgFrenchFood;
  return "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop";
};

function RestaurantCard({ restaurant, onViewMenu }) {
  return (
    <div className="grid-restaurant-card">
      <div
        className="grid-rc-image-container"
        onClick={() => onViewMenu(restaurant.id)}
        style={{ cursor: 'pointer' }}
        title={`View ${restaurant.name} Menu`}
      >
        <img src={restaurant.image || getRestaurantImage(restaurant.tags)} alt={restaurant.name} className="grid-rc-image" loading="lazy" />
        <div className="grid-rc-image-overlay">
          <span className="grid-rc-image-overlay-text">📋 View Menu</span>
        </div>
      </div>
      <div className="grid-rc-content">
        <div className="grid-rc-header">
          <h3 className="grid-rc-name">{restaurant.name}</h3>
          <div className="grid-rc-rating">
            <span className="grid-rc-star">★</span> {restaurant.rating.toFixed(1)} <span className="grid-rc-rating-max">/ 5</span>
          </div>
        </div>
        <div className="grid-rc-subtitle">{restaurant.type}</div>
        <div className="grid-rc-desc">{restaurant.specialty}</div>
        <div className="grid-rc-actions">
          <button onClick={(e) => { e.preventDefault(); onViewMenu(restaurant.id); }} className="grid-rc-btn">Menu</button>
          <a href={`https://wa.me/${restaurant.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="grid-rc-btn whatsapp">WhatsApp</a>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');
  const [expandedRestaurant, setExpandedRestaurant] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleRestaurantsClick = (e) => {
    e.preventDefault();
    setCurrentView('restaurants');
    setExpandedRestaurant(null);
    setActiveFilter('all');
    setSearchQuery('');
    setSelectedMenu(null);
  };

  const handleOffersClick = (e) => {
    e.preventDefault();
    setCurrentView('offers');
  };

  const handleBrandClick = (e) => {
    e.preventDefault();
    setCurrentView('brand');
  };

  const handleBackClick = () => {
    if (currentView === 'menu') {
      setCurrentView('restaurants');
      setSelectedMenu(null);
    } else {
      setCurrentView('home');
      setExpandedRestaurant(null);
      setActiveFilter('all');
      setSearchQuery('');
    }
  };

  const handleViewMenu = (id) => {
    setSelectedMenu(id);
    setCurrentView('menu');
  };

  const toggleRestaurant = (id) => {
    setExpandedRestaurant(expandedRestaurant === id ? null : id);
  };

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setExpandedRestaurant(null);
  };

  // Filter restaurants based on active filter and search query
  const filteredRestaurants = restaurantsData.filter(r => {
    const matchesFilter = activeFilter === 'all' || r.tags.includes(activeFilter);
    const searchLower = searchQuery.trim().toLowerCase();
    const matchesFullMenu = r.fullMenu
      ? r.fullMenu.some(section => section.items.some(item => item.name.toLowerCase().includes(searchLower)))
      : false;
    const matchesSearch = !searchLower ||
      r.name.toLowerCase().includes(searchLower) ||
      r.specialty.toLowerCase().includes(searchLower) ||
      r.type.toLowerCase().includes(searchLower) ||
      r.cuisines.some(c => c.toLowerCase().includes(searchLower)) ||
      r.dishes.some(d => d.toLowerCase().includes(searchLower)) ||
      matchesFullMenu;
    return matchesFilter && matchesSearch;
  });

  // Group filtered restaurants by category
  const groupedRestaurants = categoryOrder.reduce((groups, cat) => {
    const items = filteredRestaurants.filter(r => r.category === cat);
    if (items.length > 0) {
      groups.push({ category: cat, restaurants: items });
    }
    return groups;
  }, []);

  const activeFilterName = dishCategories.find(d => d.id === activeFilter)?.name || 'All';

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo" onClick={handleBackClick} title="Go Home">
          <img src={logo} alt="Fakhir Group Free WiFi" className="logo-image" />
        </div>
      </header>

      {currentView === 'home' && (
        <main className="main-content">
          <a href="#restaurants" className="nav-item" onClick={handleRestaurantsClick}>
            Restaurants
          </a>

          <a href="#offers" className="nav-item" onClick={handleOffersClick}>
            Offers
          </a>

          <a href="#brand" className="nav-item" onClick={handleBrandClick}>
            Show Your Brand
          </a>
        </main>
      )}

      {currentView === 'restaurants' && (
        <main className="restaurants-view">
          <div className="restaurants-header">
            <button className="back-button" onClick={handleBackClick}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              Back
            </button>
            <h1 className="restaurants-title">
              {activeFilter === 'all' ? 'Choose Creek Walk Restaurants by Speciality Dishes' : activeFilterName}
            </h1>
          </div>

          {/* Search Bar */}
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search restaurants, dishes, or cuisines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Dish Filter Carousel */}
          <DishCarousel activeFilter={activeFilter} onFilterChange={handleFilterChange} />

          {/* Active Filter Chip */}
          {activeFilter !== 'all' && (
            <div className="active-filter-bar">
              <span className="filter-chip">
                Showing: <strong>{activeFilterName}</strong>
                <span className="filter-count">{filteredRestaurants.length} spot{filteredRestaurants.length !== 1 ? 's' : ''}</span>
                <button className="filter-clear" onClick={() => handleFilterChange('all')} title="Clear filter">✕</button>
              </span>
            </div>
          )}

          {/* Grouped Restaurant Lists */}
          {groupedRestaurants.length > 0 ? (
            groupedRestaurants.map((group) => (
              <div key={group.category} className="restaurant-group">
                <h2 className="group-title">
                  {group.category}
                </h2>
                <div className="restaurant-list">
                  {group.restaurants.map((restaurant) => (
                    <RestaurantCard
                      key={restaurant.id}
                      restaurant={restaurant}
                      onViewMenu={handleViewMenu}
                    />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <span className="no-results-emoji">🔍</span>
              <p className="no-results-text">No restaurants found for "<strong>{activeFilterName}</strong>"</p>
              <button className="no-results-btn" onClick={() => { handleFilterChange('all'); setSearchQuery(''); }}>Show All Restaurants</button>
            </div>
          )}
        </main>
      )}

      {currentView === 'menu' && selectedMenu && (() => {
        const restaurant = restaurantsData.find(r => r.id === selectedMenu);
        return (
          <main className="menu-view">
            <div className="restaurants-header">
              <button className="back-button" onClick={handleBackClick}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                Back
              </button>
              <h1 className="restaurants-title">{restaurant.name} - Menu</h1>
            </div>

            <div className="full-menu-container">
              {restaurant.fullMenu ? (
                // Detailed sectioned menu
                restaurant.fullMenu.map(section => (
                  <div key={section.section} className="menu-section">
                    <h2 className="menu-section-title">{section.section}</h2>
                    <div className="menu-items-grid">
                      {section.items.map(item => (
                        <div key={item.name} className="menu-item-card">
                          <div className="menu-item-header">
                            <h3 className="menu-item-name">{item.name}</h3>
                            <span className="menu-item-price">{item.price}</span>
                          </div>
                          {item.desc && <p className="menu-item-desc">{item.desc}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                // Simple dishes list
                <div className="menu-section">
                  <h2 className="menu-section-title">Signature Dishes</h2>
                  <div className="menu-items-grid">
                    {restaurant.dishes.map(dish => (
                      <div key={dish} className="menu-item-card">
                        <div className="menu-item-header">
                          <h3 className="menu-item-name">{dish}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="menu-simple-note">Contact the restaurant for full menu &amp; pricing.</p>
                </div>
              )}
            </div>
          </main>
        );
      })()}

      {currentView === 'offers' && (
        <main className="offers-view">
          <div className="restaurants-header">
            <button className="back-button" onClick={handleBackClick}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              Back
            </button>
            <h1 className="restaurants-title">Offers</h1>
          </div>

          <div className="offers-layout">
            <div className="offers-categories-list">
              <a href="#" className="offers-category-item active">All Categories</a>
              <a href="#" className="offers-category-item">Shopping Venues</a>
              <a href="#" className="offers-category-item">Food & Beverages</a>
              <a href="#" className="offers-category-item">Education Sector</a>
              <a href="#" className="offers-category-item">Healthcare</a>
              <a href="#" className="offers-category-item">Cinemas</a>
              <a href="#" className="offers-category-item">Public Parks</a>
              <a href="#" className="offers-category-item">Museums</a>
              <a href="#" className="offers-category-item">On-Demand Internet</a>
              <a href="#" className="offers-category-item">On the Move</a>
            </div>
          </div>
        </main>
      )}

      {currentView === 'brand' && (
        <main className="brand-view">
          <div className="restaurants-header">
            <button className="back-button" onClick={handleBackClick}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              Back
            </button>
            <h1 className="restaurants-title">Show Your Brand</h1>
          </div>

          <div className="brand-promo-banner">
            <h2 className="promo-text">
              Buy 1 Get 1 <span className="promo-badge">FREE</span> on all the products Limited time offer
            </h2>
          </div>

          <div className="brand-cards-container">
            {/* Golden Sponsorship */}
            <div className="brand-card gold-card">
              <div className="card-icon-box">
                <span className="emoji-icon">👑</span>
              </div>
              <div className="card-content">
                <div className="card-title-section">
                  <span className="tag premium-tag">Premium Offer</span>
                  <h3 className="pkg-title">Golden</h3>
                  <span className="pkg-subtitle">Sponsorship</span>
                </div>
                <div className="card-divider"></div>
                <div className="card-price-section">
                  <span className="price-label">Starting from</span>
                  <div className="price-value">
                    <span className="amount">30,000/-</span> <span className="currency">Monthly</span>
                  </div>
                  <span className="price-desc">Choose any of Prime Locations</span>
                </div>
              </div>
            </div>

            {/* Silver Sponsorship */}
            <div className="brand-card silver-card">
              <div className="card-icon-box">
                <span className="emoji-icon">🛡️</span>
              </div>
              <div className="card-content">
                <div className="card-title-section">
                  <span className="tag featured-tag">Featured</span>
                  <h3 className="pkg-title">Silver</h3>
                  <span className="pkg-subtitle">Sponsorship</span>
                </div>
                <div className="card-divider"></div>
                <div className="card-price-section">
                  <span className="price-label">Starting from</span>
                  <div className="price-value">
                    <span className="amount">20,000/-</span> <span className="currency">PKR</span>
                  </div>
                  <span className="price-desc">Choose any of Prime Locations</span>
                </div>
              </div>
            </div>

            {/* Website Development */}
            <div className="brand-card cyan-card">
              <div className="card-icon-box">
                <span className="emoji-icon">💻</span>
              </div>
              <div className="card-content">
                <div className="card-title-section">
                  <h3 className="pkg-title">Website</h3>
                  <span className="pkg-subtitle">Development</span>
                  <span className="pkg-extra">with Maps & Whatsapp Integration</span>
                </div>
                <div className="card-divider"></div>
                <div className="card-price-section">
                  <span className="price-label">Starting from</span>
                  <div className="price-value">
                    <span className="amount">45,000/-</span> <span className="currency">PKR</span>
                  </div>
                  <span className="price-desc multi-line">
                    01 Year free domain<br />10 Corporate emails
                  </span>
                </div>
              </div>
            </div>

            {/* Image Ads */}
            <div className="brand-card cyan-card">
              <div className="card-icon-box">
                <div className="shape-badge teal">
                  <span className="emoji-icon">🖼️</span>
                </div>
              </div>
              <div className="card-content">
                <div className="card-title-section">
                  <h3 className="pkg-title">Image</h3>
                  <span className="pkg-subtitle">Ads</span>
                </div>
                <div className="card-divider"></div>
                <div className="card-price-section">
                  <span className="price-label">Starting from</span>
                  <div className="price-value">
                    <span className="amount">10,000/-</span> <span className="currency">PKR</span>
                  </div>
                  <span className="price-desc">1000 Impressions</span>
                </div>
              </div>
            </div>

            {/* Video Ads */}
            <div className="brand-card cyan-card">
              <div className="card-icon-box">
                <div className="shape-badge blue">
                  <span className="emoji-icon">▶️</span>
                </div>
              </div>
              <div className="card-content">
                <div className="card-title-section">
                  <h3 className="pkg-title">Video</h3>
                  <span className="pkg-subtitle">Ads</span>
                </div>
                <div className="card-divider"></div>
                <div className="card-price-section">
                  <span className="price-label">Starting from</span>
                  <div className="price-value">
                    <span className="amount">20,000/-</span> <span className="currency">PKR</span>
                  </div>
                  <span className="price-desc">1000 Impressions</span>
                </div>
              </div>
            </div>
          </div>

          <div className="brand-booking-bar">
            <a
              href="https://adsonwifi.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="booking-btn"
            >
              For Booking
            </a>
            <div className="booking-info">
              www.adsonwifi.com | sales@fakhirgroup.com
            </div>
          </div>
        </main>
      )}

      <footer className="footer">
        <button onClick={() => setIsContactPopupOpen(true)} className="contact-link" style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
          Contact Us - Complaints
        </button>
      </footer>

      {isContactPopupOpen && (
        <div className="modal-overlay" onClick={() => setIsContactPopupOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>Contact & Complaints</h2>
            <p>Please reach out to us for any assistance:</p>
            <div className="contact-details">
              <p><strong>Email:</strong> support@fakhirgroup.com</p>
              <p><strong>Phone:</strong> 0334-5588889</p>
            </div>
            <button className="close-button" onClick={() => setIsContactPopupOpen(false)}>Close</button>
          </div>
        </div>
      )}

      {showBackToTop && (
        <button
          className="back-to-top-btn"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
