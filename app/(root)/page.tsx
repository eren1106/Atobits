import HabitCard from '@/components/HabitCard'
import { mockHabits } from '@/constants/mockData'
import { Grid, GridItem, HStack, Stack } from '@chakra-ui/react'
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
      <div className='px-6 py-4 shadow-md rounded-lg min-h-full bg-secondary'>
        {children}
      </div>
    </GridItem>
  );
}

const HabitsContent = () => {
  return (
    <Stack spacing={3}>
      <h2 className='text-lg font-bold'>Habits</h2>
      <HStack spacing={3} className='overflow-x-scroll'>
        {
          mockHabits.map((habit) => (
            <HabitCard
              name={habit.name}
              description={habit.description}
              key={habit.id}
            />
          ))
        }
      </HStack>
    </Stack>
  );
}

const TodoListContent = () => {
  return (
    <div>
      todo
    </div>
  );
}

const GoalsContent = () => {
  return (
    <div>
      goals
    </div>
  );
}

const DoingContent = () => {
  return (
    <div>
      doing
    </div>
  );
}

const NotesContent = () => {
  return (
    <div>
      notes
    </div>
  );
}

export default Home