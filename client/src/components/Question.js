import React, { useEffect, useState } from 'react';
import image from './images/alison.png';
import './Question.scss';
import Chat from './Chat';
import Error from './Error';
import { v4 as uuidv4 } from 'uuid';
import { Link, useParams } from 'react-router-dom';

import axios from 'axios';
const ENDPOINTS = 'http://localhost:8080';

const temp = {
	id: 1,
	name: 'Alison Becker',
	email: 'alibec@gmail.com',
	password: 'myPassword',
	picture: 'https://i.postimg.cc/y8CLqRr5/unsplash-h58g-EQi1-Yss-2x.png',
	bio: 'JS, React',
	mentor: false,
	institution_id: 2,
	last_active: '2022-01-15T05:00:00.000Z',
	university: 'UBC',
};

const Question = ({ users, message, setMessage, socket }) => {
	const buttonColor = { backgroundColor: '#748FFF' };
	let selectedMentorId = parseInt(useParams().id);

	const [msg, setMsg] = useState([]);

	useEffect(() => {
		// fetch current conversation using sender_id
		// and receiver id
		// after getting the conversation_id, fetche all the messages
		// that belong to that conversation
		// Save all the messages to the state
		axios
			.get('http://localhost:8080/api/messages', {
				params: {
					senderId: temp.id,
					receiverId: selectedMentorId,
				},
			})
			.then((response) => {
				setMsg(response.data);
			})
			.catch((err) => console.log(err));

		socket.on('respond', (data) => {
			setMsg((prev) => [...prev, data]);
		});
		socket.emit('initialize', {
			senderId: temp.id,
			receiverId: selectedMentorId,
		});
		return () => socket.close();
	}, []);

	const handleChange = (e) => {
		setMessage((prev) => ({ ...prev, text: e.target.value }));
	};

	const selectedMentor = users.filter((user) => user.id === selectedMentorId);
	if (!selectedMentor[0]) {
		return (
			<>
				<Error />
			</>
		);
	}

	const { picture, name, bio, institution, last_active, id } =
		selectedMentor[0];

	const handleSubmit = (e) => {
		e.preventDefault();
		setMessage((prev) => ({ ...prev, text: '' }));
		socket.emit('message', {
			message: message,
			receiverId: selectedMentorId,
			senderId: temp.id,
			// conversationId: conversationId
		});
	};

	return (
		<section className="question-container">
			<div className="pic">
				<img className="mentor-picture" src={picture} alt="" />
			</div>

			<div className="details-textContainer">
				<div className="question-details">
					<h4 id="name">{name}</h4>
					<h5>
						<span id="bio">Bio:</span>
						{bio}
					</h5>
					<h5>
						<span id="uni">University:</span>
						{institution}
					</h5>
					<h5>
						<span id="status">status:</span>
						{last_active}
					</h5>
				</div>

				{msg.map((data) => (
					<Chat key={uuidv4()} picture={temp.picture} text={data.message} />
				))}

				<div className="text">
					<form onSubmit={(e) => e.preventDefault()}>
						<input
							className="textarea"
							placeholder="Write something.."
							value={message}
							onChange={handleChange}
						></input>
					</form>
				</div>

				<button
					className="btnCustom"
					name="send"
					bgcolor={buttonColor}
					onClick={handleSubmit}
				>
					<h4>SEND</h4>
				</button>
			</div>
		</section>
	);
};

export default Question;
