import React, { useContext } from "react";
import "../../styles/home.css";
import Context from "../store/appContext"


export const Home = () => {

	const { store, actions } = useContext(Context);

	if (!store.users) return null;


	return (
		<div className="text-center mt-5">
			<h1>Contactos</h1>
			<ul>
{
	store.users?.map(user =>(
		<li key={user.id}>

		</li>
	))

}

			</ul>

		</div>
	)
}


