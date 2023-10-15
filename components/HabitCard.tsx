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
    <div className='p-3 shadow-md rounded-lg bg-primary w-40 h-48 flex flex-col'>
      <Stack spacing={1} className='items-center flex-1'>
        <EmailIcon boxSize={50} />
        <p className='text-xl font-bold'>{name}</p>
        <p className='text-sm text-center'>{description}</p>
      </Stack>
      <Button colorScheme="yellow" className='btn mt-1' size='md'>Mark as done</Button>
    </div>
  )
}

export default HabitCard