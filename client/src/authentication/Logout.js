import React from "react";
import axios from "../config/axios";

const Logout = props => {
	axios
		.delete("/users/logout", {
			headers: {
				"x-auth": localStorage.getItem("token")
			}
		})
		.then(responce => {
			localStorage.removeItem("token");
			props.handleIsAuthenticated();
		})
		.catch(err => {
			return "somthing went worng";
		});
	props.history.push("/login");
	return <div />;
};

export default Logout;