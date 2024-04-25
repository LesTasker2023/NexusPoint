import { ListingTile } from "./components";
import data from "./utils/data/mock-vehicle-search-response.json";

function App() {
  console.log("🚀 ~ data:", data);
  return (
    <ListingTile
      name={data.data[0].name}
      plate={data.data[0].plate}
      make={data.data[0].make}
      model={data.data[0].model}
      derivative={data.data[0].derivative}
      advert_classification={data.data[0].advert_classification}
      fuel_type={data.data[0].fuel_type}
      transmission={data.data[0].transmission}
      media_urls={data.data[0].media_urls}
      price={data.data[0].price}
      original_price={data.data[0].original_price}
      // No data provided in mock response for the below props
      // Hardcoded for visibility of the elements in the ListingTile
      monthly_payment={(parseInt(data.data[0].price) / 48).toString()}
      finance={"(PCP)"}
    />
  );
}

export default App;
