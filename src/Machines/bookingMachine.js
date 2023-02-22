import { createMachine, assign } from "xstate";

const bookingMachine = createMachine(
  {
    id: 'Buy plane tickets',
    initial: 'initial',
    context: {
      passengers: [],
      selectedCountry: '',
    },
    states: {
      initial: {
        on: {
          START: {
            target: 'search',
          },
        },
      },
      search: {
        on: {
          CONTINUE: {
            target: 'passengers',
            actions: assign({
              selectedCountry: (context, event) => event.selectedCountry,
            }),
          },
          CANCEL: 'initial',
        },
      },
      passengers: {
        on: {
          DONE: 'tickets',
          CANCEL: {
            target: 'initial',
            actions: assign((context, event) => context.passengers = new Array())
          },
          ADD: {
            target: 'passengers',
            actions: assign((context, event) =>
              context.passengers.push(event.newPassenger)
            ),
          },
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