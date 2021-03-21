import React, {Component} from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import './QuizMain.css';

export default class Quiz extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: 'What was the name of the hero in the 80s animated video game Dragon s Lair ?',
            2: 'What is the scientific name for modern day humans ',
            3: 'What is Ron Weasley s middle name ',
            4: 'Who is the creator of the comic series The Walking Dead ',
            5: 'At the start of a standard game of the Monopoly if you throw a double six which square would you land on ',
            6: 'What is the capital of Jamaica ',
            7: 'When did Jamaica recieve its independence from England',
            8: '"Kangaroos keep food in their pouches next to their children.',
            9: 'In 2013 how much money was lost by Nigerian scams',
            10: 'How old was Lyndon B. Johnson when he assumed the role of President of the United States',
            11: 'In World of Warcraft lore who organized the creation of the Paladins', 
            12: 'In the game Subnautica Cave Crawler  will attack you',
            13: 'What is the name of the device that allows for infinite energy in the anime 2Dimension'   , 
            14: 'What is the name of Cream the Rabbit s mom in the Sonic the Hedgehog series ',
            15: 'These two countries held a commonwealth from the 16th to 18th century.',
            16: 'Which of these voices wasn`t a choice for the House AI in  The Simpsons Treehouse of Horror  short  House of Whacks ',
            17: 'From which album is the Gorillaz song On Melancholy Hill featured in ',
            18: 'Scotland voted to become an independent country during the referendum from September 2014.',
            19: 'In Left 4 Dead  which campaign has the protagonists going through a subway in order to reach a hospital for evacuation ',
            20: 'What was the last colony the UK ceded marking the end of the British Empire '
        },
        answers: {
            1: {
                1: 'Dirk the Daring',
                2: 'Arthur',
                3: 'Sir Toby Belch',
                4: 'Guy of Gisbourne'
            },
            2: {
                1: 'Homo Ergaster',
                2: 'Homo Sapiens',
                3: 'Homo Erectus',
                4: 'Homo Neanderthalensis'
            },
            3: {
                1: 'Arthur',
                2: 'John',
                3: 'Bilius',
                4: 'Dominic'
            },
            4: {
                1: 'Malcolm Wheeler-Nicholson',
                2: 'Stan Lee',
                3: 'Robert Crumb',
                4: 'Robert Kirkman'
            },
            5: {
                1: 'Electric Company',
                2: 'Water Works',
                3: 'Chance',
                4: 'Community Chest'
            },
            6: {
                1: 'Kingston',
                2: 'Rio-de-Janeiro',
                3: 'Kano',
                4: 'Dar-es-Salaam'
            },
            7: {
                1: '1492',
                2: '1987',
                3: '1962',
                4: '1963'
            },
            8: {
                1: 'False',
                2: 'True'
            },
            9: {
                1: '242.7 Billion',
                2: '2495 Million',
                3: '2495 Million',
                4: '2412.7 Billion'
            },
            10: {
                1: '60',
                2: '54',
                3: '55',
                4: '50'
            },
            11: {
                1: 'Uther the Lightbringer',
                2: 'Sargeras  The Daemon Lord',
                3: 'Alonsus Faol',
                4: 'Alexandros Mograine'
            },
            12:{
                1: 'True',
                2: 'False'
            },
            13: {
                1: 'Collectors',
                2: 'Coils',
                3: 'Wires',
                4: 'Tesla'
            },
            14: {
                1: 'Vanilla',
                2: 'Peach',
                3: 'Strawberry',
                4: 'Mint'
            },
            15: {
                1: 'North Korea and South Korea',
                2: 'Hutu and Rwanda',
                3: 'Bangladesh and Bhutan',
                4: 'Poland and Lithuania'
            },
            16: {
                1: 'Matthew Perry',
                2: 'Pierce Brosnan',
                3: 'George Clooney',
                4: 'Dennis Miller'
            },
            17: {
                1: 'The Fall',
                2: 'Demon Days',
                3: 'Plastic Beach',
                4: 'Humanz'
            },
            18: {
                1: 'False',
                2: 'True',
            },
            19: {
                1: 'No Mercy',
                2: 'Blood Harvest',
                3: 'Subway Sprint',
                4: 'Hospital Havoc'
            },
            20: {
                1: 'India',
                2: 'Hong Kong',
                3: 'Ireland',
                4: 'Australia'
            }
        },
        correctAnswers: {
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '1',
            6: '1',
            7: '1',
            8: '1',
            9: '4',
            10: '3',
            11: '3',
            12: '1',
            13: '2',
            14: '1',
            15: '4',
            16: '3',
            17: '3',
            18: '1',
            19: '1',
            20: '2'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    // method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    render(){
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return(
            <div className="Content">
                {step <= Object.keys(quiestions).length ? 
                    (<>
                        <Question
                            question={quiestions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(quiestions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>Next</button>
                    </>) : (
                        <div className="finalPage">
                            <h1>You have completed the quiz!</h1>
                            <p>Your score is: {score} of {Object.keys(quiestions).length}</p>
                            <p>Thank you!</p>
                        </div>
                    )
                }
            </div>
        );
    }
}