
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import * as actions from './redux/actions'
class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }


    handleCount(params) {
        // this.setState({
        //     count: params == 'sub' ? this.state.count - 1 : this.state.count + 1
        // })
        const { addition, subtraction } = this.props

        if (params == 'sub') {
            subtraction()
        }
        else {

            addition()
        }

    }


    // componentWillUnmount() {
    //     const { removeAmount } = this.props
    //     removeAmount()
    // }



    render() {
        console.log(this.props, '<------ props');

        return (
            <View style={styles.container}>


                {/*   <TextInput
                    placeholder='Insert Number'
                    style={{ width: '90%', borderWidth: 0.5, padding: 10 }}
                /> */}

                <Text style={{ color: 'red' }}>{this.props.value}</Text>


                <TouchableOpacity style={{ marginTop: 10 }} onPress={() => this.handleCount()}>
                    <Text style={{ color: 'blue' }}>Add </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 10 }} onPress={() => this.handleCount('sub')}>
                    <Text style={{ color: 'blue' }}>Subtract </Text>
                </TouchableOpacity>



            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
})

mapStateToProps = ({ add }) => {
    return { ...add }
}

export default connect(mapStateToProps, actions)(HomeScreen)