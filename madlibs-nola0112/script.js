const story = {
    color:  'yellow',
    noun:  ['tacos', 'Forces', 'dogs', 'boys'], 
    adjective: 'soft',
    exclamation: 'MY MAN!',
    sillyword: 'Sticky goose',
    verb: ['kicked', 'jumped', 'big run']
}

console.log(`
Little Red Ridding Hood

Part 1

One day, Little ${story.color} Riding Hood was going through the forest carrying a 
basket of ${story.noun[0]} for her grandmother. Suddenly, she met a big 
${story.adjective} wolf.

"${story.exclamation}" said the wolf. "Where are you going little ${story.sillyword} ?"

"I'm going to my grandmother's house," she said. Then the wolf 
${story.verb[0]} away.

When Miss Riding Hood got to her grandmother's house, the wolf was in bed 
dressed like her grandmother.

"My, Grandmother," she said. "What big ${story.noun[1]} you have."

"The better to ${story.verb[1]} you with," said the wolf.

"And, Grandmother," she said, "what big ${story.noun[2]}" you have."

The wolf said, "The better to ${story.verb[2]} you with."

And then she said, "What big ${story.noun[3]}" you have, Grandmother." But 
the wolf said nothing. He had just died of indigestion from eating Grandmother
`)

// change color priority 
story.color = 'green'

//change 3rd string plural noun
story.noun[2] = 'bands'

// change exclamation 
story.exclamation = 'OOOPS!'

// change 2nd string in verb array
story.verb[1] = 'sauced'

console.log(` 

Part 2 

One day, Little ${story.color} Riding Hood was going through the forest carrying a 
basket of ${story.noun[0]} for her grandmother. Suddenly, she met a big 
${story.adjective} wolf.

"${story.exclamation}" said the wolf. "Where are you going little ${story.sillyword}?"

"I'm going to my grandmother's house," she said. Then the wolf 
${story.verb[0]} away.

When Miss Riding Hood got to her grandmother's house, the wolf was in bed 
dressed like her grandmother.

"My, Grandmother," she said. "What big ${story.noun[1]} you have."

"The better to ${story.verb[1]} you with," said the wolf.

"And, Grandmother," she said, "what big ${story.noun[2]}" you have."

The wolf said, "The better to ${story.verb[2]} you with."

And then she said, "What big ${story.noun[3]}" you have, Grandmother." But 
the wolf said nothing. He had just died of indigestion from eating Grandmother `)

const snowWhite = {
    pluralNoun: ['crabs', 'bucks'],
    number: 4.20,
    adjective: ['gross', 'reckless', 'huge'],
    noun: ['Lasga', 'hat', 'Steve', 'purp drank', 'blue pill'],
    color: 'light blue',
    partOfBody: 'knee',
    adverb: 'slowly'
}

console.log(` 

Snow White

Part 1

One of the most popular fairy ${snowWhite.pluralNoun[0]} of all time is Snow White and the 
${snowWhite.number} ${snowWhite.pluralNoun[1]}.

Snow White is a princess whose ${snowWhite.adjective[0]} beauty threatens her stepmother, 
the queen. Snow White is forced to flee from the ${snowWhite.noun[0]} in which she lives 
and hide in a nearby ${snowWhite.noun[1]}.

Once there, she is discovered by ${snowWhite.adjective[1]} animals who guide her to the 
${snowWhite.adjective[2]} cottage of the seven dwarfs. The dwarfs take care of her until 
the prince, who has traveled the four corners of the ${snowWhite.noun[2]} in search of 
Snow ${snowWhite.color}, arrives and gives her a magical ${snowWhite.noun[3]} on her 
${snowWhite.partOfBody}, which miraculously bring her back to life after she eats 
a poisonous ${snowWhite.noun[4]}. Snow White and the prince live ${snowWhite.adverb} ever after.
`)

// change the number
snowWhite.number = '800'

// change 1st string in adjective array
snowWhite.adjective[0] = 'greasy'

// change the 2nd and 4th string in noun array
snowWhite.noun[1] = 'kyle bruose'
snowWhite.noun[3] = 'Board man'

// change the color
snowWhite.color = 'brown'

console.log(` 

Part 2

One of the most popular fairy ${snowWhite.pluralNoun[0]} of all time is Snow White and the 
${snowWhite.number} ${snowWhite.pluralNoun[1]}.

Snow White is a princess whose ${snowWhite.adjective[0]} beauty threatens her stepmother, 
the queen. Snow White is forced to flee from the ${snowWhite.noun[0]} in which she lives 
and hide in a nearby ${snowWhite.noun[1]}.

Once there, she is discovered by ${snowWhite.adjective[1]} animals who guide her to the 
${snowWhite.adjective[2]} cottage of the seven dwarfs. The dwarfs take care of her until 
the prince, who has traveled the four corners of the ${snowWhite.noun[2]} in search of 
Snow ${snowWhite.color}, arrives and gives her a magical ${snowWhite.noun[3]} on her 
${snowWhite.partOfBody}, which miraculously bring her back to life after she eats 
a poisonous ${snowWhite.noun[4]}. Snow White and the prince live ${snowWhite.adverb} ever after.
`)