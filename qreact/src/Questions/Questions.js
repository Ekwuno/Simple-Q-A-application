import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from './../Loader/loader.js'


class Questions extends Component {
	constructor(props) {
		super(props);

		this.state = {
			questions: null,
			loading: false 
		};
	}

	async componentDidMount() {
		this.setState({ loading: true})
		const questions = (await axios.get('http://localhost:8081/')).data;
		this.setState({
			questions,
			loading: false
		});
	}

	render() {
		const {loading} = this.state
		return (
			<div className="container">
				<div className="row">
					<Link to="/new-question" style={{marginLeft: 15}}>
						<div className="card text-white bg-secondary mb-3">
							<div className="card-header">Need help? Ask here!</div>
							<div className="card-body">
								<h4 className="card-title">+ New Question</h4>
								<p className="card-text">Don't worry. Help is on the way!</p>
							</div>
						</div>
					</Link>
					
					{this.state.questions === null }
					
					
					{/* <p>Loading questions...</p> */}
					{/* <br /><br /><hr /> */}

					{
					loading &&
					<div style={{position: 'relative', top: '51px', left: '310px'}}>
						<Loader />
					</div>
				}
					{
						this.state.questions && this.state.questions.map(question => (
							<div key={question.id} className="col-sm-12 col-md-4 col-lg-3">
								<Link to={`/question/${question.id}`}>
									<div className="card text-white bg-success mb-3">
										<div className="card-header">Answers: {question.answers}</div>
										<div className="card-body">
											<h4 className="card-title">{question.title}</h4>
											<p className="card-text">{question.description}</p>
										</div>
									</div>
								</Link>
							</div>
						))
					}
				</div>
			</div>
		)
	}
}

export default Questions;