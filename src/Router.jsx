import { lightThemeOptions, darkThemeOptions } from "./theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import HomePage from "./pages/HomePage";
import ShoppingPage from "./pages/ShoppingPage";
import ShoppingCart from "./pages/ShoppingCart";
import axios from "axios";
import MyContext from "./MyContext";

const Router = () => {
	const [theme, setTheme] = useState("dark");
	const [addedItems, setAddedItems] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const addItems = (addedProduct) => {
		const cartItems = [...addedItems, addedProduct];
		setAddedItems(cartItems);

		const price = addedProduct.price + totalPrice;
		setTotalPrice(price);
	};

	const changeTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	const [itemsData, setItemsData] = useState([]);

	useEffect(() => {
		const fetchItemsData = async () => {
			try {
				let tenItems = await axios.get(
					`https://fakestoreapi.com/products?limit=10`
				);
				tenItems = tenItems.data;
				const mappedItems = tenItems.map((item) => ({
					id: item.id,
					title: item.title,
					image: item.image,
					price: item.price,
				}));
				setItemsData(mappedItems);
			} catch (error) {
				console.error("Error fetching Items data:", error);
			}
		};

		fetchItemsData();
	}, []);

	const router = createBrowserRouter([
		{
			path: "/",
			element: <HomePage />,
			// errorElement: <ErrorPage />,
		},
		{
			path: "/shoppingpage",
			element: (
				<ShoppingPage
				// theme={theme}
				// changeTheme={changeTheme}
				// addItems={addItems}
				// addedItems={addedItems}
				// itemsData={itemsData}
				/>
			),
		},
		{
			path: "/shoppingcart",
			element: <ShoppingCart />,
		},
	]);

	return (
		<MyContext.Provider
			value={{
				router,
				theme,
				changeTheme,
				addItems,
				addedItems,
				itemsData,
				totalPrice,
			}}>
			<ThemeProvider
				theme={
					theme === "light" ? lightThemeOptions : darkThemeOptions
				}>
				<CssBaseline />
				<RouterProvider router={router} />
			</ThemeProvider>
		</MyContext.Provider>
	);
};

export default Router;
