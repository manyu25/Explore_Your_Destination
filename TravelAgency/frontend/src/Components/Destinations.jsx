import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Destinations = () => {
  return (
    <div id="destinations" className="font-macondo">
      {/* Main Section */}
      <div className="flex justify-center items-center bg-sky-100 py-8">
        <h1 className="text-4xl font-bold">Our Destinations</h1>
      </div>
      <div className="flex sm:flex-row flex-col">
        {/* Sidebar Links */}
        <div className="grid grid-cols-3 sm:grid-cols-1 justify-start items-center divide-x-2 sm:divide-x-0 divide-y-2 divide-gray-200 w-full sm:w-1/3">
          {[
            {
              id: "item1",
              name: "North",
              img: "https://media.istockphoto.com/id/821330386/photo/adalaj-stepwell-indian-heritage-tourist-place-ahmedabad-gujarat-world-heritage-city.jpg?s=612x612&w=0&k=20&c=DHBlcVJPnxsKdKt64Q088Z90-SKkI42cNmK8Yfwot2E=",
            },
            {
              id: "item2",
              name: "South",
              img: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
            },
            {
              id: "item3",
              name: "Central",
              img: "https://media.istockphoto.com/id/978904956/photo/akshardham-temple-at-night.jpg?s=612x612&w=0&k=20&c=SunRGB2qBQEhVnAU5-RDPDp3OCAACPGzM2vwPiNZKe4=",
            },
            {
              id: "item4",
              name: "East",
              img: "https://media.istockphoto.com/id/1160316337/photo/tea-plantations.jpg?s=612x612&w=0&k=20&c=5gj1mezzy3cHlCQcqiOIM8pLBLeMyWoxW3e_R57eyv8=",
            },
            {
              id: "item5",
              name: "West",
              img: "https://media.istockphoto.com/id/137336783/photo/vittala-temple-stone-chariot-hampi-karnataka-india.jpg?s=612x612&w=0&k=20&c=mQq4me5Nr_8uWnr4eQcJCSy5tcZ46H-QzIxrYsn6f2E=",
            },
          ].map((item) => (
            <a
              key={item.id}
              href="#packages"
              className="flex flex-col sm:flex-row gap-4 justify-start items-center p-3 text-xl font-medium hover:bg-gray-100 h-28 sm:h-20 w-full"
              id={item.id}
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-full w-20 rounded-lg"
              />
              <h4>{item.name}</h4>
            </a>
          ))}
        </div>

        {/* Main Content */}
        <div className="w-full sm:w-2/3 border-l-4 bg-sky-100 border-gray-200 h-[40rem] overflow-y-auto sm:mt-0 mt-4">
          <ul className="grid grid-cols-2 sm:grid-cols-3 sm:p-10 text-gray-800 uppercase text-md font-medium sm:divide-x-0 divide-x-2">
            {[
              "Kedarnath",
              "Badrinath",
              "Gangotri",
              "Yamunotri",
              "Manali",
              "Shimla",
              "Kedarkantha",
              "Gujarat",
              "Haridwar",
              "Rishikesh",
              "Mussorrie",
              "Mumbai",
              "Dehradun",
              "Agra",
              "Mathura",
              "Jammu",
              "Kashmir",
              "Harshil Valley",
              "Puri",
              "Kashi",
              "Ayodhya",
              "Goa",
              "Ooty",
              "Chopta",
              "Tunganath",
              "Kanyakumari",
              "Jim Corbett",
              "Nainital",
              "Jaipur",
              "Udaipur",
              "Jodhpur",
              "Jaisalmer",
              "Delhi",
              "Amritsar",
              "Mumbai",
              "Ujjain",
              "Leh Ladakh",
              "Coorg",
              "Nashik",
              "Rameshwaram",
              "12 Jyotirling",
              "Vadodara",
            ].map((location) => (
              <li key={location} className="py-2 px-3">
                <a href="#packages">
                  <i className="fa-solid fa-location-arrow px-1"></i>
                  {location}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
