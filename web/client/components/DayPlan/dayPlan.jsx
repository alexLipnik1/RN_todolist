import React from 'react';
import $ from 'jquery';
import styles from './DayPlan.scss';
import {RaisedButton, AppBar, Drawer } from 'material-ui';
import { Button } from 'react-bootstrap';
import moment from 'moment';
import withWidth from 'material-ui/utils/withWidth';
import flag from 'material-ui/svg-icons/content/flag';

// making the the time apear from 7:00 to 02:00

$(document).ready(() => {
	let count = 7;
	const time = ':00';
	const addition = '0';
	for(let i =0; i<19; i++){
			if(count<10)
				$(`<label>${addition}${count}${time}</label>`).appendTo("#time");	
			else if(count == 24){
				$(`<label>${addition}${addition}${time}</label>`).appendTo("#time");	
				count = 0;
			}
			else{
				$(`<label>${count}${time}</label>`).appendTo("#time");	
			}
			count+=1;	
	}
})

// making the Task Block 

const Tesk_activity = (props) => (
	<div id={props.id} className={props.style ? props.style : styles.timeBlock} style={{
		width: 100 + '%',
		height: props.height + '%',
		top: props.precentFromTop + '%'
	 }}>
		<div className={styles.tesk_activity_label}>{`${props.title}   |    ${props.categorie}`}</div>
	 </div>
);

const Tesk_time = (props) => (
	<div id={props.id} className={props.style ? props.style : styles.timeBlock} style={{
		width: 100 + '%',
		height: props.height + '%',
		top: props.precentFromTop + '%'

	 }}>
	 	<div className={styles.tesk_time_innerblock}>
	 		<div className={styles.tesk_time_label}>{`${props.start}:00 - ${props.end}:00`}</div>
		 </div>	 
	 </div>
);

export default class MainPage extends React.Component {
	state ={
		lines: [
		],
		open: false
	}
	//start, end,currentPrecentFromTop,previesBlock
	checkIfValid(start, end, currentPrecentFromTop, previesBlock){
		console.log('start =',start,'end =', end)
		console.log('start>10', 10<start)
		console.log('start>end', end<start)
		console.log('end==10', end==10)
		console.log('start==9', start==9)
		console.log('Number(end)<Number(start)', Number(end)<Number(start))
		
		console.log('')

		if(Number(start)>25 || Number(start)<7){
			alert(`start can't be smaller from 7 or bigger than 25`);	
			throw (`start can't be smaller from 7 or bigger than 25`);
		}
		else if(Number(end)<Number(start) || Number(end)==Number(start) ){
			alert(`start can't be smaller or equal to end`);	
			throw (`start can't be smaller or equal to end`);
		}
		else if(Number(end)>26){
			alert(`end can't be bigger than 26`);	
			throw (`end can't be bigger than 26`);
		}
		else if(currentPrecentFromTop < previesBlock){
			alert(`There's already a tesk on your desired time`);	
			throw (`There's already a tesk on your desired time`);
		}
		else true
	}

	calcPercent(start, end) {
		const blockSize = (end - start) * 5.25,
			lines = this.state.lines.length,
			currentPrecentFromTop = (start - 7)*5.25,
			previesBlock = lines>0 ? this.state.lines[lines-1].precentFromTop + this.state.lines[lines-1].heightPrecet : 0;
		
		this.checkIfValid(start, end, currentPrecentFromTop, previesBlock);

		return [blockSize, currentPrecentFromTop]

	}

	newTesk = (style_time, style_activity, s_time, e_time, teskTitle, categorie) => {
		let values = this.calcPercent(s_time, e_time);
		document.getElementById("start_").value = e_time;
		document.getElementById("end_").value = Number(e_time)+1;
		if(e_time>24){
			e_time = e_time - 24;
		}
		if(s_time>24){
			s_time = s_time - 24;
		}

		this.setState({
			lines: [
				...this.state.lines.map(
					(line, i) => i == line.length ? {...line} : line),
					{
						id: this.state.lines.length || 0,
						style_time,
						style_activity,
						start : s_time,
						end : e_time,
						title: teskTitle,
						categorie: categorie,
						heightPrecet: values[0],
						precentFromTop: values[1],
					}
			],
			open: false,
		})
	}

	handleToggle = () => this.setState({open: !this.state.open});

	render() {
		return (
			<div className={styles.container}>
				<div className={styles.activityContainer}>
					<div className={styles.activities}>
						<div className={styles.activitiesBlock}>
							{this.state.lines.map((line,i) => (
								<Tesk_activity
									id={i}
									key={i}
									style={line.style_activity}
									start={line.start}
									end={line.end}
									height={line.heightPrecet}
									precentFromTop={line.precentFromTop}
									title={line.title}
									categorie={line.categorie}
								/>))}
							</div>
					</div>
					<div className={styles.time}>
						<div id='block' className={styles.block}>
							{this.state.lines.map((line,i) => (
							<Tesk_time
								id={i}
								key={i}
								style={line.style_time}
								start={line.start}
								end={line.end}
								height={line.heightPrecet}
								precentFromTop={line.precentFromTop}
							/>))}
						</div>
						<div id='time' className={styles.timeShower} />
					</div>
				</div>
				<div className={styles.controlPanel}>
					<div className={styles.buttens}>
						<div className={styles.matirialUiElement}>
							<RaisedButton
							style={{
								// height: 20 + "%",
								width: 100 + "%"
							}}
							primary={true}
							label="New Tesk"
							onClick={this.handleToggle}
							/>
							<Drawer width={20+"%"} openSecondary={true} open={this.state.open} >
							<div className={styles.MatirialIneerDiv}>
								<input id='start_' type='text' placeholder="Start of tesk  [7:00 - 1:00]"
								defaultValue='7'
								/>
								<input id='end_' type='text' placeholder="End of tesk  [8:00 - 2:00]"
									defaultValue= '8'
								/> 
								<input id='title_' type='text' placeholder="Title" defaultValue='ggg' />
								<input id='categorie_' type='text' placeholder="Categorie" defaultValue='ddd'/>
								<button id='newTesk' onClick={() => this.newTesk(
									styles.timeBlock,
									styles.activityBlock, 
									document.getElementById('start_').value, //start
									document.getElementById('end_').value, //end
									document.getElementById('title_').value, // title
									document.getElementById('categorie_').value, // categorie
								)}>New Tesk</button>
							</div>
							</Drawer>
						</div>
						<RaisedButton
							style={{
								// height: 100 + "%",
								marginTop: 1 + "px",
								width: 100 + "%"
							}}
							primary={true}
							label="settings"
							onClick={this.handleToggle}
							/>
						<RaisedButton
						style={{
							// height: 100 + "%",
							marginTop: 1 + "px",
							width: 100 + "%"
						}}
						id='settings'
						primary={true}
						label="random qoute"
						onClick={this.handleToggle}
						/>
					</div>
					<div className={styles.quote}>
						<div className={styles.text}></div>
					</div>
				</div>
			</div>
		)
	}
}
