import { Serie } from "./serie.js";
export const series: Serie[] = [

	new Serie(
	  "Breaking Bad",
	  2008,
	  5,
	  "Vince Gilligan",
	  ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
	  "AMC",
	  "Streaming",
	  "https://ce.amc.com/series/breaking-bad",
	  "A high school chemistry teacher turns to cooking methamphetamine to secure his family's financial future after being diagnosed with cancer.",
	  "./images/Breaking.jpg"
	),
	new Serie(
	  "Game of Thrones",
	  2011,
	  8,
	  "David Benioff, D. B. Weiss",
	  ["Emilia Clarke", "Kit Harington", "Peter Dinklage"],
	  "HBO",
	  "Streaming",
	  "https://www.hbo.com/game-of-thrones",
	  "A medieval fantasy epic set in the fictional continents of Westeros and Essos, revolving around power struggles among noble families, dragons, and supernatural threats.",
	  "./images/GOT.jpg"
	),
	new Serie(
		"Young Sheldon",
		 2017, 
		 7, 
		 "Chuck Lorre & Steven Molaro", 
		 ["Sheldon Copper", "Mary Copper", "Melissa Copper","George Copper", "Meemaw"], 
		 "CBS", 
		 "Streaming", 
		 "https://www.cbs.com/shows/young-sheldon/", 
		 "A comedy series following the childhood of Sheldon Cooper, a young prodigy with an exceptional intellect, as he navigates life in East Texas with his family.", 
		"./images/youngsheldon.jpg"),
	
	new Serie(
	  "Friends",
	  1994,
	  10,
	  "David Crane, Marta Kauffman",
	  ["Jennifer Aniston", "Courteney Cox", "Lisa Kudrow"],
	  "NBC",
	  "Streaming",
	  "https://www.nbc.com/friends",
	  "A sitcom portraying the lives and relationships of six friends living in Manhattan, exploring themes of friendship, love, and career challenges",
	  "./images/friends.jpg"
	),
	new Serie(
	  "Palpito",
	  2022,
	  2,
	  "Leonardo Padrón",
	  ["Zacarias", "Camila Duarte", "Simon Duque"],
	  "Netflix",
	  "Streaming",
	  "https://www.netflix.com/title/81261170",
	  "A Colombian series depicting the dark world of organ trafficking, exploring the moral dilemmas and criminal underworld surrounding this illicit trade.",
	  "./images/palpito.jpg"
	)
  ];