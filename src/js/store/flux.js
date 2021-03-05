const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personas: [],
			planetas: [],
			likes: [],
			logged: false
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadSomeData: () => {
				fetch("https://3000-fuchsia-finch-ukfmiw0c.ws-us03.gitpod.io/people")
					.then(data => data.json())
					.then(data => {
						let characters = data.personajes;
						setStore({ personas: characters });
					});

				fetch("https://3000-fuchsia-finch-ukfmiw0c.ws-us03.gitpod.io/planets")
					.then(data => data.json())
					.then(data => {
						let planets = data.planets;
						setStore({ planetas: planets });
					});
			},
			addFav: fav => {
				const data = fav;
				setStore({
					likes: getStore().likes.concat(data)
				});
			},
			deleteFavPlanet: (planetId, token, userId) => {
				let data = {
					planet_id: planetId
				};
				console.log(data, token, userId, JSON.stringify(data));
				fetch(`https://3000-fuchsia-finch-ukfmiw0c.ws-us03.gitpod.io/users/${userId}/favorites`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + token
					},
					body: JSON.stringify(data)
				})
					.then(response => response.json())
					.then(data => console.log(data));

				setStore({
					likes: getStore().likes.filter(item => item.planetId !== planetId)
				});
			},

			deleteFavCharacter: (characterId, token, userId) => {
				let data = {
					character_id: characterId
				};
				console.log(data, token, userId);
				fetch(`https://3000-fuchsia-finch-ukfmiw0c.ws-us03.gitpod.io/users/${userId}/favorites`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + token
					},
					body: JSON.stringify(data)
				})
					.then(response => response.json())
					.then(data => console.log(data));

				setStore({
					likes: getStore().likes.filter(item => item.characterId !== characterId)
				});
			},

			checkLogged: () => {
				let userId = sessionStorage.getItem("userId");
				let token = sessionStorage.getItem("token");
				if (token) {
					setStore({ logged: true });
				} else {
					setStore({ logged: false });
				}
			},
			addNewFavPlanet: object => {
				let userId = sessionStorage.getItem("userId");
				console.log("ADD PLANET");
				fetch(`https://3000-fuchsia-finch-ukfmiw0c.ws-us03.gitpod.io/users/${userId}/favorites`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + sessionStorage.getItem("token")
					},
					body: JSON.stringify(object)
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
						setStore({
							likes: [...getStore().likes, object]
						});
					})
					.catch(err => console.log(err));
			},
			addNewFavCharacter: object => {
				console.log("ADD CHAR1");
				let userId = sessionStorage.getItem("userId");
				fetch(`https://3000-fuchsia-finch-ukfmiw0c.ws-us03.gitpod.io/users/${userId}/favorites`, {
					//https://3000-fuchsia-finch-ukfmiw0c.ws-us03.gitpod.io/users/1/favorites
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + sessionStorage.getItem("token")
					},
					body: JSON.stringify(object)
				})
					.then(response => {
						console.log("RESPONSE");
						return response.json();
					})
					.then(data => {
						console.log(data);
						console.log("ADD CHAR2");
						setStore({
							likes: [...getStore().likes, object]
							// likes: { ...getStore().likes, object }
						});
					})
					.catch(err => console.log(err));
			}
		}
	};
};

export default getState;
