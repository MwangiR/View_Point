const { Review } = require('../models');

const reviewData = [
    //24 Series
    {
        text: "Action Packed Thriller!",
        item_id: 11,
        rating: 5,
        user_id: 3,
    },
    {
        text: "I BEST SERIES I HAVE EVER SEE AND MY MOST FAVORITE SERIES TOO",
        item_id: 11,
        rating: 5,
        user_id: 1,
    },
    {
        text: "Disappointing!! ",
        item_id: 11,
        rating: 2,
        user_id: 6,
    },
    {
        text: "No Series can beat 24.",
        item_id: 11,
        rating: 4,
        user_id: 8,
    },
    {
        text: "I grew up with this show being on too late for me to stay up and see it.",
        item_id: 11,
        rating: 5,
        user_id: 9,
    },
    //Neversong
    {
        text: "Neat game with a creepy atmosphere. The game is solid and the sounds and music are top notch",
        item_id: 2,
        rating: 4,
        user_id: 3,
    },
    {
        text: "Very poor. The game locks up after the second boss and won’t let me proceed",
        item_id: 2,
        rating: 2,
        user_id: 1,
    },
    {
        text: "The art style is just too gorgeous!",
        item_id: 2,
        rating: 4,
        user_id: 6,
    },
    {
        text: "Game is short but graphics and storyline is awesome",
        item_id: 2,
        rating: 3,
        user_id: 8,
    },
    {
        text: "music and game design are excellent...",
        item_id: 2,
        rating: 5,
        user_id: 9,
    },
    {
        text: "The game gives players no instructions on how to play or any meaningful guidance on how the game mechanics work, which can result in a lot of frustration.",
        item_id: 2,
        rating: 2,
        user_id: 2,
    },
    {
        text: "Is A Must-Play Modern Indie Gaming Classic",
        item_id: 2,
        rating: 4,
        user_id: 7,
    },
    {
        text: "I've got a soft spot for anything retro",
        item_id: 2,
        rating: 3,
        user_id: 10,
    },
    //The Godfather
    {
        text: "The best movie ever, it's a GREAT movie! Marlon Brando gives a great performance as Don Vito Corleone, so does Al Pacino and Robert Duvall, it is the best drama in history",
        item_id: 6,
        rating: 5,
        user_id: 2,
    },
    {
        text: "Winner of 3 Academy Awards",
        item_id: 6,
        rating: 5,
        user_id: 1,
    },
    {
        text: "I wish to give 1000 stars. Epic movie! I have always loved movies on mafia and underworld.",
        item_id: 6,
        rating: 5,
        user_id: 3,
    },
    {
        text: "Recommended score: 10/10 (specifically 99%)",
        item_id: 6,
        rating: 5,
        user_id: 4,
    },
    {
        text: "The cinematography and direction, needless to say, are incredible.",
        item_id: 6,
        rating: 5,
        user_id: 5,
    },
    {
        text: "This might quite possibly be the best movie ever made.",
        item_id: 6,
        rating: 5,
        user_id: 6,
    },
    {
        text: "A movie which certainly does not need a review for sure.",
        item_id: 6,
        rating: 5,
        user_id: 7,
    },
    {
        text: "This film isn't for everyone, I admit that. But for those who enjoy a good story but don't mind the wait to climax, WATCH THIS.",
        item_id: 6,
        rating: 5,
        user_id: 8,
    },
    {
        text: "It's hard to find a moment in the film that isn't great.",
        item_id: 6,
        rating: 5,
        user_id: 9,
    },
    {
        text: "A rare 5 star film",
        item_id: 6,
        rating: 5,
        user_id: 10,
    },
    //Breaking Bad
    {
        text: "Breaking Bad was an amazing show. Once you start watching Breaking Bad from Season 1, it will feel a bit slow but gradually as the story progresses, it becomes strongly addictive and gets very interesting.",
        item_id: 14,
        rating: 3,
        user_id: 1,
    },
    {
        text: "A thrilling dive into the transformation of a high school chemistry teacher into a complex anti-hero.",
        item_id: 14,
        rating: 5,
        user_id: 2,
    },
    {
        text: "Breaking Bad's debut season hooks you with its intense storytelling and Bryan Cranston's phenomenal performance",
        item_id: 14,
        rating: 4,
        user_id: 3,
    },
    {
        text: "The tension builds steadily as we witness Walter White's descent into the criminal underworld.",
        item_id: 14,
        rating: 3,
        user_id: 4,
    },
    {
        text: "A masterclass in character development that leaves you craving the next episode",
        item_id: 14,
        rating: 4,
        user_id: 5,
    },
    {
        text: "The moral ambiguity of the characters makes this season a moral rollercoaster.",
        item_id: 14,
        rating: 5,
        user_id: 6,
    },
    {
        text: "Sharp writing and unexpected plot twists keep you on the edge of your seat.",
        item_id: 14,
        rating: 4,
        user_id: 7,
    },
    {
        text: "The first season sets the stage for one of the greatest TV shows ever created.",
        item_id: 14,
        rating: 4,
        user_id: 8,
    },
    {
        text: "Breaking Bad Season 1 is a powerful exploration of the consequences of desperate choices.",
        item_id: 14,
        rating: 3,
        user_id: 9,
    },
    {
        text: "Gritty, dark, and utterly addictive, it's a must-watch for crime drama fans",
        item_id: 14,
        rating: 4,
        user_id: 10,
    },
    //Friends
    {
        text: "THE GREATEST COMEDY SITCOMS OF ALL TIME!!!",
        item_id: 12,
        rating: 5,
        user_id: 2,
    },
    {
        text: "The beginning of a sitcom legend, Friends Season 1 is a delightful blend of humor and heart.",
        item_id: 12,
        rating: 5,
        user_id: 1,
    },
    {
        text: "The chemistry among the cast is palpable, making every episode a joy to watch.",
        item_id: 12,
        rating: 4,
        user_id: 3,
    },
    {
        text: "The witty writing and iconic catchphrases make this season an all-time favorite",
        item_id: 12,
        rating: 5,
        user_id: 4,
    },
    {
        text: "A lighthearted and relatable look at friendship, love, and the ups and downs of life in your 20s",
        item_id: 12,
        rating: 4,
        user_id: 5,
    },
    {
        text: "The central theme of friendship resonates strongly from the very first episode.",
        item_id: 12,
        rating: 3,
        user_id: 6,
    },
    {
        text: "A timeless classic that brings laughter and nostalgia with each episode",
        item_id: 12,
        rating: 5,
        user_id: 7,
    },
    {
        text: "The characters' quirks and quirks make them endearing and unforgettable.",
        item_id: 12,
        rating: 5,
        user_id: 8,
    },
    {
        text: "Friends Season 1 is a heartwarming journey that's easy to binge-watch.",
        item_id: 12,
        rating: 4,
        user_id: 9,
    },
    {
        text: "The perfect blend of humor and heartache, making it a cultural touchstone.",
        item_id: 12,
        rating: 5,
        user_id: 10,
    },
    //Elden Ring
    {
        text: "Long story short, 12/10 game of the decade. You should play this game.",
        item_id: 4,
        rating: 5,
        user_id: 2,
    },
    // {
    //     text: "",
    //     item_id: 4,
    //     rating: ,
    //     user_id: ,
    // },

    //Spiderman
    {
        text: "A bit overrated honestly. The swinging is fun but it feels more restrictive compared to Spider-Man 2 and the open world feels lifeless. You can't hang onto one thread swinging around as the game will launch you off automatically or swing onto a helicopter out to the statue of liberty which was one of the best things to do in that game.",
        item_id: 5,
        rating: 2,
        user_id: 3,
    },
    {
        text: "Marvel's Spider-Man is a web-slinging masterpiece! The exhilarating traversal and engaging story make it an instant classic.",
        item_id: 5,
        rating: 4,
        user_id: 1,
    },
    {
        text: "Swinging through the streets of New York as Spider-Man feels incredibly satisfying, and the game's attention to detail is astonishing",
        item_id: 5,
        rating: 5,
        user_id: 2,
    },
    {
        text: "I expected more from a Marvel title. The combat feels button-mashy, and the story, while decent, doesn't break new ground.",
        item_id: 5,
        rating: 3,
        user_id: 4,
    },
    {
        text: "Spider-Man's open world is vast, but it's filled with repetitive collectibles and missions that get old fast",
        item_id: 5,
        rating: 2,
        user_id: 5,
    },
    {
        text: "This game truly captures the essence of being Spider-Man. The combat is fun, the story is emotional, and the city is breathtaking.",
        item_id: 5,
        rating: 5,
        user_id: 6,
    },
    {
        text: "A superhero game that sets the bar high for storytelling in the genre. It's a must-play for fans of Spider-Man and gaming alike",
        item_id: 5,
        rating: 5,
        user_id: 7,
    },
    {
        text: "The graphics are impressive, but the gameplay loop lacks depth, making it feel like a missed opportunity for a truly outstanding superhero experience.",
        item_id: 5,
        rating: 3,
        user_id: 8,
    },
    {
        text: "While not terrible, Marvel's Spider-Man doesn't quite live up to the hype. It's a solid game, but it didn't keep me engaged as much as I'd hoped.",
        item_id: 5,
        rating: 4,
        user_id: 9,
    },
    {
        text: "From the stunning graphics to the well-crafted open world, Marvel's Spider-Man is a love letter to Spidey fans, and it delivers on all fronts.",
        item_id: 5,
        rating: 4,
        user_id: 10,
    },

    //Walking Dead
    {
        text: "This is OK, kind of repeated concept in every season and boring",
        item_id: 13,
        rating: 3,
        user_id: 1,
    },
    {
        text: "While it had its ups and downs, 'The Walking Dead' managed to create some memorable characters and moments that kept me coming back for more",
        item_id: 13,
        rating: 5,
        user_id: 2,
    },
    {
        text: "The early seasons were gripping, but the later ones felt like they were just dragging on, and character decisions often didn't make sense.",
        item_id: 13,
        rating: 4,
        user_id: 3,
    },
    {
        text: "The show had its fair share of flaws, but its exploration of human nature and the survival instinct in a post-apocalyptic world made it intriguing.",
        item_id: 13,
        rating: 4,
        user_id: 4,
    },
    {
        text: "While it had some standout moments, the inconsistency in writing and pacing left me disengaged in the later seasons",
        item_id: 13,
        rating: 3,
        user_id: 5,
    },
    {
        text: "Despite some uneven storytelling, 'The Walking Dead' had its moments of brilliance and showcased the resilience of its characters in the face of adversity.",
        item_id: 13,
        rating: 3,
        user_id: 6,
    },
    {
        text: "The show struggled to maintain the quality of its initial seasons, leading to viewer fatigue and a sense that it was time to wrap things up.",
        item_id: 13,
        rating: 3,
        user_id: 7,
    },
    {
        text: "I enjoyed the concept initially, but the lack of a clear endgame and repetitive themes made it difficult to stay invested.",
        item_id: 13,
        rating: 3,
        user_id: 8,
    },
    {
        text: "The series may have overstayed its welcome, but it still had some enjoyable episodes that reminded me of why I initially got hooked",
        item_id: 13,
        rating: 4,
        user_id: 9,
    },
    {
        text: "While it may not have maintained the same level of quality throughout its run, 'The Walking Dead' had a lasting impact on the zombie genre, and I appreciate its contribution to TV.",
        item_id: 13,
        rating: 4,
        user_id: 10,
    },
    //Game of thrones
    {
        text: "I wish I could give 0 stars",
        item_id: 15,
        rating: 1,
        user_id: 2,
    },
    {
        text: "While the final seasons left much to be desired, 'Game of Thrones' remains a visually stunning and epic fantasy series with memorable characters and moments",
        item_id: 15,
        rating: 4,
        user_id: 1,
    },
    {
        text: "The show's intricate political intrigue and complex characters were captivating, even if the storytelling lost some steam towards the end.",
        item_id: 15,
        rating: 3,
        user_id: 3,
    },
    {
        text: "I couldn't get past the gratuitous violence and sexual content. It felt like shock value over substance, and the plot lost its direction as the series went on.",
        item_id: 15,
        rating: 2,
        user_id: 4,
    },
    {
        text: "Despite its divisive final season, 'Game of Thrones' will always be remembered for its grand scale, breathtaking cinematography, and iconic performances",
        item_id: 15,
        rating: 3,
        user_id: 5,
    },
    {
        text: "Game of Thrones started strong but became a victim of its own popularity. The plot twists felt forced, and beloved characters were often treated poorly in the later seasons.",
        item_id: 15,
        rating: 2,
        user_id: 6,
    },
    {
        text: "Game of Thrones is a masterpiece of storytelling, combining intricate political drama, breathtaking fantasy, and unforgettable characters. It's an epic journey that will stand the test of time.",
        item_id: 15,
        rating: 5,
        user_id: 7,
    },
    {
        text: "This show redefined television with its grandeur, complexity, and unpredictability. The world of Westeros felt incredibly real, and every twist and turn kept us on the edge of our seats.",
        item_id: 15,
        rating: 4,
        user_id: 8,
    },
    {
        text: "From the stunning visuals to the intricate plot, Game of Thrones is a true work of art. Its intricate storytelling and powerful performances make it a must-watch for any TV enthusiast.",
        item_id: 15,
        rating: 5,
        user_id: 9,
    },
    {
        text: "The character development in Game of Thrones is exceptional. We watched these characters evolve, making every triumph and tragedy deeply emotional",
        item_id: 15,
        rating: 5,
        user_id: 10,
    },
    //Hollow Knight
    {
        text: "It’s not hard to get lost in the deep, subterranean world of Hollow Knight – and I mean that in more ways than one. ",
        item_id: 1,
        rating: 5,
        user_id: 2,
    },
    {
        text: "I don't understand the hype around Hollow Knight. The difficulty is punishing, and the lack of clear direction left me frustrated and uninterested in exploring its world.",
        item_id: 1,
        rating: 2,
        user_id: 1,
    },
    {
        text: "Hollow Knight is a masterpiece of the Metroidvania genre. Its beautifully hand-drawn world, challenging gameplay, and atmospheric storytelling create an experience that's truly unforgettable.",
        item_id: 1,
        rating: 5,
        user_id: 3,
    },
    {
        text: "It's a solid indie title with a unique world, but I didn't find myself as engrossed as some others did. The difficulty can be a bit unforgiving, and the pacing is uneven.",
        item_id: 1,
        rating: 3,
        user_id: 4,
    },
    {
        text: "The attention to detail in Hollow Knight is astonishing. From the hauntingly atmospheric music to the meticulously designed enemies and environments, it's a work of art that keeps you immersed for hours on end.",
        item_id: 1,
        rating: 4,
        user_id: 5,
    },
    {
        text: "It's a solid indie title with a unique world, but I didn't find myself as engrossed as some others did. The difficulty can be a bit unforgiving, and the pacing is uneven.",
        item_id: 1,
        rating: 3,
        user_id: 6,
    },
    {
        text: "It's a solid indie title with a unique world, but I didn't find myself as engrossed as some others did. The difficulty can be a bit unforgiving, and the pacing is uneven.",
        item_id: 1,
        rating: 3,
        user_id: 7,
    },
    {
        text: "Hollow Knight is a triumph of game design. Its precise and rewarding combat, combined with its rich lore and sense of exploration, make it one of the best indie games ever created",
        item_id: 1,
        rating: 5,
        user_id: 8,
    },
    {
        text: "This game felt more like a chore than a fun experience. The platforming sections were tedious, and I couldn't connect with the story or characters.",
        item_id: 1,
        rating: 4,
        user_id: 9,
    },
    {
        text: "Hollow Knight was a disappointment for me. The controls felt clunky, the art style was too dark, and the pacing made it hard to stay engaged. It just didn't click with me",
        item_id: 1,
        rating: 2,
        user_id: 10,
    },


    //Grand Theft Auto 5
    {
        text: "Grand Theft Auto V has an average Metacritic score of 97% across all platforms it's been released on, and is currently the third best selling game of all time, right behind Tetris and Minecraft.",
        item_id: 3,
        rating: 4,
        user_id: 1,
    },
    {
        text: "GTA V is a sprawling open-world masterpiece that offers an unparalleled level of freedom and chaos.",
        item_id: 3,
        rating: 5,
        user_id: 2,
    },
    {
        text: "The game's storytelling is a triumph, with memorable characters and a gripping narrative that keeps you engaged.",
        item_id: 3,
        rating: 5,
        user_id: 3,
    },
    {
        text: "The sheer scale and detail of Los Santos make it one of the most immersive open-world environments in gaming.",
        item_id: 3,
        rating: 4,
        user_id: 4,
    },
    {
        text: "GTA V's blend of action, humor, and satire creates a unique gaming experience that's hard to match.",
        item_id: 3,
        rating: 5,
        user_id: 5,
    },
    {
        text: "The game's heists are a highlight, offering thrilling missions that require planning and execution.",
        item_id: 3,
        rating: 5,
        user_id: 6,
    },
    {
        text: "GTA Online adds a dynamic multiplayer element that extends the game's longevity and fun factor",
        item_id: 3,
        rating: 5,
        user_id: 7,
    },
    {
        text: "GTA V's excessive violence and mature themes overshadow its gameplay, making it an uncomfortable experience for some players.",
        item_id: 3,
        rating: 2,
        user_id: 8,
    },
    {
        text: "While not without controversy, GTA V's technical achievements and gameplay variety are hard to deny.",
        item_id: 3,
        rating: 5,
        user_id: 9,
    },
    {
        text: "The online component, GTA Online, can be plagued with microtransactions and cheaters, detracting from the overall enjoyment.",
        item_id: 3,
        rating: 3,
        user_id: 10,
    },

    //The Shawshank Redemption
    {
        text: "The Shawshank Redemption is a cinematic gem that transcends the boundaries of time and genre, leaving an indelible mark on the hearts of its viewers.",
        item_id: 7,
        rating: 5,
        user_id: 1,
    },
    {
        text: "The Shawshank Redemption is a cinematic masterpiece that transcends its prison setting. It's a powerful story of hope, friendship, and redemption that leaves a lasting impact.",
        item_id: 7,
        rating: 5,
        user_id: 2,
    },
    {
        text: "This film's enduring popularity is well-deserved. It's a perfect blend of drama, hope, and redemption that continues to resonate with audiences of all generations",
        item_id: 7,
        rating: 5,
        user_id: 3,
    },
    {
        text: "I know it's highly regarded, but 'The Shawshank Redemption' felt a bit too formulaic to me. The storyline is predictable, and I've seen similar prison dramas that left a stronger impact",
        item_id: 7,
        rating: 4,
        user_id: 4,
    },
    {
        text: "This film is an absolute gem. The performances by Tim Robbins and Morgan Freeman are top-notch, and the storytelling is nothing short of brilliant. It's a timeless classic.",
        item_id: 7,
        rating: 5,
        user_id: 5,
    },
    {
        text: "The Shawshank Redemption is a must-watch for anyone who appreciates a well-crafted film. It's a tale of friendship and survival that ranks among the greatest movies ever made.",
        item_id: 7,
        rating: 4,
        user_id: 6,
    },
    {
        text: "I appreciate the film's themes of hope and redemption, but I couldn't fully connect with the characters. It's well-made, but it didn't leave a lasting impression on me",
        item_id: 7,
        rating: 4,
        user_id: 7,
    },
    {
        text: "The Shawshank Redemption is a testament to the resilience of the human spirit. It's a deeply moving and thought-provoking film that stays with you long after the credits roll.",
        item_id: 7,
        rating: 5,
        user_id: 8,
    },
    {
        text: "While 'The Shawshank Redemption' has its moments, I found the pacing a bit slow, and some scenes overly sentimental. It's a decent film but didn't quite live up to the hype for me.",
        item_id: 7,
        rating: 3,
        user_id: 9,
    },
    {
        text: "I've seen this movie countless times, and it never gets old. The Shawshank Redemption is storytelling at its finest, with memorable characters and a poignant message.",
        item_id: 7,
        rating: 4,
        user_id: 10,
    },

    //Pulp Fiction
    {
        text: "Movies are just not made like this anymore. The scenes are prolonged with smart acting, genius scripting",
        item_id: 8,
        rating: 4,
        user_id: 3,
    },
    {
        text: "Pulp Fiction is a cinematic tour de force. Tarantino's storytelling genius, coupled with unforgettable performances, creates a cult classic that defies convention.",
        item_id: 8,
        rating: 5,
        user_id: 1,
    },
    {
        text: "This film is a genre-bending masterpiece. Its sharp dialogue, non-linear narrative, and eclectic characters make it a one-of-a-kind cinematic experience.",
        item_id: 8,
        rating: 5,
        user_id: 2,
    },
    {
        text: "Pulp Fiction is a film that rewrote the rules of cinema. Its dark humor, intriguing plot twists, and iconic soundtrack continue to captivate audiences.",
        item_id: 8,
        rating: 5,
        user_id: 4,
    },
    {
        text: "A groundbreaking work of art, Pulp Fiction's quirky characters and intricate plot keep you engaged from start to finish. It's a film that demands multiple viewings",
        item_id: 8,
        rating: 5,
        user_id: 5,
    },
    {
        text: "Tarantino's direction is nothing short of brilliant. Pulp Fiction is a rollercoaster ride of violence, wit, and unpredictability that leaves you in awe.",
        item_id: 8,
        rating: 4,
        user_id: 6,
    },
    {
        text: "Pulp Fiction is a cinematic mosaic of storytelling. Its unique blend of crime, humor, and philosophy makes it a true masterpiece of modern cinema",
        item_id: 8,
        rating: 5,
        user_id: 7,
    },
    {
        text: "The film's pop culture references and unforgettable dialogue have solidified its place in film history. Pulp Fiction is a cult classic for a reason",
        item_id: 8,
        rating: 4,
        user_id: 8,
    },
    {
        text: "Pulp Fiction is a bold and audacious work of art that never loses its appeal. Its impact on cinema and popular culture cannot be overstated. A true classic",
        item_id: 8,
        rating: 5,
        user_id: 9,
    },
    {
        text: "While Pulp Fiction has its moments, I found some of the dialogue forced and the constant shifting between storylines a bit confusing. It's certainly unique, but it didn't fully resonate with me.",
        item_id: 8,
        rating: 2,
        user_id: 10,
    },

    //2001:A Space Odyssey
    {
        text: "To me, this is not only Kubrick's best film but also a milestone of the genre. It is quite long at around two and a quarter hours, and it is slow, that I agree with. But it is never boring, well not to me it isn't.",
        item_id: 9,
        rating: 5,
        user_id: 2,
    },
    {
        text: "2001: A Space Odyssey is slow, confusing, and lacks a coherent plot. It's a pretentious bore.",
        item_id: 9,
        rating: 2,
        user_id: 1,
    },
    {
        text: "A mind-bending journey through space and time, '2001' is a cinematic masterpiece that challenges your perception of storytelling.",
        item_id: 9,
        rating: 5,
        user_id: 3,
    },
    {
        text: "Kubrick's visionary direction and the film's iconic imagery make '2001' an unparalleled work of art.",
        item_id: 9,
        rating: 5,
        user_id: 4,
    },
    {
        text: "I found '2001' to be overly abstract and disconnected, leaving me more frustrated than enlightened.",
        item_id: 9,
        rating: 2,
        user_id: 5,
    },
    {
        text: "A hypnotic blend of visual poetry and philosophical exploration that leaves you pondering its mysteries long after the credits roll.",
        item_id: 9,
        rating: 5,
        user_id: 6,
    },
    {
        text: "The film's deliberate pacing may test your patience, but its rewards are profound for those willing to immerse themselves in its enigmatic narrative.",
        item_id: 9,
        rating: 5,
        user_id: 7,
    },
    {
        text: "An avant-garde epic that remains a benchmark for science fiction and filmmaking excellence.",
        item_id: 9,
        rating: 4,
        user_id: 8,
    },
    {
        text: "The practical effects and attention to detail in '2001' are a testament to Kubrick's commitment to realism in a futuristic setting.",
        item_id: 9,
        rating: 5,
        user_id: 9,
    },
    {
        text: "A cerebral odyssey that continues to captivate new generations with its breathtaking visuals and existential questions.",
        item_id: 9,
        rating: 5,
        user_id: 10,
    },

    //Citizen Kane
    {
        text: "Greatest classic mystery film",
        item_id: 10,
        rating: 5,
        user_id: 1,
    },
    {
        text: "A timeless classic that redefined cinema, 'Citizen Kane' is a masterclass in storytelling and visual innovation.",
        item_id: 10,
        rating: 5,
        user_id: 2,
    },
    {
        text: "I don't get the hype. 'Citizen Kane' felt like a slow and pretentious bore to me",
        item_id: 10,
        rating: 1,
        user_id: 3,
    },
    {
        text: "Orson Welles' groundbreaking film remains a cinematic triumph, exploring themes of power and identity.",
        item_id: 10,
        rating: 5,
        user_id: 4,
    },
    {
        text: "While technically impressive, the story didn't engage me, and I found the characters unrelatable.",
        item_id: 10,
        rating: 2,
        user_id: 5,
    },
    {
        text: "A must-see for film enthusiasts, 'Citizen Kane' is a work of art that continues to influence generations of filmmakers.",
        item_id: 10,
        rating: 4,
        user_id: 6,
    },
    {
        text: "The non-linear narrative and deep character study make 'Citizen Kane' a thought-provoking and unforgettable experience.",
        item_id: 10,
        rating: 5,
        user_id: 7,
    },
    {
        text: "Welles' commanding performance and innovative use of cinematography make 'Citizen Kane' an enduring masterpiece.",
        item_id: 10,
        rating: 5,
        user_id: 8,
    },
    {
        text: "This film's exploration of the human psyche and ambition is as relevant today as it was when it was first released.",
        item_id: 10,
        rating: 5,
        user_id: 9,
    },
    {
        text: "A true cinematic gem, 'Citizen Kane' is a powerful exploration of the human condition that lingers in your thoughts long after viewing.",
        item_id: 10,
        rating: 5,
        user_id: 10,
    },
    //Red Dead Redemption
    {
        text: "Really fun game with an amazing open world. The open world mechanics are probably some of the best I’ve ever seen.",
        item_id: 16,
        rating: 4,
        user_id: 2,
    },
    {
        text: "Red Dead Redemption is a wild west masterpiece, combining epic storytelling and open-world freedom.",
        item_id: 16,
        rating: 5,
        user_id: 1,
    },
    {
        text: "The game's richly detailed world feels alive, and its characters are unforgettable.",
        item_id: 16,
        rating: 5,
        user_id: 3,
    },
    {
        text: "It's a virtual playground for cowboy dreams, offering thrilling shootouts and breathtaking scenery.",
        item_id: 16,
        rating: 5,
        user_id: 4,
    },
    {
        text: "Red Dead Redemption's moral choices and honor system add depth to the gameplay.",
        item_id: 16,
        rating: 5,
        user_id: 5,
    },
    {
        text: "The story of John Marston is a gripping tale of redemption and revenge.",
        item_id: 16,
        rating: 4,
        user_id: 6,
    },
    {
        text: "The game's attention to detail, from wildlife to gunfights, is awe-inspiring.",
        item_id: 16,
        rating: 5,
        user_id: 7,
    },
    {
        text: "While the world is beautifully crafted, the pacing and repetitive missions left me disinterested.",
        item_id: 16,
        rating: 2,
        user_id: 8,
    },
    {
        text: "Red Dead Redemption's multiplayer component, Red Dead Online, offers endless fun with friends.",
        item_id: 16,
        rating: 5,
        user_id: 9,
    },
    {
        text: "A timeless classic that sets the bar high for open-world gaming experiences.",
        item_id: 16,
        rating: 5,
        user_id: 10,
    },

    //Harry Potter and the prisoner of azkaban
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
    //Stranger Things S4
    {
        text: "How refreshing it is, then, to find that the just-concluded fourth season returns to the brilliant heights of its first.",
        item_id: 18,
        rating: 5,
        user_id: 2,
    },
    //Fallout 4
    {
        text: "Okay this game could be great but right now for me it just alright.",
        item_id: 19,
        rating: 2,
        user_id: 1,
    },
    {
        text: "Fallout 4 is an amazing game. Featuring the most complex character creation system in gaming history",
        item_id: 19,
        rating: 5,
        user_id: 2,
    },
    {
        text: "Broken beyond all repair.",
        item_id: 19,
        rating: 1,
        user_id: 3,
    },
    //The Lord of the Rings: The Fellowship of the Ring
    {
        text: "the Fellowship of the Rings opened the door to a whole new world for me.",
        item_id: 20,
        rating: 5,
        user_id: 1,
    },
    //The Office S1
    {
        text: "I'd been having some difficulties in my life and discovered this amazing show on Netflix that helped me escape from the real world.",
        item_id: 21,
        rating: 5,
        user_id: 2,
    },
    //Cyberpunk 2077
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
    //The Batman
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
    //True Detective S1
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
    {
        text: "It is compulsively watchable while providing a comfortable sense of the familiar and total immediacy.",
        item_id: 24,
        rating: 4,
        user_id: 4,
    },
    //Project Zomboid
    {
        text: "I found a newspaper a made a hat with it, 10/10 game,",
        item_id: 25,
        rating: 4,
        user_id: 3,
    },
    //Fifty Shades of Grey
    {
        text: "Here's a film that is offensive only in how inoffensive it proves to be.",
        item_id: 26,
        rating: 2,
        user_id: 1,
    },
    //Band of Brothers
    {
        text: "This series tackles all of the hard aspects of war, and doesn’t romanticize it. ",
        item_id: 27,
        rating: 5,
        user_id: 2,
    },
    //Rust
    {
        text: "Unending amount of game play if you pick a short span server.",
        item_id: 28,
        rating: 4,
        user_id: 2,
    },
    {
        text: "Game hella raciest so it gets a 10/10",
        item_id: 28,
        rating: 5,
        user_id: 1,
    },
    //The Lion King
    {
        text: "Nostalgia!",
        item_id: 29,
        rating: 5,
        user_id: 3,
    },
    //The Wire
    {
        text: "It is a well written tv show ",
        item_id: 30,
        rating: 5,
        user_id: 2,
    },
    {
        text: "Absolute tops.",
        item_id: 30,
        rating: 4,
        user_id: 3,
    },
    //Squid Game
    {
        text: "Omg, I’ve never been glued to my seat watching such a well made series,",
        item_id: 31,
        rating: 3,
        user_id: 2,
    },
    {
        text: "It’s been about 2 days since I finished this show and it has genuinely not left my mind ever since",
        item_id: 31,
        rating: 3,
        user_id: 3,
    },
    {
        text: "Korean content continues to set the standards, this time with a riveting, deliciously dark thriller series on Netflix called Squid Game.",
        item_id: 31,
        rating: 4,
        user_id: 4,
    },
    {
        text: "overall i think it is a brilliant show , the pacing is great ",
        item_id: 31,
        rating: 5,
        user_id: 1,
    },
    //The Matrix
    {
        text: "Is one of the best Classic Sci-Fi Action Film ever.",
        item_id: 32,
        rating: 5,
        user_id: 3,
    },
    {
        text: "I watched this movie for the first time last night. I quite enjoyed it, but it was strange.",
        item_id: 32,
        rating: 4,
        user_id: 4,
    },
    {
        text: "The movie was interesting, not amazing but ok",
        item_id: 32,
        rating: 3,
        user_id: 2,
    },
    {
        text: "I highly recommend it. The plot is mind blowing",
        item_id: 32,
        rating: 5,
        user_id: 1,
    },
    //Super Mario Bros
    {
        text: "This game is ICONIC",
        item_id: 33,
        rating: 5,
        user_id: 2,
    },
    {
        text: "One of the first side-scrollers/platformers I've ever played. It's hard to believe that a game from 1985 is the second best-selling video game ever.",
        item_id: 33,
        rating: 5,
        user_id: 3,
    },
    //Chernobyl
    {
        text: "This was a breathtaking dramatisation of  the horrors and chaos following a nuclear power plant disaster",
        item_id: 34,
        rating: 5,
        user_id: 1,
    },
    {
        text: "This show is realistic in everything. People, scientists, town of Prypiat, the atmosphere...",
        item_id: 34,
        rating: 4,
        user_id: 2,
    },
    {
        text: "Revitting revitting",
        item_id: 34,
        rating: 5,
        user_id: 4,
    },
    //Mad Max: Fury Road
    {
        text: "Amazing film. Deeper than just a car chase. ",
        item_id: 35,
        rating: 5,
        user_id: 4,
    },
    {
        text: "A fantastic thrill ride adventure drama! ",
        item_id: 35,
        rating: 4,
        user_id: 2,
    },
    {
        text: "The most jaw-dropping action film ever made? The practicality of all the action scenes makes me laugh in awe",
        item_id: 35,
        rating: 5,
        user_id: 3,
    },
    //Sonic the hedgehog
    {
        text: "Speedy, challenging gameplay",
        item_id: 36,
        rating: 4,
        user_id: 3,
    },
    {
        text: "Sega Classics. Though not a rivetting experience, it was probably best for it's time",
        item_id: 36,
        rating: 4,
        user_id: 2,
    },
    {
        text: "I found Sonic the Hedgehog to be frustrating due to its high-speed gameplay, which often led to unexpected obstacles and frequent 'cheap' deaths. It didn't live up to the hype for me",
        item_id: 36,
        rating: 2,
        user_id: 1,
    },
    {
        text: "Sonic's attitude and personality shine in this game. It's a joy to see him in action.",
        item_id: 36,
        rating: 5,
        user_id: 4,
    },
    {
        text: "Sonic the Hedgehog is a classic that defined a generation of gamers. It's a blast of nostalgia and speed.",
        item_id: 36,
        rating: 5,
        user_id: 5,
    },
    {
        text: "Fast-paced, colorful, and iconic, Sonic's debut game still holds up as a timeless platformer.",
        item_id: 36,
        rating: 5,
        user_id: 6,
    },
    {
        text: "The game's simplicity is part of its charm. Run fast, collect rings, defeat Robotnik",
        item_id: 36,
        rating: 4,
        user_id: 7,
    },
    {
        text: "Sonic's world is a vibrant playground of loops and jumps, making every level a thrill.",
        item_id: 36,
        rating: 3,
        user_id: 8,
    },
    {
        text: "While it's a bit dated, the original Sonic game remains a foundational piece of gaming history.",
        item_id: 36,
        rating: 4,
        user_id: 9,
    },
    {
        text: "Sonic the Hedgehog is a must-play for fans of retro gaming and anyone looking for a dose of pure fun.",
        item_id: 36,
        rating: 5,
        user_id: 10,
    },




];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;