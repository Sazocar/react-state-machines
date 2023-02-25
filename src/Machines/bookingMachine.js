import { createMachine, assign } from "xstate";
import { fetchCountries } from "../Utils/api";

const fillCountries = {
  initial: 'loading',
  states: {
    loading: {
      invoke: {
        id: 'getCountries',
        src: () => fetchCountries,
        onDone: {
          target: 'success',
          actions: assign({
            countries: (context, event) => event.data,
          }),
        },
        onError: {
          target: 'failure',
          actions: assign({
            error: 'Request failed',
          }),
        },
      },
    },
    success: {},
    failure: {
      on: {
        RETRY: { target: 'loading' },
      },
    },
  },
}

const bookingMachine = createMachine(
  {
    id: 'Buy plane tickets',
    initial: 'loading',
    context: {
      passengers: [],
      selectedCountry: '',
      countries: [],
      error: '',
    },
    states: {
      loading: {
        on: {
          DONE: {
            target: 'initial',
          }
        }
      },
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
        ...fillCountries,
      },
      passengers: {
        on: {
          DONE: 'tickets',
          CANCEL: {
            target: 'initial',
            actions: assign((context, event) => {
              context.passengers = []
              context.selectedCountry = ''
            }),
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
          FINISH: {
            target: 'initial',
            actions: assign((context, event) => {
              context.passengers = []
              context.selectedCountry = ''
            }),
          },
          CANCEL: 'initial',
        },
      },
    },
  },
)

export default bookingMachine;