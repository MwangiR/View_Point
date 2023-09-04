const { Review } = require('../models');

const reviewData = [
    {
        text: "Action Packed Thriller!",
        item_id: 11,
        rating:5 ,
        user_id:3,

    },
    {
        text: "Neat game with a creepy atmosphere. The game is solid and the sounds and music are top notch",
        item_id: 2 ,
        rating: 4,
        user_id: 3,

    },
    {
        text: "The best movie ever, it's a GREAT movie! Marlon Brando gives a great performance as Don Vito Corleone, so does Al Pacino and Robert Duvall, it is the best drama in history",
        item_id: 6,
        rating: 5,
        user_id: 2,

    },
    {
        text: "Breaking Bad was an amazing show. Once you start watching Breaking Bad from Season 1, it will feel a bit slow but gradually as the story progresses, it becomes strongly addictive and gets very interesting.",
        item_id: 14 ,
        rating: 3,
        user_id:1,

    },
    {
        text: "THE GREATEST COMEDY SITCOMS OF ALL TIME!!!",
        item_id: 12,
        rating: 5,
        user_id:2,

    },
    {
        text: "Long story short, 12/10 game of the decade. You should play this game.",
        item_id: 4 ,
        rating: 5,
        user_id:2,

    },
    {
        text: "A bit overrated honestly. The swinging is fun but it feels more restrictive compared to Spider-Man 2 and the open world feels lifeless. You can't hang onto one thread swinging around as the game will launch you off automatically or swing onto a helicopter out to the statue of liberty which was one of the best things to do in that game.",
        item_id: 5 ,
        rating: 2,
        user_id:3,

    },
    {
        text: "This is OK, kind of repeated concept in every season and boring",
        item_id: 13 ,
        rating: 3,
        user_id:1,

    },
    {
        text: "I wish I could give 0 stars",
        item_id: 15,
        rating: 1,
        user_id:2,

    },
    // 

    {
        text: "It’s not hard to get lost in the deep, subterranean world of Hollow Knight – and I mean that in more ways than one. ",
        item_id: 1 ,
        rating: 5,
        user_id: 2,

    },
    {
        text: "Grand Theft Auto V has an average Metacritic score of 97% across all platforms it's been released on, and is currently the third best selling game of all time, right behind Tetris and Minecraft.",
        item_id: 3 ,
        rating: 4 ,
        user_id: 1,

    },
    {
        text: "The Shawshank Redemption is a cinematic gem that transcends the boundaries of time and genre, leaving an indelible mark on the hearts of its viewers.",
        item_id: 7,
        rating: 5,
        user_id: 1,

    },
    {
        text: "Movies are just not made like this anymore. The scenes are prolonged with smart acting, genius scripting",
        item_id: 8 ,
        rating: 4,
        user_id: 3,

    },
    {
        text: "To me, this is not only Kubrick's best film but also a milestone of the genre. It is quite long at around two and a quarter hours, and it is slow, that I agree with. But it is never boring, well not to me it isn't.",
        item_id: 9 ,
        rating: 5,
        user_id: 2,

    },
    {
        text: "Greatest classic mystery film",
        item_id: 10 ,
        rating: 5,
        user_id: 1 ,

    },
    {
        text: "Really fun game with an amazing open world. The open world mechanics are probably some of the best I’ve ever seen.",
        item_id: 16,
        rating: 4 ,
        user_id: 2,

    },
    {
        text: "The story was well enough told. There were confusing parts when explaining certain characters and creators.",
        item_id: 17,
        rating: 3,
        user_id: 3,

    },
    {
        text: "Charming and Extraordinary As with previous Potter films, this one is wonderful. The mischievous trio are back in their third year at Hogwarts.",
        item_id: 17,
        rating: 5,
        user_id: 1,

    },
    {
        text: "How refreshing it is, then, to find that the just-concluded fourth season returns to the brilliant heights of its first.",
        item_id: 18,
        rating: 5 ,
        user_id: 2,

    },
    {
        text: "Okay this game could be great but right now for me it just alright.",
        item_id: 19,
        rating: 2,
        user_id: 1,

    },
    {
        text: "Fallout 4 is an amazing game. Featuring the most complex character creation system in gaming history",
        item_id:  19,
        rating: 5,
        user_id: 2,

    },
    {
        text: "Broken beyond all repair.",
        item_id: 19 ,
        rating: 1,
        user_id: 3,

    },
    {
        text: "the Fellowship of the Rings opened the door to a whole new world for me.",
        item_id: 20,
        rating: 5,
        user_id: 1,

    },
    {
        text: "I'd been having some difficulties in my life and discovered this amazing show on Netflix that helped me escape from the real world.",
        item_id: 21,
        rating: 5,
        user_id: 2,

    },
    {
        text: "This game is just plain fun. I have played over 40 hours so far and beyond an early bug where I couldn't finish a main storyline quest, it has been very smooth playing and very well done.",
        item_id: 22,
        rating: 4,
        user_id: 2,

    },
    {
        text: "They definitely needed at least 6-12 more months to actually finish the game and make it closer to what this could have been.",
        item_id: 22,
        rating: 2,
        user_id: 3,

    },
    {
        text: "The city is lifeless",
        item_id: 22,
        rating: 1,
        user_id: 1,

    },
    {
        text: "This movie really explores batman in a very different way. ",
        item_id: 23,
        rating: 5,
        user_id: 1,

    },
    {
        text: "From the first scene itself, it is made clear the amount of thought, work and creativity that has gone into the making of this movie.",
        item_id: 23,
        rating: 5,
        user_id: 2,

    },
    {
        text: "I am confused by entire ending.",
        item_id: 23,
        rating: 3,
        user_id: 3,

    },
    {
        text: " When you look beyond the surface, it's also a great character study.",
        item_id: 24,
        rating: 5,
        user_id: 1,

    },
    {
        text: "There is so much that the first season of True Detective gets right",
        item_id: 24,
        rating: 4,
        user_id: 2,

    },
    {
        text: "It is compulsively watchable while providing a comfortable sense of the familiar and total immediacy.",
        item_id: 24,
        rating: 5,
        user_id: 3,

    },
    // {
    //     text: "It is compulsively watchable while providing a comfortable sense of the familiar and total immediacy.",
    //     item_id: 24,
    //     rating: 4,
    //     user_id: 4,

    // },
    {
        text: "I found a newspaper a made a hat with it, 10/10 game,",
        item_id: 25,
        rating: 4,
        user_id: 3,

    },
    {
        text: "Here's a film that is offensive only in how inoffensive it proves to be.",
        item_id: 26,
        rating: 2,
        user_id: 1,

    },
    {
        text: "This series tackles all of the hard aspects of war, and doesn’t romanticize it. ",
        item_id: 27,
        rating: 5,
        user_id: 2,

    },
    {
        text: "Unending amount of game play if you pick a short span server.",
        item_id: 28,
        rating: 4,
        user_id: 2,

    },
    {
        text: "Game hella raciest so it gets a 10/10",
        item_id:28,
        rating: 5,
        user_id: 1,
    },

    {
        text: "Nostalgia!",
        item_id: 29,
        rating: 5,
        user_id: 3,

    },
    {
        text: "It is a well written tv show ",
        item_id:30,
        rating: 5,
        user_id: 2,

    },
    {
        text: "Absolute tops.",
        item_id:30,
        rating: 4,
        user_id: 3,

    },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;