import React from 'react';
import { Card } from 'antd';
import {data} from '@/app/data'
 export default function Page ({params} : {params: {id: string} } ) {
  return (
    <div>
      <Card title="Card title" bordered={false} style={{  width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
      </Card>
    </div>
  )
}