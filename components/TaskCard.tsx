import { Button } from '@chakra-ui/react'
import React from 'react'

interface Props {
  title: string,
  description: string,
}

const TaskCard = ({ title, description }: Props) => {
  return (
    <div className='p-4 shadow-md rounded-lg bg-primary flex flex-col gap-2 cursor-pointer'>
      <p className='text-lg font-bold'>{title}</p>
      <p className=''>{description}</p>
      <div className='flex justify-end'>
        <Button
          colorScheme=""
          className='btn'
          size='sm'
        >
          Start
        </Button>
      </div>
    </div>
  )
}

export default TaskCard