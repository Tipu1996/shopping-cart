import {
	Button,
	Card,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";

const CardComp = ({ item, addItems }) => {
	return (
		<Button
			onClick={() => {
				addItems(item);
			}}
			style={{
				width: "100%",
				height: "100%",
			}}>
			<Card
				style={{
					width: "100%",
					height: "100%",
				}}>
				<CardMedia
					component="img"
					src={item.image}
					height={"80%"}
					title={item.name}
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant="h6"
						textAlign={"center"}
						height={"20%"}>
						{item.title}
					</Typography>
				</CardContent>
			</Card>
		</Button>
	);
};
export default CardComp;
