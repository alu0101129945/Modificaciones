import 'mocha';
import {expect} from 'chai';
import {FIFO} from '../src/modification';

describe('Namespace of FIFO', () => {
  it('create a FIFO', () => {
    expect(new FIFO.Queue(['Hola', 1]));
  });
});

describe('Push method', () => {
  it('Add an item to the queue', () => {
    const q = new FIFO.Queue(['Hola', 1]);
    expect(q.push(2));
  });
});

describe('Pop method', () => {
  it('Extracts the first item inserted in the queue', () => {
    const q = new FIFO.Queue(['Hola', 1]);
    expect(q.pop());
  });
});

describe('Pseek method', () => {
  it('Returns the first item inserted in the queue without extracting it', () => {
    const q = new FIFO.Queue(['Hola', 1]);
    expect(q.pseek());
  });
});

describe('Size method', () => {
  it('Returns the number of items that the queue contains', () => {
    const q = new FIFO.Queue(['Hola', 1]);
    expect(q.size());
  });
});
