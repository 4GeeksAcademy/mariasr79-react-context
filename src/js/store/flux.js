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
    
            },            editContact: async (id, name, phone, email, address) => {
                const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ full_name: name, phone, email, address, agenda_slug: "mariasr79" })
                });
                if (response.ok) {
                    getActions().getUsers();
                }
            },
            deleteContact: async (id) => {
                const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
                    method: "DELETE"
                });
                if (response.ok) {
                    getActions().getUsers();
                }
            }
        }
    };
};

export default getState;
