import Cards from "../components/Cards";
import NavBar from "../components/NavBar";

const ShoppingPage = ({
	theme,
	changeTheme,
	addItems,
	addedItems,
	itemsData,
}) => {
	const cart = false;
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
		</>
	);
};
export default ShoppingPage;
