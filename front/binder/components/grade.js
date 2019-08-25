import React, {Component} from 'react';
import { StyleSheet, Text, Button, View, Alert } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
// npm install react-native-table-component

export class Grade extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  tableHead: ['Grade Horária'],
		  tableData: [
			['8h10min', 'Calculo II\nSala 5-301\nLevar exercícios da última aula resolvidos'],
			['14h20min', 'Linguagens Formais\nSala D05\nProvinha com conteúdos das aulas 1 a 4'],
			['19h', 'Introdução ao Desenvolvimento Web\nSAP 1'],
		  ]
		}
	}

	render() {
		const state = this.state;
		return (
		  <View style={styles.container}>
			<Table borderStyle={{borderWidth: 1, borderColor: '#F28864'}}>
			  <Row data={state.tableHead} style={styles.head} textStyle={styles.textHead}/>
			  <Rows data={state.tableData} style={{backgroundColor: '#fff'}} textStyle={styles.text}/>
			</Table>
		  </View>
		)
	  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 11,
		paddingTop: 30,
		width: 322,
	},
	head: {
		height: 40,
		backgroundColor: '#F7B64A',
	},
	textHead: {
		color: '#fff',
		margin: 6
	},
	text: {
		color: '#8694A7',
		margin: 6
	},
});