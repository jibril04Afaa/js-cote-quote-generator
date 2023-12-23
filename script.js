let quoteBtn = document.querySelector('#new-quote-btn')
let quoteDisplaySection = document.querySelector("#quote-display-section")

// 25 quotes

let quoteArray = [
    // season 1
    `
    “What is evil? — Whatever springs from weakness ” 
    “Was ist schlecht? - Alles, was aus der Schwäche stammt”
    - F.W Nietzsche: The Antichrist
    
    `,

    `
    “It takes a great talent and skill to conceal one’s talent and skill”
    “C\’est une grande habileté que de savoir cacher son habileté” 
    - La Rochefoucauld, “Reflections; or Sentences and Moral Maxims”
    `,

    `
    “Man is the only animal that makes bargains; no dog exchanges bones with another”
    An Inquiry into the Nature and Causes of the Wealth of Nations 
    - Adam Smith    
    `, 

    `
    “We should not be upset that others hide the truth from us, when we hide it so often from ourselves.”
    “Il ne faut pas s’offenser que les autres nous cachent la vérité, puisque nous nous la cachons si souvent à nous-mêmes.”
    - La Rochefoucauld, “Reflections; or Sentences and Moral Maxims”
    `, 

    `
    “Hell is other people”
    “l\’enfer, c\’est les autres” 
    - Jean-Paul Sartre, Huis Clos “No Exit”
    `, 

    `
    “There are two kinds of lies; one concerns an accomplished fact, the other concerns a future duty.”
    “Il y a deux sortes de mensonges : celui de fait qui regarde le passé, celui de droit qui regarde l’avenir.”
     - Jean-Jacques Rousseau, Emile ou de l’education, “Emile, or On Education”
    `,

    `
    “Nothing is as dangerous as an ignorant friend; a wise enemy is to be preferred.” 
    Fables, Fables
    - Jean de La Fontaine
    `,
     
    `
    “Abandon all hope, ye who enter”
    “Lasciate ogni speranza, voi ch’entrate” 
    - Dante Alighieri, The Divine Comedy, “Inferno”, Canto III, Line 9
    `,

    `
    “Man is condemned to be free”
    “L\’homme est condamné à être libre”
    - Jean-Paul Sartre, “L\’existentialisme est un humanisme”,  Existentialism and Humanism
    `, 

    `
    “Every man has in himself the most dangerous traitor of all”
    “Den farligste Forræder blandt alle er den, ethvert Menneske har i sig selv” 
    - Kierkegaard, Kjerlighedens Gjerninger, “Works of Love”
    `,

    `
    “What people commonly call fate is mostly their own stupidity”
    “Was aber die Leute gemeiniglich das Schicksal mennen sind meistens nur ihre eigenen dummen Streiche” 
    - Parerga und Paralipomena : kleine philosophische Schriften, Schopenhauer, “Philosophical Writings”
    `,

    `
    “Genius lives only one story above madness”
    “Das Genie wohnt nur eine Etage höher als der Wahnsinn”
    - Parerga und Paralipomena : kleine philosophische Schriften, Schopenhauer, “Philosophical Writings”
    `,


    // season 2

    `“Remember to keep a clear head at all times” 
    - Horace, “Odes(Carmina)”`,

    `“There are two main human sins from which all the others derive: impatience and indolence” 
    - Franz Kafka`,

    `“The greatest souls are capable of the greatest vices as well as of the greatest virtues ” 
    “Les plus grandes âmes sont capables des plus grandes vices, aussi bien que des plus grandes vertus.” 
    - René Descartes`,

    `“The material has to be created” 
    - F. Nightingale
    Subsidiary notes as to the introduction of female nursing into military hospitals in peace and war`,

    `“Every failure is a step to success” 
    - W. Whewell. Lectures on the History of Moral Philosophy in England`,

    `“Adversity is the first path to truth”
    - G.G Byron`,

    `“To doubt everything or to believe everything are two equally convenient solutions; both dispense with the necessity of reflection” 
    “Douter de tout ou tout croire, ce sont deux solutions egalement commodes, qui l’une et l’autre nous dispensent de réflechir”
    - H. Poincare. La Science et L’Hypothèse`,

    `“The wound is at her heart”
    “Tacitum vivit sub pectore vulnus” 
    - Virgil. Aeneis`,

    `“If you make a mistake and do not correct it, this is called a mistake” 
    - Anonymous, “Analects”`,

    `“People, often deceived by an illusive good, desire their own ruin”
    “Il popolo molte volte desidera la rovina sua, ingannato da una falsa specie di bene”
     - N. Machiavelli, “Discourses on Livy”`,

    `“A man who cannot command himself will always be a slave”
    “Wer sich nicth selbst befiehlt, bleibt immer Knecht” 
    - JWV Goethe, “Zahme Xenien”`,

    `“Vis consilii expers mole ruit sua” 
    “The force of the plan was exhausted by its mass”
    - Horace, “Odes (Carmina)”`,

    `The worst enemy you can meet will always be yourself”
    “Der schlimmste Feind, dem du begegnen kannst, wirst du immer dir selber sein” 
    - F.W. Nietzsche, “Thus Spoke Zarathustra”`



]

let randomQuote = Math.floor(Math.random() * 25)

function generateQuote() {
    quoteDisplaySection.textContent = quoteArray[randomQuote]
        
}

quoteBtn.addEventListener('click', generateQuote)
