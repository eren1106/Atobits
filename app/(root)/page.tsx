import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Grid
        h='600px'
        templateRows='repeat(9, 1fr)'
        templateColumns='repeat(3, 1fr)'
        gap={12}
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

const HomeCard = ({
  row,
  col,
  children
}: HomeCardProps) => {
  return (
    <GridItem rowSpan={row} colSpan={col}>
      <div className='p-6 shadow-md rounded-lg min-h-full bg-secondary'>
        {children}
      </div>
    </GridItem>
  );
}

const HabitsContent = () => {
  return (
    <div>
      habits
    </div>
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