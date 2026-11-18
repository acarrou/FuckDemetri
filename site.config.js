// ============================================================
//  FUCK DEMETRI — site config
//  This is the ONLY file you should need to touch day to day.
// ============================================================

window.SITE = {
  // Shown in the header / title
  name: "Fuck Demetri",

  // Rotating one-liners on the home page
  tagline: [
    "Because someone had to say it.",
    "Wassuh doe.",
    "What's the point, I'm going to die anyways.",
    "Sponsored by everyone who has ever met Demetri.",
    "Documented. Quoted. Merchandised.",
    "Not a threat. A lifestyle.",
    "Demetri is aware. Demetri is not sorry either.",
    "Legally distinct from an apology.",
    "Now accepting new evidence.",
    "He peaked in a dream as DJ Meatman.",
    "Too less tattoos. Too many opinions.",
    "They're like milk. They're neutral.",
    "The group chat has spoken.",
    "Brought to you by the letter F.",
    "Clinically proven to annoy one specific person.",
    "Wear it to his birthday. Or his funeral. He'd want that.",
    "Ask him about the hoodie. He wants one.",
    "This is the quiet part, out loud.",
    "Warning: contains Demetri.",
    "Edgy since birth. Funny since lunch.",
    "He's not a red flag. He's the whole parade.",
    "Unsupervised and proud of it.",
    "Will say it. Has said it. Is saying it right now.",
    "The reason the group chat is muted.",
    "Thinks he's the main character. Is a side quest.",
    "Zero filter. Zero regrets. One mustache era.",
    "Every joke is a bit. Every bit goes too far.",
    "Banned from being serious.",
    "If you're offended, he's just getting started.",
    "Dad hat. Not a dad. Nobody is sure what he is.",
    "Yellow gloves. No explanation. Never an explanation.",
    "It sounds like babies, and he made it louder.",
    "Half man, half bit, all menace.",
    "His inside voice is also his outside voice.",
    "Nothing matters. Buy a hoodie.",
    "We're all dust eventually. Some of us sooner. Wassuh doe.",
    "Life is short. Demetri is shorter.",
    "Nihilism, but make it a bit.",
    "He's not depressed, he's just honest. Allegedly.",
    "Existential dread, available in sizes S through 4XL.",
    "The sun will explode one day. He's counting on it.",
    "Therapy was suggested. A website was built instead.",
    "He's fine. That's the problem.",
    "Born to die. Forced to text back.",
    "Cause of death: his own joke.",
    "Everything is temporary. Except this website.",
    "Wassuh doe. No seriously, wassuh.",
    "Welcome to Shitty Airlines. (Say it in the City Wok voice.)",
    "Shitty Airlines: Demetri is your captain. Good luck.",
    "This is your captain speaking. Wassuh doe.",
    "He is the night. He is also asleep by ten.",
    "Not the hero Gotham needs. Not the hero anyone needs.",
    "One does not simply roast Demetri. We do it anyway.",
    "Has a Batman voice. Uses it at Chipotle.",
    "Would die for Frodo. Would not help you move.",
    "I'm Batman. (He's not Batman.)",
    "Second breakfast enthusiast. First breakfast skipper.",
    "The Dark Knight of the group chat.",
    "Speaks fluent Elvish. Can't read the room.",
    "Bruce Wayne money. Peter Parker rent.",
    "My precious. (His own reflection.)",
    "Has a Batcave. It's his mom's garage.",
    "Why so serious? He isn't. Ever.",
    "Took the ring to Mordor. Took the mustache to brunch.",
    "Alfred would've quit.",
    "You shall not pass. Especially the vibe check.",
    "Plot twist: he was the Joker the whole time.",
    "Still mad about the Hobbit trilogy. Rightfully.",
    "Gotham called. They said keep him.",
    "Only up from here.",
    "Riddle me this.",
    "Producer. Songwriter. Riddler. Gump Sweezy.",
    "Surfer chipmunk. (Trevor, 2022.)",
    "Nightmare blunt rotation. (Trevor, 2026.)",
    "First Warped Tour in the bag. Shirt not included.",
    "Officer Doofy reporting for nothing.",
    "#bringtheKhaos",
  ],

  // The big counter on the home page. Set this to the last time Demetri did
  // the thing. Format: YYYY-MM-DD
  lastIncident: "2026-11-01",
  incidentLabel: "days since Demetri last said “I’m Batman” unprompted",

  // About block on the home page. Straight from his Instagram bio.
  about: {
    handle: "sweezy_dubz",
    name: "Demetri Sweezy",
    bio: "Producer/songwriter",
    avatar: "assets/photos/ig-avatar.png",
    instagram: "https://www.instagram.com/sweezy_dubz/",
  },

  // The Feed: real posts, and only Trevor's comments (@trv0r), because he is
  // the funniest person in every comment section. Replies are verbatim.
  feed: [
    {
      image: "assets/photos/ig-01-riddler.jpg",
      where: "Desert 5 Spot, Los Angeles",
      caption: "Riddle me this. I have no bones, but I can rattle. I have no mouth, but I can scream. I come out when the sun goes down, and haunt you while you dream. What am I???",
      likes: 47,
      thread: [
        { by: "trv0r", text: "Gay?" },
        { by: "sweezy_dubz", text: "I’m rob Lutge on saint patty’s day" },
      ],
      verdict: "Knockout. Round one.",
    },
    {
      image: "assets/photos/ig-02-warped.jpg",
      where: "Long Beach, California",
      caption: "First warp tour in the bag !!!",
      likes: 122,
      thread: [
        { by: "trv0r", text: "Nightmare blunt rotation" },
        { by: "sweezy_dubz", text: "goes full circle" },
        { by: "trv0r", text: "checkmate huh" },
      ],
      verdict: "Checkmate.",
    },
    {
      image: "assets/photos/ig-08-niners.jpg",
      where: "The 49ers lost. Probably.",
      caption: "To all the people who made this year bearable thank you and let’s make this next year crazier and better 🤟🤟🤟",
      likes: 114,
      thread: [
        { by: "trv0r", text: "Gump Sweezy" },
        { by: "sweezy_dubz", text: "the gumpiest" },
      ],
      verdict: "He agreed. That's the loss.",
    },
    {
      image: "assets/photos/ig-11-pier.jpg",
      where: "A pier, brooding",
      caption: "I’ve been working on a lot of new music and projects I’m excited to announce I’ll be dropping a remix each month up until my first original track for the start of next year. I hope you guys enjoy and thank you for the support let’s get this ball rolling !!!!!!",
      likes: 77,
      thread: [
        { by: "trv0r", text: "Surfer chipmunk" },
        { by: "sweezy_dubz", text: "Alvin hitting waves" },
      ],
      verdict: "Alvin. Hitting. Waves.",
    },
  ],

  // "Demetri Quotes" — real things he has actually said. All shown on the home page.
  // `context` is optional.
  quotes: [
    { context: "Making an obnoxiously loud EDM song", text: "This sounds like babies fucking." },
    { context: "Dream report", text: "Had a dream he was DJ Meatman. Like Marshmello, but with a meat 🍖 pastel over his head." },
    { context: "On his tattoos", text: "I don't have too many, I have too less." },
    { context: "“Native Americans... they're like milk.” “What do you mean, Demetri?”", text: "They're like milk. They're neutral." },
  ],

  // Character sheet on the home page. value is 0-100 for the bar.
  stats: [
    { name: "Batman Knowledge", value: 100, note: "Encyclopedic. Unprompted. Unstoppable." },
    { name: "Actually Being Batman", value: 3, note: "Owns a cape. It's a towel." },
    { name: "Lord of the Rings Lore", value: 97, note: "Will explain the Silmarillion at a party." },
    { name: "Reading the Room", value: 12, note: "See above." },
    { name: "Tattoos", value: 40, note: "Not too many. Too less." },
    { name: "Volume Control", value: 8, note: "Sounds like babies, allegedly." },
    { name: "Edge", value: 94, note: "Sharp enough to cut the group chat in half." },
    { name: "Existential Dread", value: 88, note: "What's the point, we're all going to die anyways." },
    { name: "Loyalty", value: 100, note: "Would walk into Mordor for you. Would complain the whole way." },
    { name: "Riddler Energy", value: 91, note: "Owns the suit. Posts riddles. Trevor answered \"Gay?\"" },
    { name: "Wassuh Doe", value: 100, note: "Wassuh doe." },
  ],

  // Pool of the weird ones. The home page shows `featuredCount` of these,
  // shuffled on every load. Must match `src` values below.
  featuredCount: 5,
  featured: [
    "assets/photos/demetri-01.jpg", // wide-eyed
    "assets/photos/demetri-02.jpg", // mustache
    "assets/photos/demetri-03.jpg", // yellow gloves
    "assets/photos/demetri-06.jpg", // skull fireplace
    "assets/photos/demetri-08.jpg", // tattoo
    "assets/photos/demetri-09.jpg", // laughing, clothes everywhere
    "assets/photos/demetri-11.jpg", // showing off ink
    "assets/photos/demetri-12.jpg", // porch, tongue out
    "assets/photos/demetri-22.jpg", // on the floor
    "assets/photos/ig-01-riddler.jpg", // the Riddler
    "assets/photos/ig-02-warped.jpg", // shirtless warped tour
    "assets/photos/ig-04-salute.jpg", // pink salute
    "assets/photos/ig-08-niners.jpg", // only up from here
    "assets/photos/ig-11-pier.jpg", // surfer chipmunk
    "assets/photos/ig-15-pint.jpg", // horns up, pint
    "assets/photos/ig-17-tongue.jpg", // tongue out, sweatpants
    "assets/photos/ig-22-vineyard.jpg", // cross-eyed vineyard
    "assets/photos/ig-26-renfaire.jpg", // boot drinking
    "assets/photos/ig-21-beetlejuice.jpg", // pink shirt bag trophy
  ],

  // Shuffle the Evidence page on every load
  shuffleGallery: true,

  // Photos & videos. Drop files into assets/photos/ (or assets/video/) and list them here.
  // caption is optional. For video add type: "video" and a poster image.
  photos: [
    { src: "assets/photos/demetri-01.jpg", caption: "Doorbell cam, 3am." },
    { src: "assets/photos/demetri-02.jpg", caption: "Fake mustache. Real disappointment." },
    { src: "assets/photos/demetri-03.jpg", caption: "Bartender. Zero tips. Zero customers." },
    { src: "assets/photos/demetri-04.jpg", caption: "Flew 11 hours to play the circle game." },
    { src: "assets/photos/demetri-05.jpg", caption: "Foot first. Always foot first." },
    { src: "assets/photos/demetri-06.jpg", caption: "Thinker pose. No thoughts." },
    { src: "assets/photos/demetri-07.jpg", caption: "Dressed like a hobbit. Built like one." },
    { src: "assets/photos/demetri-08.jpg", caption: "Clown balloon on the thigh. Thigh's fault." },
    { src: "assets/photos/demetri-09.jpg", caption: "Packing and screaming. Both badly." },
    { src: "assets/photos/demetri-10.jpg", caption: "Resort dad. No kids. No resort." },
    { src: "assets/photos/demetri-11.jpg", caption: "Rolling up a sleeve for nobody." },
    { src: "assets/photos/demetri-12.jpg", caption: "Pointing at his own tongue. Thirty." },
    { src: "assets/photos/demetri-13.jpg", caption: "Carried. Physically and emotionally." },
    { src: "assets/photos/demetri-14.jpg", caption: "Third wheel. Happiest wheel." },
    { src: "assets/photos/demetri-15.jpg", caption: "She said yaas. Not to him." },
    { src: "assets/photos/demetri-16.jpg", caption: "Shades on. Lights off upstairs." },
    { src: "assets/photos/demetri-17.jpg", caption: "The beaver statue has better posture." },
    { src: "assets/photos/demetri-18.jpg", caption: "Mid-sentence about Batman. Still going." },
    { src: "assets/photos/demetri-19.jpg", caption: "Exhausted. Did nothing." },
    { src: "assets/photos/demetri-20.jpg", caption: "Drowning. Smiling." },
    { src: "assets/photos/demetri-21.jpg", caption: "Foot. Again. Seek help." },
    { src: "assets/photos/demetri-22.jpg", caption: "Snapchat angle. Worst angle. Same angle." },
    { src: "assets/photos/ig-01-riddler.jpg", caption: "Gay? (Trevor, undefeated)" },
    { src: "assets/photos/ig-02-warped.jpg", caption: "White Claw. No shirt. No law." },
    { src: "assets/photos/ig-03-warped-crew.jpg", caption: "Nightmare blunt rotation." },
    { src: "assets/photos/ig-04-salute.jpg", caption: "Saluting a birthday that isn't his." },
    { src: "assets/photos/ig-05-porch.jpg", caption: "Porch gremlin. Pink shorts." },
    { src: "assets/photos/ig-06-winter.jpg", caption: "Night out. Sweatpants. Front row." },
    { src: "assets/photos/ig-07-club.jpg", caption: "Not the weirdest guy here. Barely." },
    { src: "assets/photos/ig-08-niners.jpg", caption: "Gump Sweezy." },
    { src: "assets/photos/ig-09-xmas.jpg", caption: "Where's Waldo. Waldo has a mustache." },
    { src: "assets/photos/ig-10-fisheye.jpg", caption: "The one making a face. Always." },
    { src: "assets/photos/ig-11-pier.jpg", caption: "Surfer chipmunk." },
    { src: "assets/photos/ig-12-studio.jpg", caption: "Jeans with a paragraph on them." },
    { src: "assets/photos/ig-13-producer.jpg", caption: "Hood up. Hiding from the screen." },
    { src: "assets/photos/ig-14-warped-trio.jpg", caption: "Tongue out. Nobody's looking at him." },
    { src: "assets/photos/ig-15-pint.jpg", caption: "Horns up. Alone. Fat Dog." },
    { src: "assets/photos/ig-16-claws.jpg", caption: "Two Claws. Zero eyes." },
    { src: "assets/photos/ig-17-tongue.jpg", caption: "Gas station Joker." },
    { src: "assets/photos/ig-18-poolside.jpg", caption: "Chest tattoos. Chest: none." },
    { src: "assets/photos/ig-19-tubing.jpg", caption: "Snow tubing. Peak athleticism." },
    { src: "assets/photos/ig-20-jerseys.jpg", caption: "Shaka. Has never surfed." },
    { src: "assets/photos/ig-21-beetlejuice.jpg", caption: "Holding the purse. It's his." },
    { src: "assets/photos/ig-22-vineyard.jpg", caption: "Cross-eyed. Not on purpose." },
    { src: "assets/photos/ig-23-slashers.jpg", caption: "Slasher shirt. Scared of the dark." },
    { src: "assets/photos/ig-24-film.jpg", caption: "Fought two guys for a stick. Lost." },
    { src: "assets/photos/ig-25-guitar.jpg", caption: "Shorts from grandma's couch." },
    { src: "assets/photos/ig-26-renfaire.jpg", caption: "Drinking out of a boot. Paid extra." },
    { src: "assets/photos/ig-27-selfie.jpg", caption: "Chin up. Nothing behind it." },
    { src: "assets/photos/ig-28-cig.jpg", caption: "Cigarette to look cool. Still looks like this." },
    { type: "video", src: "assets/video/demetri-01.mp4", poster: "assets/video/demetri-01-poster.jpg" },
    { type: "video", src: "assets/video/demetri-02.mp4", poster: "assets/video/demetri-02-poster.jpg" },
    { type: "video", src: "assets/video/demetri-03.mp4", poster: "assets/video/demetri-03-poster.jpg" },
  ],

  // ---------- MERCH ----------
  // Each product needs a `buy` URL. Options:
  //   * Stripe Payment Link  (https://buy.stripe.com/...)       — you ship it
  //   * Fourthwall / Printful / Teespring product page URL      — they ship it
  // Leave `buy` empty to show a "coming soon" button.
  //
  // Fourthwall shop. Used only to build checkout links; visitors stay on this
  // site until they pay.
  shopUrl: "https://fuckdemetri-shop.fourthwall.com/",
  //
  // EMBEDDED STORE: paste a Storefront API token here (Fourthwall dashboard →
  // Settings → For developers → Storefront API → Create token). The merch page
  // then loads live products, prices and sizes from Fourthwall and "Buy" sends
  // the shopper straight to Fourthwall checkout with that item in the cart.
  // Products below are used as the fallback and for custom images/copy.
  storefrontToken: "",
  // Products. `slug` + `variants` come from Fourthwall (Products → product → variant IDs).
  // With variants present, the Buy button sends the shopper straight to Fourthwall checkout
  // for the chosen size, no API token needed. A product without variants falls back to `buy`
  // or the shop link. `hidden: true` keeps a card off the page.
  products: [
    {
      name: "The Classic Tee",
      slug: "the-classic-tee",
      price: "$25",
      image: "assets/merch/tee.jpg",
      desc: "Full two-color lockup on the chest. The shirt Bruce Wayne would wear if he were worse at everything.",
      variants: [
        { size: "S", id: "1f684e10-bbad-400d-8827-ca538027a77e", price: 25 },
        { size: "M", id: "421e680c-14e9-42da-851b-379e469bafc3", price: 25 },
        { size: "L", id: "9e381479-5ba1-4064-80b5-2eca50effa8d", price: 25 },
        { size: "XL", id: "bd1290f7-354a-48d4-8783-c03b240810e3", price: 25 },
        { size: "2XL", id: "9001d41a-79bc-44a4-88b3-81ccf9385ff9", price: 27 },
        { size: "3XL", id: "8c561103-8259-4ab6-9598-c1ac167d573e", price: 29 },
        { size: "4XL", id: "ccdda932-697e-4a2a-9935-0488a6d696e5", price: 31 },
      ],
    },
    {
      name: "The Hoodie Demetri Will Ask For",
      slug: "the-hoodie-demetri-will-ask-for",
      price: "$55",
      image: "assets/merch/hoodie.jpg",
      desc: "Heavyweight. Comfortable. Legally distinct from an apology. Hood up, you're the night. Hood down, you're Demetri.",
      variants: [
        { size: "S", id: "2a88f9f4-62f3-45fc-bc53-720ff1e745d2", price: 55 },
        { size: "M", id: "bdfd8f2d-233f-4e5f-985b-a090d1eef236", price: 55 },
        { size: "L", id: "7a195d6a-2331-4915-9790-1092c52fc92e", price: 55 },
        { size: "XL", id: "51b1a340-6355-43b8-aad4-a0ca0edf9c15", price: 55 },
        { size: "2XL", id: "b32fa5a6-6f10-4531-bac2-d8a2d25eb37c", price: 57 },
        { size: "3XL", id: "81652341-72f6-4aba-8fc2-ad0e3c462f1c", price: 59 },
      ],
    },
    {
      name: "The Zip",
      slug: "the-zip",
      price: "$65",
      image: "assets/merch/zip.jpg",
      desc: "Zip hoodie, small FD on the chest. Stealth mode, for people who want plausible deniability at Thanksgiving.",
      variants: [
        { size: "S", id: "d6425296-58ed-40aa-9247-e30d5e32a0ea", price: 65 },
        { size: "M", id: "887faf3d-3633-4e94-9bd8-7e021d5ab136", price: 65 },
        { size: "L", id: "8ad0fb9a-30eb-43f5-9dda-97f0bde35fd5", price: 65 },
        { size: "XL", id: "338f2729-3cc0-43fe-ad37-022a50e79fc9", price: 65 },
        { size: "2XL", id: "33f1d653-d621-4413-b0d2-dd4a2f57c15b", price: 67 },
      ],
    },
    {
      name: "FD Hoodie",
      slug: "fd-hoodie",
      price: "$55",
      image: "assets/merch/hoodie-fd.jpg",
      desc: "Same hoodie, quieter. Just the monogram. One hoodie to rule them all.",
      variants: [
        { size: "S", id: "f4175365-5c1a-4b9d-a57c-ef660861d65b", price: 55 },
        { size: "M", id: "a8689ce9-1a24-4f23-8b7d-2533204f359d", price: 55 },
        { size: "L", id: "91fcba4f-dcd9-492e-ae66-b2ad3d0f57d5", price: 55 },
        { size: "XL", id: "7f5c4d86-a4ed-410b-a320-2e69e75029a6", price: 55 },
        { size: "2XL", id: "4a0ae0e4-3b8d-4955-827c-f9411a7db79f", price: 57 },
        { size: "3XL", id: "90d37ce5-74fc-415e-bc35-66a2b90b351a", price: 59 },
      ],
    },
    {
      name: "FD Tee",
      slug: "fd-tee",
      price: "$25",
      image: "assets/merch/tee-fd.jpg",
      desc: "Small FD on the chest. Subtle, until someone asks, and someone always asks.",
      variants: [
        { size: "S", id: "c45dd869-81ca-4697-8ff5-1468e607888c", price: 25 },
        { size: "M", id: "90786456-37c3-47f2-9fd9-164c12dd0af7", price: 25 },
        { size: "L", id: "76b03df4-cdb9-4e7c-8441-9e1f3781c713", price: 25 },
        { size: "XL", id: "542a196c-6358-4a62-b67d-be60c1e183e6", price: 25 },
        { size: "2XL", id: "00a362ad-ed0b-4477-aea3-34fd34a5e47b", price: 27 },
        { size: "3XL", id: "67ceedb8-00dd-4bd7-8bf6-11994878a6f5", price: 29 },
        { size: "4XL", id: "36380156-af1b-44e6-87be-744ec34682b6", price: 31 },
      ],
    },
    {
      name: "Dad Hat",
      slug: "dad-hat",
      price: "$22",
      image: "assets/merch/hat.jpg",
      desc: "FD on the front. Not a cowl. Close enough. For sunny days and bad decisions.",
      variants: [
        { size: "One Size", id: "8e61243a-14e0-47cb-8b97-aa9ffd10b551", price: 22 },
      ],
    },
    {
      hidden: true, // on hold at Fourthwall; flip to false when it goes live
      name: "Sticker Pack",
      slug: "sticker-pack",
      price: "$8",
      image: "assets/merch/sticker.jpg",
      desc: "Three black FD stickers, die-cut. Laptops, water bottles, Demetri's car.",
      buy: "",
    },
    {
      name: "The Mug",
      slug: "the-mug",
      price: "$18",
      image: "assets/merch/mug.jpg",
      desc: "Holds coffee. Holds grudges. Holds the entire extended edition runtime.",
      variants: [
        { size: "11oz", id: "e79f2dff-ce67-46b3-a3e8-52462fd6a309", price: 18 },
      ],
    },
  ],

  // Footer links. Leave blank to hide.
  social: {
    instagram: "https://www.instagram.com/sweezy_dubz/",
    tiktok: "",
    email: "",
  },
};
