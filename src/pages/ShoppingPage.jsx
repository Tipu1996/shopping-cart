import Cards from "../components/Cards";
import NavBar from "../components/NavBar";

const ShoppingPage = () => {
	const cart = false;
	return (
		<>
			<NavBar />
			<Cards cart={cart} />
		</>
	);
};
export default ShoppingPage;
