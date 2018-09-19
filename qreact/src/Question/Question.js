import React, { Component } from 'react';
import axios from 'axios';
import SubmitAnswer from './SubmitAnswer';
import auth0Client from '../Auth';

class Question extends Component {
	constructor(props) {
		super(props);
		this.state = {
			question: null,
			user: null,
			photo: null
		};
		// this.jumbref = React.createRef();
		this.submitAnswer = this.submitAnswer.bind(this);
	}

	method = () => {return 'Adegoke' }

	async componentDidMount() {
		await this.refreshQuestion();
	}

	async refreshQuestion() {
		const { match: { params } } = this.props;
		const question = (await axios.get(`http://localhost:8081/${params.questionId}`)).data;
		this.setState({
			question,
		});
	}

	async submitAnswer(answer) {
		await axios.post(`http://localhost:8081/answer/${this.state.question.id}`, {
			answer,
		},
			{
				headers: { 'Authorization': `Bearer ${auth0Client.getIdToken()}` }
			});
		this.setState({
			user: auth0Client.getProfile().name,
			photo: auth0Client.getProfile().img,
		})
		await this.refreshQuestion();
	}

	render() {
		const { question, user, photo } = this.state;
		if (question === null) return <p>Loading ...</p>;
		return (
			<div className="container">
				<div className="row">
					<div className="jumbotron col-12" ref={this.jumbref} id='jumbotron'>
						<h1 className="display-3">{question.title}</h1>
						<p className="lead">{question.description}</p>
						<hr className="my-4" />
						<SubmitAnswer questionId={question.id} submitAnswer={this.submitAnswer} />
						<p>Answers:</p>
						{
							question.answers.map((answer, idx) => (
								<div key={idx}>
									<div className='answer-post'>
										<img src={photo} alt={user} className='user-photo' />
										<p className='user-name'> {user} </p>
										<p className="lead" key={idx}>{answer.answer}</p>
									</div>
										<br />
								</div>
							))
						}
					</div>
				</div>
			</div>
		)
	}
}

export default Question;