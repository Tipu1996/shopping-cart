import { useContext } from "react";
import CardComp from "./CardComp";
import { Grid, Typography } from "@mui/material";
import MyContext from "../MyContext";

const Cards = ({ cart }) => {
	const { addItems, addedItems, itemsData } = useContext(MyContext);
	return (
		<Grid container justifyContent={"center"}>
			{cart === true ? (
				itemsData.length === 0 ? (
					<Typography variant="h4" textAlign={"center"}>
						Cart is Empty
					</Typography>
				) : (
					addedItems.map((item, index) => (
						<Grid
							item
							xs={6}
							sm={6}
							md={4}
							lg={4}
							key={index}
							style={{
								width: "30vw", // Adjust width
								height: "50vh", // Adjust height
							}}>
							<CardComp item={item} addItems={addItems} />
						</Grid>
					))
				)
			) : itemsData && itemsData.length === 0 ? (
				<Typography variant="h4" textAlign={"center"}>
					Loading
				</Typography>
			) : (
				itemsData &&
				itemsData.map((item, index) => (
					<Grid
						item
						xs={6}
						sm={6}
						md={4}
						lg={4}
						key={index}
						style={{
							width: "30vw", // Adjust width
							height: "50vh", // Adjust height
						}}>
						<CardComp item={item} addItems={addItems} />
					</Grid>
				))
			)}
		</Grid>
	);
};
export default Cards;
