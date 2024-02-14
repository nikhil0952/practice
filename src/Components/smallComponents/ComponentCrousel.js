
import { Carousel } from 'flowbite-react';

function ComponentCrousel() {
  return (
    <div className="h-56 sm:h-64 xl:h-[500px] 2xl:h-96">
      <Carousel>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Project 1
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Project 2
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Project 3
        </div>
       
      </Carousel>
    </div>
  );
}


export default ComponentCrousel;
