import {
    TouchableOpacity, 
    Text
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons/faCircleCheck'
import React from 'react'
import {colors} from '../constants'

const UiButton = (props) => {
  const {onPress, title, isSelected} = props
  const isActived = "items-center border-white rounded-md border-[2px] p-4 w-[300px] bg-white my-5"
  const isNotActived = "items-center border-white rounded-md border-[2px] p-4 w-[300px] my-5"

  return (
    <TouchableOpacity
     onPress={onPress}
     className={isSelected?isActived:isNotActived}
     >
        {isSelected && <FontAwesomeIcon icon={ faCircleCheck } style={{position: 'absolute', left: 10, top: 17}} color="green" size={20}/>}
        <Text style={{
          fontWeight: '700',
          color: isSelected?colors.primaryColor:null
        }}>{title}</Text>
    </TouchableOpacity>
  )
}

export default UiButton