'use client'

import HabitCard from '@/components/HabitCard'
import TaskCard from '@/components/TaskCard'
import { mockHabits, mockTasks } from '@/constants/mockData'
import { AddIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Button, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Grid
        h='650px'
        templateRows='repeat(9, 1fr)'
        templateColumns='repeat(3, 1fr)'
        gap={3}
      >
        <HomeCard row={4} col={2}>
          <HabitsContent />
        </HomeCard>
        <HomeCard row={9} col={1}>
          <TodoListContent />
        </HomeCard>
        <HomeCard row={5} col={1}>
          <GoalsContent />
        </HomeCard>
        <HomeCard row={2} col={1}>
          <DoingContent />
        </HomeCard>
        <HomeCard row={3} col={1}>
          <NotesContent />
        </HomeCard>
      </Grid>
    </div>
  )
}

interface HomeCardProps {
  row: number,
  col: number,
  children: React.ReactNode
}

// card in the grid
const HomeCard = ({
  row,
  col,
  children
}: HomeCardProps) => {
  return (
    <GridItem rowSpan={row} colSpan={col}>
      <div className='home-card px-6 py-4 shadow-md rounded-lg min-h-full max-h-full h-full bg-secondary'>
        {children}
      </div>
    </GridItem>
  );
}

const HabitsContent = () => {
  return (
    <div className='flex flex-col gap-3'>
      <h2 className='text-lg font-bold'>Habits</h2>
      <div className='flex gap-3 overflow-x-scroll'>
        {
          mockHabits.map((habit) => (
            <HabitCard
              name={habit.name}
              description={habit.description}
              key={habit.id}
            />
          ))
        }
      </div>
    </div>
  );
}

const TodoListContent = () => {
  return (
    <div className='flex flex-col gap-3 h-full'>
      <div className='flex justify-between items-center'>
        <h2 className='text-lg font-bold'>To-do List</h2>
        <Button
          leftIcon={<AddIcon />}
          colorScheme=""
          className='btn'
          size='sm'
        >
          Add
        </Button>
      </div>

      <div className='flex flex-col gap-2 overflow-y-scroll'>
        {mockTasks.map((task) => (
          <TaskCard
            title={task.title}
            description={task.description}
            key={task.id}
          />
        ))}
      </div>
    </div>
  );
}

const GoalsContent = () => {
  return (
    <div className='flex flex-col gap-3'>
      <h2 className='text-lg font-bold'>Goals</h2>
      <ul className='list-disc list-inside'>
        <li>Complete reading two books</li>
        <li>Make shoulder wider</li>
        <li>Start making short videos</li>
        <li>Complete Atobits</li>
        <li>Develop a mobile app and publish to google play</li>
      </ul>
    </div>
  );
}

const DoingContent = () => {
  return (
    <div className='flex flex-col gap-3'>
      <h2 className='text-lg font-bold'>Doing</h2>
      <p>Doing Atobits Home Page FE</p>
      <div className='flex justify-end gap-3'>
        <Button
          colorScheme=""
          className='btn-accent'
          size='sm'
        >
          Stop
        </Button>
        <Button
          colorScheme=""
          className='btn'
          size='sm'
        >
          Done
        </Button>
      </div>
    </div>
  );
}

const NotesContent = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex justify-between items-center'>
        <h2 className='text-lg font-bold'>Notes to yourself</h2>
        <div className='flex gap-1'>
          <ChevronLeftIcon className='cursor-pointer' boxSize={5} />
          <ChevronRightIcon className='cursor-pointer' boxSize={5} />
        </div>
      </div>
      <p>You dont have too many fucks to give about</p>
    </div>
  );
}

export default Home