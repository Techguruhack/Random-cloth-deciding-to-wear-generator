const outfits = [
    "Jeans and T-shirt",
    "Skirt and Blouse",
    "Dress",
    "Shorts and Tank Top",
    "Suit",
    "Sweater and Pants",
    "Jumpsuit",
    "Track Pants and Hoodie",
    "Casual Shirt and Chinos",
    "Formal Attire"
];

function generateOutfit() {
    const name = document.getElementById('name').value;
    const randomIndex = Math.floor(Math.random() * outfits.length);
    const selectedOutfit = outfits[randomIndex];
    const message = name ? `${name}, you should wear ${selectedOutfit}!` : `You should wear ${selectedOutfit}!`;
    document.getElementById('outfit').innerText = message;
}
