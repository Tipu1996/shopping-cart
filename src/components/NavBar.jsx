import { Typography, AppBar, Toolbar, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const NavBar = ({ addedItems, theme, changeTheme }) => {
	return (
		<AppBar position="relative" style={{ marginBottom: "3%" }}>
			<Toolbar>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					disableRipple
					sx={{
						mr: 2,
						flexGrow: 1,
						justifyContent: "left",
					}}>
					<Link
						to="/"
						style={{
							display: "flex",
							alignItems: "center",
							textDecoration: "none",
							color: "inherit",
						}}>
						<FingerprintIcon />
					</Link>
				</IconButton>
				<Typography
					variant="h6"
					component="div"
					marginLeft={"3.5%"}
					sx={{ flexGrow: 1 }}>
					Shop yourself to Poverty
				</Typography>
				<IconButton
					aria-label="delete"
					onClick={() => changeTheme()}
					sx={{ mr: 2 }}>
					{theme === "light" ? (
						<Brightness4Icon />
					) : (
						<Brightness7Icon />
					)}
				</IconButton>
				<Badge
					badgeContent={addedItems === 0 ? addedItems.length : 0}
					color="secondary">
					<Link to="/shoppingcart">
						<IconButton aria-label="delete">
							<ShoppingCartIcon />
						</IconButton>
					</Link>
				</Badge>
			</Toolbar>
		</AppBar>
	);
};
export default NavBar;
