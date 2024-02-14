

import { Button, Card } from 'flowbite-react';

function MobileCard() {
  return (
    <Card className="max-w-sm h-[30%] w-[90%]">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Project Soon
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Discription soon..
      </p>
      <Button>
        Live
      </Button>
    </Card>
  );
}


export default MobileCard;
