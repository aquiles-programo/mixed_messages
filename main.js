const moods = [
	'Amused',
	'Blissful',
	'Calm',
	'Cheerful',
	'Content',
	'Dreamy',
	'Ecstatic',
	'Energetic',
	'Excited',
	'Flirty',
	'Giddy',
	'Good',
	'Happy',
	'Joyful',
	'Loving',
	'Mellow',
	'Optimistic',
	'Peaceful',
	'Silly',
	'Sympathetic',
	'Angry',
	'Annoyed',
	'Apathetic',
	'Bad',
	'Cranky',
	'Depressed',
	'Envious',
	'Frustrated',
	'Gloomy',
	'Grumpy',
	'Guilty',
	'Indifferent',
	'Melancholy',
	'Pessimistic',
	'Restless',
	'Sad',
	'Stressed',
	'Weird',
]
const programming_stuff = [
	'Python',
	'Javascript',
	'PHP',
	'Scala',
	'Ruby',
	'C#',
	'C++',
	'Java',
	'Lisp',
	'Golang',
	'NodeJS',
	'ReactJS',
	'Bootstrap',
	'Laravel',
	'Express',
	'Perl',
	'Assembly',
	'.NET',
	'Spring Boot',
	'HTML',
	'CSS',
	'No Code',
]

const projects = [
	'portfolio Website',
	'Twitter Clone',
	'weather App',
	'to-do list',
	'discord bot',
	'quiz game',
	'hello world',
]

const generateRandomMessage = () => {
	return `Today I'm feeling ${randomElement(
		moods
	)} because my boss asked me to build a ${randomElement(
		projects
	)} using ${randomElement(programming_stuff)} and ${randomElement(
		programming_stuff
	)}`
}

const randomElement = (arr) => {
	return arr[Math.floor(Math.random() * arr.length)]
}

console.log(generateRandomMessage())
