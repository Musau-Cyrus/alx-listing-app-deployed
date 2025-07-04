import Pill from '@/components/layout/Pill';
import { IMAGES } from '../constants';
import PropertyListing from "@/components/common/PropertyListing";
import Image from 'next/image';
import { useState } from 'react';

const Home: React.FC = () => {
  const filters = [
    "All",
    "Top Villa",
    "Free Reschedule",
    "Book Now, Pay Later",
    "Self CheckIn",
    "Instant Book",
  ];
  const [activeFilter, setActiveFilter] = useState<string>("All");

  return (
    <div className="flex flex-col">
      <section style={{backgroundImage: `url(${IMAGES.hero})`}} className="w-full h-[480px] bg-no-repeat bg-center bg-cover rounded-3xl">
        <div className='flex flex-col items-center justify-center text-white text-center pt-16 gap-8'>
       
       <p className='text-8xl'>Find your favorite <br/> place here!</p>
        <p className='text-2xl'>The best prices for over 2 million properties worldwide</p>
        
        </div>
      </section>
      {/*Filter Section*/}
      <section className='w-full mt-3'>
        {/*Filter Pills and Buttons*/}
        <div className="flex flex-wrap justify-between items-center gap-y-3 mb-6">
      {/* Filter Pills (Left) */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Pill
            key={filter}
            label={filter}
            isActive={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          />
        ))}
      </div>

      {/* Filter + Sort Controls (Right) */}
      <div className="flex items-center gap-2">
        <button className="px-4 py-2 rounded-full border text-sm flex items-center gap-1 hover:bg-gray-100">
          Filter
          <Image src="/assets/Filter.png" alt="Filter" width={16} height={16} />
        </button>

        <button className="px-4 py-2 rounded-full border text-sm text-gray-700 hover:bg-gray-100">
          Sort by: <strong className="ml-1">Highest Price</strong>
        </button>
      </div>
    </div>
      </section>
      <PropertyListing/>
    </div>
  );
};

export default Home;
