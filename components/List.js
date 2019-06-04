import React, { PureComponent } from 'react'
import { Text, View , ScrollView} from 'react-native'
import Word from './Word';

export default class List extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            words : [
                {id : 'a1' , en : 'One' , vn : 'Một' , isMemorized : true},
                {id : 'a2' , en : 'Two' , vn : 'Hai' , isMemorized : false},
                {id : 'a3' , en : 'Three' , vn : 'Ba' , isMemorized : true},
                {id : 'a4' , en : 'Four' , vn : 'Bốn' , isMemorized : false},
                {id : 'a5' , en : 'Five' , vn : 'Năm' , isMemorized : false},
                {id : 'a6' , en : 'Four' , vn : 'Sáu' , isMemorized : true},
            ]
        }
    }
    render() {
        return (
            <View style={{flex : 1}}>
                <ScrollView>
                    {this.state.words.map(word => <Word word={word} key={word.id}/>)}
                </ScrollView>
                
            </View>
        )
    }
}
