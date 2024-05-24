const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            users: []
        },
        actions: {
            getUsers: async () => {
                try {
                    const response = await fetch("https://playground.4geeks.com/contact/agendas/mariasr79/contacts");
                    const userJson = await response.json();
            
                    if (!response.ok) {
                        createUser();
                        return;
                    }
            
                    setStore({ users: userJson });
                    return userJson;
                } catch (error) {
                    console.error("Error fetching users:", error);
                }
            },
            
            createContact: async (name, phone, email, address) => {
                try {
                    const response = await fetch("https://playground.4geeks.com/apis/contact/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            full_name: name,
                            phone: phone,
                            email: email,
                            address: address,
                            agenda_slug: "mariasr79" 
                        })
                    });
            
                    if (!response.ok) {
                        throw new Error('Error en la petición');
                    }
            
                    const newContact = await response.json();
                    
                    const store = getStore();
                    setStore({ contacts: [...store.contacts, newContact] });
            
                    return newContact;
                } catch (error) {
                    console.error("Error creating contact:", error);
                }
            },
            
            const response = await fetch(`https://playground.4geeks.com/contact/docs//agendas/{slug}/contacts/{contact_id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fullName: name,
                    phone: phone,
                    email: email,
                    address: address,
                    agenda_slug: "mariasr79"
                })
            }),
            
            deleteContact: async (id) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/docs/agendas/{slug}`, {
                        method: "DELETE"
                    });
            
                    if (!response.ok) {
                        throw new Error('Error en la petición');
                    }
                    getActions().getUsers();
                } catch (error) {
                    console.error("Error deleting contact:", error);
                }
            }
            
        }
    };
};

export default getState;
