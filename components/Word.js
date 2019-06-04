import React, { PureComponent } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native'

export default class Word extends PureComponent {
    constructor(props) {
        super(props)
        this.state = this.props.word
    }
    changeState() {
        this.setState({ isMemorized: !this.state.isMemorized })
    }
    render() {
        const { en, vn, isMemorized } = this.props.word
        const DeviceWidth = Dimensions.get('window').width
        const DeviceHeight = Dimensions.get('window').height
        return (
            <View style={{ flex: 1, flexDirection: 'column', height: DeviceHeight * 0.2, margin: 10, backgroundColor: 'gainsboro', padding: 10, borderRadius: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 5 }}>
                    <Text style={{ fontSize: 30, color: 'green' }}>{en}</Text>
                    <Text
                        style={{ fontSize: 30, color: 'red' }}>
                        {this.state.isMemorized ? "----" : vn}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 5 }}>
                    <TouchableOpacity
                        style={{ backgroundColor: this.state.isMemorized ? "green" : "red", padding: 10, borderRadius: 5 }}
                        onPress={() => this.changeState()}
                    >
                        <Text style={{ fontSize: 20, color: 'white' }}>{this.state.isMemorized ? "Forgot" : "isMemorized"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ backgroundColor: "orange", padding: 10, borderRadius: 5 }}
                    >
                        <Text style={{ fontSize: 25, color: 'white' }}>Remove</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
