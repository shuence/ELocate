import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Brand {
  brand: string;
  models: string[];
}

interface Facility {
  distance: number;
  name: string;
  capacity: string;
  lon: number;
  lat: number;
  contact: string;
  time: string;
  verified: boolean;
}

const Smartphone: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [brands, setBrands] = useState<Brand[]>([]);
  const [models, setModels] = useState<string[]>([]);

  const handleBrandChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const brand = event.target.value;
    setSelectedBrand(brand);
    setSelectedModel("");

    if (brand) {
      const selectedBrand = brands.find((b) => b.brand === brand);
      if (selectedBrand) {
        setModels(selectedBrand.models);
      }
    }
  };

  useEffect(() => {
    const fetchBrandsAndModels = () => {
      const brandsData: Brand[] = [
        {
          brand: "Samsung",
          models: [
            "Galaxy S21",
            "Galaxy S20",
            "Galaxy Note 20",
            "Galaxy A52",
            "Galaxy M32",
          ],
        },
        {
          brand: "Apple",
          models: [
            "iPhone 13",
            "iPhone 12",
            "iPhone SE",
            "iPhone 11",
            "iPhone XR",
          ],
        },
        {
          brand: "Xiaomi",
          models: ["Redmi Note 10", "Mi 11X", "Poco X3", "Redmi 9", "Mi 10T"],
        },
        {
          brand: "OnePlus",
          models: [
            "OnePlus 9 Pro",
            "OnePlus 9",
            "OnePlus 8T",
            "OnePlus Nord",
            "OnePlus 8",
          ],
        },
        {
          brand: "Realme",
          models: [
            "Realme 8 Pro",
            "Realme Narzo 30 Pro",
            "Realme 7",
            "Realme C11",
            "Realme X7 Max",
          ],
        },
        {
          brand: "Vivo",
          models: [
            "Vivo V21",
            "Vivo Y73",
            "Vivo X60 Pro",
            "Vivo S1 Pro",
            "Vivo Y20G",
          ],
        },
        {
          brand: "OPPO",
          models: [
            "OPPO F19 Pro",
            "OPPO Reno 5 Pro",
            "OPPO A74",
            "OPPO A53",
            "OPPO Find X3 Pro",
          ],
        },
        {
          brand: "Nokia",
          models: [
            "Nokia 5.4",
            "Nokia 3.4",
            "Nokia 8.3",
            "Nokia 2.4",
            "Nokia 7.2",
          ],
        },
        {
          brand: "Motorola",
          models: [
            "Moto G60",
            "Moto G40 Fusion",
            "Moto G30",
            "Moto G9 Power",
            "Moto E7 Power",
          ],
        },
      ];

      setBrands(brandsData);
      setModels(models);
    };
    fetchBrandsAndModels();
  }, [models]);

  const handleSubmit = () => {
    toast.success("Submitted successfully!", {
      autoClose: 3000,
    });
  };

  return (
    <div className="container mx-auto p-8">
      <ToastContainer />

      <h1 className="text-4xl font-bold mb-6 p-6 text-center">
        Smartphone Recycling
      </h1>
      <form
        className="md:max-w-200 w-128 md:max-h-80 h-68  mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="mb-4">
          <label
            htmlFor="brand"
            className="block text-2xl font-medium text-gray-600"
          >
            Select Brand:
          </label>
          <select
            id="brand"
            value={selectedBrand}
            onChange={handleBrandChange}
            className="mt-1 text-xl p-2 border rounded-md w-full"
          >
            <option value="">Select Brand</option>
            {brands.map((brand) => (
              <option key={brand.brand} value={brand.brand}>
                {brand.brand}
              </option>
            ))}
          </select>
        </div>

        {selectedBrand && (
          <div className="mb-4">
            <label
              htmlFor="model"
              className="block text-2xl font-medium text-gray-600"
            >
              Select Model:
            </label>
            <select
              id="model"
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="mt-1 p-2 text-xl border rounded-md w-full"
            >
              <option value="">Select Model</option>
              {models.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>
        )}

        <button
          type="submit"
          className="bg-emerald-700 text-xl text-white px-6 py-3 rounded-md w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Smartphone;
