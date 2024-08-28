

import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);










// function Hello(){
//   return <h1>Hello World!</h1>
// }

// const element = (
//   <>
//   <Hello/>
//   <Hello/>
//   <Hello/>
//   </>
// );



// import ReactDOM from 'react-dom';

// const WINS = {
//   rock: 'scissor',
//   scissor: 'paper',
//   paper: 'rock',
// };

// function getResult(left, right) {
//   if (WINS[left] === right) return '승리';
//   else if (left === WINS[right]) return '패배';
//   return '무승부';
// }

// function handleClick() {
//   console.log('가위바위보!');
// }

// const me = 'rock';
// const other = 'scissor';

// ReactDOM.render(
//   <>
//     <h1>가위바위보</h1>
//     <button>가위</button>
//     <button>바위</button>
//     <button>보</button>
//   </>,
//   document.getElementById('root')
// );


// // ...

// ReactDOM.render(
//   <>
//     <h1>가위바위보</h1>
//     <h2>{getResult(me, other)}</h2>
//     <button onClick={handleClick}>가위</button>
//     <button onClick={handleClick}>바위</button>
//     <button onClick={handleClick}>보</button>
//   </>,
//   document.getElementById('root')
// );
