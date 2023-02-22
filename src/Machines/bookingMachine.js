import { createMachine } from "xstate";

const bookingMachine = createMachine(
  {
    id: 'Buy plane tickets',
    initial: 'initial',
    states: {
      initial: {
        on: {
          START: {
            target: 'search',
            actions: 'printStart',
          },
        },
      },
      search: {
        entry: 'printEntry',
        exit: 'printExit',
        on: {
          CONTINUE: 'passengers',
          CANCEL: 'initial',
        },
      },
      passengers: {
        on: {
          DONE: 'tickets',
          CANCEL: 'initial',
        },
      },
      tickets: {
        on: {
          FINISH: 'initial',
          CANCEL: 'initial',
        },
      },
    },
  },
  {
    actions: {
      printStart: () => console.log('Printing start'),
      printEntry: () => console.log('Printing entry'),
      printExit: () => console.log('Printing exit'),
    },
  }
)




export default bookingMachine;