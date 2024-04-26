import { ListingTile } from "./components";
import data from "./utils/data/mock-vehicle-search-response.json";

function App() {
  const vehicleDetails = data.data[0];
  return (
    <ListingTile
      name={vehicleDetails.name}
      plate={vehicleDetails.plate}
      make={vehicleDetails.make}
      model={vehicleDetails.model}
      derivative={vehicleDetails.derivative}
      advert_classification={vehicleDetails.advert_classification}
      fuel_type={vehicleDetails.fuel_type}
      transmission={vehicleDetails.transmission}
      media_urls={vehicleDetails.media_urls}
      price={vehicleDetails.price}
      original_price={vehicleDetails.original_price}
      // No data provided in mock response for the below props
      // Hardcoded for visibility of the elements in the ListingTile
      monthly_payment={(parseInt(vehicleDetails.price) / 48)
        .toFixed(2)
        .toString()}
      finance={"(PCP)"}
      slug={vehicleDetails.slug}
    />
  );
}

export default App;
