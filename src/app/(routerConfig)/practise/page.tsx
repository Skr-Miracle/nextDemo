'use client'
import React from 'react';
import {Button , Avatar , List } from 'antd'
import Link from 'next/link';
import {data} from '@/app/data'

export default function Page () {
  return (
     <div className='h-screen'>
      <div className=' '>
       
         <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                  title={<Link href={`/practise/${item.id}`}>{item.title}</Link>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            )}
    />
      </div>
     </div>
  )
}