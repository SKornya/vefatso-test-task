import { FunctionComponent } from 'react';

import Link from 'next/link';

import { Button, Card } from 'antd';

interface PageProps {
  params: { id: string };
}

const Page: FunctionComponent<PageProps> = ({ params }) => {
  return (
    <Card>
      <Button type='primary'>
        <Link href={'/'}>TO MAIN from id {params.id}</Link>
      </Button>
    </Card>
  );
};

export default Page;
