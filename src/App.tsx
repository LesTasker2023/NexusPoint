import data from "./utils/data/mock-vehicle-search-response.json";
import { ListingFeed } from "./views/ListingFeed";

function App() {
  const vehicleDetails = data.data;
  return <ListingFeed data={vehicleDetails} />;
}

export default App;
