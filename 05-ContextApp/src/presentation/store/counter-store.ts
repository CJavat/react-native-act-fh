import { create } from "zustand";

export interface CounterState {
  counter: number;
  
  incrementCounter: ( value: number ) => void;
  decrementCounter: ( value: number ) => void;
}


export const useCounterStore = create<CounterState>()( (set, get) => ({
  counter: 0,

  incrementCounter: ( value ) => {
    set( (state) => ({ counter: state.counter + value }) );
  },
  decrementCounter: ( value ) => {
    set( (state) => ({ counter: state.counter - value }) );
  },

}) );

