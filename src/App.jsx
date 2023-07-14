import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Button, Stack } from 'react-bootstrap'
import { BudgetCard } from './components/BudgetCard/BudgetCard';

function App() {

  return (
    <Container className='my-4'>
      <Stack direction='horizontal' gap='2' className='mb-4'>
        <h1 className='me-auto'>Budget</h1>
        <Button variant='primary'>Add Budget</Button>
        <Button variant='outline-primary'>Add Expense</Button>
      </Stack>
      <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
            alignItems: "flex-start",
          }}></div>
          <BudgetCard name='Entertainment' gray amount={115} max={1000}/>
    </Container>
    
  )
}

export default App


//https://www.youtube.com/watch?v=yz8x71BiGXg