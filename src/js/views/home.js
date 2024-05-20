import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import ContactCard from "../component/ContactCard";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getUsers();
    }, []);

    if (!store.users) return null;

    return (
        <div className="container mt-5">
            <h1>Contactos</h1>
            <div className="row">
                {store.users.map((contact) => (
                    <div key={contact.id} className="col-md-4">
                        <ContactCard contact={contact} onDelete={actions.deleteContact} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
