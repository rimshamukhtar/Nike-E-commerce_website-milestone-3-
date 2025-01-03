export default function List() {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 sm:p-8 lg:p-12 xl:p-16">
        {/* Icons Section */}
        <ul className="text-gray-600 text-sm font-medium flex flex-col gap-2 items-start">
          <li className="text-black">Icons</li>
          <li>Air Force 1</li>
          <li>Huarache</li>
          <li>Air Max 90</li>
          <li>Air Max 95</li>
        </ul>
  
        {/* Shoes Section */}
        <ul className="text-gray-600 text-sm font-medium flex flex-col gap-2 items-start">
          <li className="text-black">Shoes</li>
          <li>All Shoes</li>
          <li>Custom Shoes</li>
          <li>Jordan Shoes</li>
          <li>Running Shoes</li>
        </ul>
  
        {/* Clothing Section */}
        <ul className="text-gray-600 text-sm font-medium flex flex-col gap-2 items-start">
          <li className="text-black">Clothing</li>
          <li>All Clothing</li>
          <li>Modest Wear</li>
          <li>Hoodies & Pullovers</li>
          <li>Shirts & Tops</li>
        </ul>
  
        {/* Kid's Section */}
        <ul className="text-gray-600 text-sm font-medium flex flex-col gap-2 items-start">
          <li className="text-black">Kid&apos;s</li>
          <li>Infant & Toddler Shoes</li>
          <li>Kid&apos;s Shoes</li>
          <li>Kid&apos;s Jordan Shoes</li>
          <li>Kid&apos;s Basketball Shoes</li>
        </ul>
      </div>
    );
  }
  