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
    />
  );
}

export default App;
