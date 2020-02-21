/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  }
];

const newArticle1 = {
  title: 'Remember, remember, the 5th of November, the Gunpowder Treason and Plot.',
  date: 'Nov 5th, 1982',
  firstParagraph: `Voilà! In view, a humble vaudevillian veteran, cast vicariously as both victim and villain by the vicissitudes of Fate. This visage, no mere veneer of vanity, is a vestige of the vox populi, now vacant, vanished. However, this valorous visitation of a by-gone vexation, stands vivified and has vowed to vanquish these venal and virulent vermin vanguarding vice and vouchsafing the violently vicious and voracious violation of volition. [carves "V" into poster on wall] The only verdict is vengeance; a vendetta, held as a votive, not in vain, for the value and veracity of such shall one day vindicate the vigilant and the virtuous. Verily, this vichyssoise of verbiage veers most verbose, so let me simply add that it's my very good honor to meet you and you may call me V.`,

  secondParagraph: `Eve: All this riot and uproar, V... is this Anarchy? Is this the Land of Do-As-You-Please?
  V: No. This is only the land of take-what-you-want. Anarchy means "without leaders", not "without order". With anarchy comes an age or ordnung, of true order, which is to say voluntary order... this age of ordung will begin when the mad and incoherent cycle of verwirrung that these bulletins reveal has run its course... This is not anarchy, Eve. This is chaos.`,

  thirdParagraph: `I know there\'s no way I can convince you this is not one of their tricks, but I don\'t care, I am me. My name is Valerie, I don\'t think I\'ll live much longer and I wanted to tell someone about my life. This is the only autobiography ill ever write, and god, I\'m writing it on toilet paper. I was born in Nottingham in 1985, I don\'t remember much of those early years, but I do remember the rain. My grandmother owned a farm in Tuttlebrook, and she use to tell me that god was in the rain. I passed my 11th lesson into girl\'s grammar; it was at school that I met my first girlfriend, her name was Sara. It was her wrists. They were beautiful. I thought we would love each other forever. I remember our teacher telling us that is was an adolescent phase people outgrew. Sara did, I didn\'t. In 2002 I fell in love with a girl named Christina. That year I came out to my parents. I couldn\'t have done it without Chris holding my hand. My father wouldn\'t look at me, he told me to go and never come back. My mother said nothing. But I had only told them the truth, was that so selfish? Our integrity sells for so little, but it is all we really have. It is the very last inch of us, but within that inch, we are free. I\'d always known what I wanted to do with my life, and in 2015 I starred in my first film, "The Salt Flats". It was the most important role of my life, not because of my career, but because that was how I met Ruth. The first time we kissed, I knew I never wanted to kiss any other lips but hers again. We moved to a small flat in London together. She grew Scarlet Carsons for me in our window box, and our place always smelled of roses. Those were there best years of my life. But America\'s war grew worse, and worse. And eventually came to London. After that there were no roses anymore. Not for anyone. I remember how the meaning of words began to change. How unfamiliar words like collateral and rendition became frightening. While things like Norse Fire and The Articles of Allegiance became powerful, I remember how different became dangerous. I still don\'t understand it, why they hate us so much. They took Ruth while she was out buying food. I\'ve never cried so hard in my life. It wasn\'t long till they came for me.It seems strange that my life should end in such a terrible place, but for three years, I had roses, and apologized to no one. I shall die here. Every inch of me shall perish. Every inch, but one. An Inch, it is small and it is fragile, but it is the only thing the world worth having. We must never lose it or give it away. We must never let them take it from us. I hope that whoever you are, you escape this place. I hope that the world turns and that things get better. But what I hope most of all is that you understand what I mean when I tell you that even though I do not know you, and even though I may never meet you, laugh with you, cry with you, or kiss you. I love you. With all my heart, I love you. -Valerie`,
};

const newArticle2 = {
  title: 'It was a pleasure to burn.',
  date: 'Jan 1st, 1954',
  firstParagraph: `He was not happy. He was not happy. He said the words to himself. He recognized this as the true state of affairs. He wore his happiness like a mask and the girl had run off across the lawn with the mask and there was no way of going to knock on her door and ask for it back.`,

  secondParagraph: `We need not to be let alone. We need to be really bothered once in a while. How long is it since you were really bothered? About something important, about something real?`,

  thirdParagraph: `Why is it,’ he said, one time, at the subway entrance, ‘I feel I’ve known you so many years?’ ‘Because I like you,’ she said, ‘and I don’t want anything from you.`
};

const newArticle3 = {
  title: 'He who controls the spice controls the universe.',
  date: 'June 1st, 1965',
  firstParagraph: `I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.`,

  secondParagraph: `Deep in the human unconscious is a pervasive need for a logical universe that makes sense. But the real universe is always one step beyond logic.`,

  thirdParagraph: `The mystery of life isn't a problem to solve, but a reality to experience.`
};

  function createComponent(title, date, firstParagraph, secondParagraph, thirdParagraph) {
    // define new elements
    const component = document.createElement('div');
    const titleH2 = document.createElement('h2');
    const dates = document.createElement('p');
    const para1 = document.createElement('p');
    const para2 = document.createElement('p');
    const para3 = document.createElement('p');
    const button = document.createElement('div');


    // setup structure of elements
    component.appendChild(titleH2);
    component.appendChild(dates);
    component.appendChild(para1);
    component.appendChild(para2);
    component.appendChild(para3);
    component.appendChild(button);

    // setup class names
    component.classList.add('article');
    dates.classList.add('date');
    button.classList.add('expandButton');

    // setup text content
    titleH2.textContent = title;
    dates.textContent = date;
    para1.textContent = firstParagraph;
    para2.textContent = secondParagraph;
    para3.textContent = thirdParagraph;
    button.textContent = 'Expand';

    // setup event listener
    button.addEventListener('click', (event) => {
      component.classList.toggle('article-open');
    });

    // return
    return component;
  };

const articles = document.querySelector('.articles');
data.push(newArticle1);
data.push(newArticle2);
data.push(newArticle3);

data.map(item => {
  articles.appendChild(createComponent(item.title, item.date, item.firstParagraph, item.secondParagraph, item.thirdParagraph))
});

/* [x] Step 1: Create a function that creates a component. You will want your component to look like the template below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  [x] Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  [x] Step 3: return the entire component. 

  [x] Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  [x] Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/
