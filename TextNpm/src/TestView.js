import React,{Component} from "react";
import {
    Text,
} from 'react-native'

export default class TestView extends Component{


    render(){
        console.warn('TestView=====>',TestView)
        return (
            <Text>it is a TestView </Text>
        )
    }
}