import './index.css';
import numeral from 'numeral';
/*eslint-disable no-console*/
const courseVal = numeral(1000).format('$0.00');
console.log('I will pay ${courseVal} for this course');
