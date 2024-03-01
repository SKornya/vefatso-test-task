import { Button, Card } from 'antd';
import Link from 'next/link';
import { FunctionComponent } from 'react';

const Page: FunctionComponent = () => {
  return (
    <div>
      <Card>NEWS</Card>
      <Button>
        <Link href={'/'}>TO MAIN</Link>
      </Button>
    </div>
  );
};

export default Page;
