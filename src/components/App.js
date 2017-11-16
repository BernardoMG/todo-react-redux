import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import {Card} from 'semantic-ui-react'

const App = () => (
  <div>
  	<Card>
	  	<Card.Content>
	      <Card.Header>
	        Matthew
	      </Card.Header>
	      <Card.Meta>
	        <span className='date'>
	          Joined in 2015
	        </span>
	      </Card.Meta>
	      <Card.Description>
	        Matthew is a musician living in Nashville.
	      </Card.Description>
	    </Card.Content>
	    <Card.Content extra>
	      <a>
	        22 Friends
	      </a>
	    </Card.Content>
  	</Card>

    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
