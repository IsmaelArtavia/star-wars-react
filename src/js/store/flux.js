const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					name: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					name: "SECOND",
					background: "white",
					initial: "white"
				},
				{
					name: "THIRD",
					background: "black",
					initial: "white"
				}
			],
			personas: [],
			planetas: [],
			likes: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
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
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addFav: fav => {
				const data = fav;
				setStore({
					likes: getStore().likes.concat(data)
				});
			},
			deleteFav: id => {
				setStore({
					likes: getStore().likes.filter(item => item.id !== id)
				});
			}
		}
	};
};

export default getState;
