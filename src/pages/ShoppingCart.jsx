import Cards from "../components/Cards";
import NavBar from "../components/NavBar";
import Price from "../components/Price";

const ShoppingCart = ({
	theme,
	changeTheme,
	addItems,
	addedItems,
	itemsData,
	totalPrice,
}) => {
	const cart = true;
	return (
		<>
			<NavBar
				theme={theme}
				changeTheme={changeTheme}
				addedItems={addedItems}
			/>
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
