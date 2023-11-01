import { Typography } from "@mui/material";

const Price = ({ totalPrice }) => {
	return (
		<Typography
			gutterBottom
			variant="h6"
			textAlign={"center"}
			height={"20%"}>
			Total Price: {totalPrice}
		</Typography>
	);
};
export default Price;
