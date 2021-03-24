import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addItem, deleteItem} from './redux/actions';
import {Container, Header, Wishlist, Input, Button, ListItem} from './Styled'

function App(props) {
  const [item, setItem] = useState("")

  const handleInputChange = event => {
    setItem(event.target.value)
  }

  const handleAddItem = () => {
    props.wishList.indexOf(item) === -1 && item.trim().length > 0 ? 
      props.addItem(item) : alert("Error: Invalid input!")
    setItem("")
  }

  const handleDeleteItem = event => {
    props.deleteItem(event.target.innerHTML)
  }

  const handleSubmit = () => {
    props.wishList.length === 0 ?
      alert("Error: Empty list!")
      : alert("Wish list submitted to Santa!")
        props.submit()
  }

  return (
    <Container>
      <Header>MY WISHLIST</Header>
      <Wishlist>
        {props.wishList.map(list => {
          return <ListItem
            key={props.wishList.indexOf(list)}
            onClick={handleDeleteItem}>{list}
          </ListItem>
        })
        }
      </Wishlist>
      <Input onChange={handleInputChange} value={item} />
      <Button onClick={handleAddItem} center>Add</Button>
      <Button onClick={handleSubmit}>Submit</Button>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    wishList: state.wishList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: item => dispatch(addItem(item)),
    deleteItem: item => dispatch(deleteItem(item)),
    submit: () => dispatch({type: "SUBMIT"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
