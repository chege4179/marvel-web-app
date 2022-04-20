const BASE_URL = "https://gateway.marvel.com"
const route = "/v1/public/characters"
const ApiCredentials = "?ts=1&apikey=edeb36852f8696cb83c487b2279bf494&hash=4f143c76c354fbfeead772ab3f62a179"
const container = document.getElementById("container")

function getApiURL(route){
	return `${BASE_URL}${route}${ApiCredentials}`
}
getMarvelData()
	.then(() => {
		console.log("Data fetched sucessfully")
	})
	.catch((err) => {
		console.log("Error occurred",err)
	})
async function getMarvelData(){
	const response = await fetch(getApiURL(route))
	const res = await response.json()
	console.log(res)
	res.data.results.forEach((character) => {
		container.innerHTML += `
			<div class="border-2 border-black p-2">
				<img class="w-full h-64" alt="${character.name}" src="${character.thumbnail.path}.${character.thumbnail.extension}"/>
				<h1>${character.name}</h1>
				<h1>Available Comics : ${character.comics.available}</h1>
				<h1>Description :</h1>
				<p>${character.description}</p>
				<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
				  	View More
				</button>
			</div>
		`
	})

}
