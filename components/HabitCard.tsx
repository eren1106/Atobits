'use client'

import { Button, Stack } from '@chakra-ui/react'
import React from 'react'
import { EmailIcon } from '@chakra-ui/icons'

interface Props {
  name: string,
  description: string,
}

const HabitCard = ({name, description}: Props) => {
  return (
    <div className='p-3 shadow-md rounded-lg bg-primary w-40'>
      <Stack spacing={1} className='items-center h-44'>
        <EmailIcon boxSize={50} />
        <p className='text-xl font-bold'>{name}</p>
        <p className='text-sm text-center'>{description}</p>
        <Button className='btn justify-self-end' size='md'>Mark as done</Button>
      </Stack>
    </div>
  )
}

export default HabitCard