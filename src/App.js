import React from 'react';
import styled from 'styled-components'
import * as icons from './icons'
import {Calendar, LogOut} from './icons'
import Header from './components/Header'
import IconWrapper from './components/IconWrapper'

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: stretch;
  align-items: stretch;
  margin: 0;
  padding: 0%;
  list-style: none;
`

class List extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <Container>
        <Calendar style={{ fontSize: 50 }} fillInColor iconColor="red" button></Calendar>
        <LogOut  fillInColor iconColor="#fff"></LogOut>
          {
            Object.keys(icons)
              .map((key, index) => {
                const Icon = icons[key]
                return <li key={index}>
                  <IconWrapper>
                    <Icon button hoverColor="yellow" stroke="green"/>
                    <span>{key}</span>
                  </IconWrapper>
                </li>
              })
          }
        </Container>
      </div>
    )
  }
}

export default List;
