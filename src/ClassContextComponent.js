import {Component} from "react";
import {ThemeContext} from "./App";

export default class ClassContextComponent extends Component{
    themeStyles(dark){
       return {
           backgroundColor: dark ? '#333' : '#CCC',
           color: dark? '#CCC' : '#333',
           padding: '2rem',
           margin: '2rem'
       }
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {darktheme => {
                    return <div style={this.themeStyles(darktheme)}>Class Theme</div>
                }}
            </ThemeContext.Consumer>
        )
    }
}