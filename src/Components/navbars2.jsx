import { useState } from "react";
import { iPhones } from "../iphones";
import { OnePluses } from "../OnePlus";
import { Gents } from "../imagedata";
import { AirpondsData } from "../airpondsdata";
import { Ladies } from "../dressWomen";
import { T_Shirt } from "../tShirts";
import { LaptopData } from "../laptopdata";
import { WatchesData } from "../watchesdata";
import { SandolsData } from "../sandolsdata";
import { Shoueses } from "../shouse";
import { LadiesSarees } from "../ladiesSarees";
import { PantsData } from "../pantsdata";

function SearchComponent() {
  const [selected, setSelected] = useState("");

  const products = {
    onePlusData: { products: OnePluses, id: "onePlus", name: "OnePlus" },
    iPhoneData: { products: iPhones, id: "iPhone", name: "iPhone" },
    shirtsData: { products: Gents, id: "Shirt", name: "shirt" },
    airpondesData: {
      products: AirpondsData,
      id: "Airponds",
      name: "airPondes",
    },
    ladiesDressData: { products: Ladies, id: "Dress", name: "dress" },
    tshirtsData: { products: T_Shirt, id: "Tshirt", name: "tShirts" },
    laptopsData: { products: LaptopData, id: "laptops", name: "laptops" },
    watchData: { products: WatchesData, id: "watch", name: "watches" },
    sandolData: { products: SandolsData, id: "sandol", name: "sandols" },
    shoesData: { products: Shoueses, id: "shoes", name: "shoes" },
    saresData: { products: LadiesSarees, id: "sarees", name: "sarees" },
    pantsData: { products: PantsData, id: "pants", name: "Pants" },
  };

  const handleSelectChange = (e) => {
    setSelected(e.target.value);
  };

  const selectedProduct = Object.values(products).find(
    (product) => product.id === selected
  );

  return (
    <div>
      <h2>Select a Product</h2>
      <select
        name="select_item"
        id="drop_select"
        value={selected}
        onChange={handleSelectChange}
      >
        <option value="">-- Select an item --</option>
        {Object.values(products).map((product) => (
          <option key={product.id} value={product.id}>
            {product.name}
          </option>
        ))}
      </select>

      {selectedProduct && (
        <div>
          <h3>{selectedProduct.name}</h3>
          {selectedProduct.products.map((product) => (
            <img src={product.image} alt="" width={200} height={200} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchComponent;
