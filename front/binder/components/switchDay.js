import React, {Component} from 'react';
import { StyleSheet, Text, Button, View, Alert } from 'react-native';

export class SwitchDay extends React.Component {
	onPressButton() {
        Alert.alert('You clicked the button!');
    }

	render () {
		const state = this.state;
		return (
			<View style={styles.container}>
				<Button onPress={this.onPressButton} color="#F28864" title="◄"/>
				<Text style={styles.text}>Quarta</Text>
				<Button onPress={this.onPressButton} color="#F28864" title="►"/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: '#fff',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems:'center',
		marginLeft: 11,
		width: 300,
		borderWidth: 1,
		borderRadius: 4,
		borderColor: '#F28864'
	},
	text: {
		textAlign:'center',
		color: '#3C4858',
	}
});