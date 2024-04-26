import { ListingTile } from "./components";
import data from "./utils/data/mock-vehicle-search-response.json";

function App() {
  const vehicleDetails = data.data[0];
  return (
    <ListingTile
      {...vehicleDetails}
      // No data provided in mock response for the below props
      // Hardcoded for visibility of the elements in the ListingTile
      monthly_payment={(parseInt(vehicleDetails.price) / 48)
        .toFixed(2)
        .toString()}
      finance={"(PCP)"}
    />
  );
}

export default App;
