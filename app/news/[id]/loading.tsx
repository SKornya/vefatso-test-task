import { Spin } from 'antd';
import { FunctionComponent } from 'react';

const Spinner: FunctionComponent = () => {
  console.log('spin');
  return <Spin style={{ margin: '0 auto' }} />;
};

export default Spinner;
