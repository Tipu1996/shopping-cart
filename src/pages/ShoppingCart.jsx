import { useContext } from "react";
import Cards from "../components/Cards";
import NavBar from "../components/NavBar";
import Price from "../components/Price";
import MyContext from "../MyContext";

const ShoppingCart = () => {
	const { addItems, addedItems, itemsData, totalPrice } =
		useContext(MyContext);
	const cart = true;
	return (
		<>
			<NavBar />
			<Cards
				addItems={addItems}
				addedItems={addedItems}
				itemsData={itemsData}
				cart={cart}
			/>
			<Price totalPrice={totalPrice} />
		</>
	);
};
export default ShoppingCart;
