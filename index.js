import { ToyReact } from './ToyReact';
import Board from './Board';

const game = <Board squares={Array(9).map((_, i) => i)} onClick={() => console.log('click')} />

ToyReact.render(game, document.body);

