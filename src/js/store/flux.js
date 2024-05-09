const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: []
		},
		actions: {
			getUsers: async () => {
				const users = await fetch("https://playground.4geeks.com/contact/agendas/mariasr79/contacts");
				const userJson = await users.json();
				setStore({ users: userJson.users })
				if (!resp.ok) {
					createUser();
				}
				return resp.json()
			}

		},
		createAgenda: async () => {
			await fetch("https://playground.4geeks.com/contact/agendas/mariasr79",
				{ method: "POST" }
			);


		},

		createContact: async (name, phone, email, address) => {
			await fetch("https://playground.4geeks.com/contact/agendas/mariasr79/contacts",
				{
					method: "POST",
					body: JSON.stringify({
						"name": name,
						"phone": phone,
						"email": email,
						"address": address
					})
				}
			)

		},
		// 	.then(resp => {
		// 		if (resp.ok) {
		// 			return resp.json()
		// 		}
		// 	}).then(respJson => {
		// 		const userTaks = user.todos;
		// 		const newUser = {
		// 			...user,
		// 			todos: [...userTaks, respJson]
		// 		};
		// },
		editContact: async (name, phone, email, address, contactid) => {
			await fetch(`https://playground.4geeks.com/contact/agendas/mariasr79/contacts/${contactid}`,
				{
					method: "PUT",
					body: JSON.stringify({
						"name": name,
						"phone": phone,
						"email": email,
						"address": address
					})
				}
			)
			// const validateTask = (task) => {
			// 	if (!task || !task.trim()) {
			// 		alert("el valor de la tarea no puede ser vacio")
			// 	}
			// 	createTask(task)
			// 	setTask("");
			// }
		},
		deleteContact: async (contactid) => {
			await fetch(`https://playground.4geeks.com/contact/agendas/mariasr79/contacts/${contactid}`,
				{
					method: "DELETE"

				}
				// }).then(resp => {
				// 	if (resp.ok) {
				// 		const userTaks = user.todos.filter(item => item.id !== task.id)
				// 		const newUser = {
				// 			...user,
				// 			todos: [...userTaks]
				// 		};
				// 		setUser(newUser)
			)
		}

	}
}
	
export default getState;
