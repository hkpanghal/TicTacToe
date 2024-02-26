import React from 'react'
import { PropsWithChildren } from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome'; 
type iconType = PropsWithChildren<{
    name:string
}>
function Icons({name}:iconType) {
  switch (name) {
    case "circle":
        return <Icon name={"circle-thin"} size={38} color={"green"}/>
        break;
  
    case "cross":
        return <Icon name={"times"}  size={38} color={"red"} />
        break;
  
    default:
        return <Icon name={"pencil"} size={38} color={"black"} />
        break;
  }
}

export default Icons