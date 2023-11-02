import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Typography } from "@mui/material";
import { useContext } from "react";
import MyContext from "../MyContext";

const HomePage = () => {
	return (
		<>
			<NavBar />
			<Link
				to="/shoppingpage"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					textDecoration: "none",
					color: "inherit",
				}}>
				<Typography
					gutterBottom
					variant="h6"
					textAlign={"center"}
					height={"20%"}>
					Go to the Shopping Page
				</Typography>
			</Link>
		</>
	);
};
export default HomePage;
