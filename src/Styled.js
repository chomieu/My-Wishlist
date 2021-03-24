import styled from 'styled-components';

export const Container = styled.main`
  margin: 0 auto;
  padding: 0 50px;
  width: 250px;
  border-radius: 2%;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.5);
  background-color: #fcc0cb;
  width: 300px;
  height: 540px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Header = styled.h4`
  margin: 0 0 1rem 0;
  text-align: center;
`

export const Wishlist = styled.section`
  padding: 1rem;
  border: 1px solid #000;
  height: 220px;
  background-color: white;
  overflow-y: scroll;
}
`

export const Input = styled.input`
  margin-top: 1.5rem;
  padding: 0 1rem;
  height: 30px;
  border: 1px solid black;
  border-radius: 4px;
`

export const Button = styled.button`
  margin-top: 1.5rem;
  padding: 1rem 3rem;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 2px 2px rgba(150, 150, 150, 0.7);
  background-color: #91eb92;
  font-weight: bold;
  align-self: ${props => props.center ? "center" : null}
`
export const ListItem = styled.div`
  margin-bottom: 0.5rem;
`