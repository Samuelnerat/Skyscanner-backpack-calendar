// import  React,  { Component } from 'react';
// // import { BpkCode } from '@skyscanner/backpack-web/bpk-component-code';
// import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
// import BpkText from '@skyscanner/backpack-web/bpk-component-text';

// import BpkCalendar, { CALENDAR_SELECTION_TYPE } from '@skyscanner/backpack-web/bpk-component-calendar';
// import BpkInput, { INPUT_TYPES, } from '@skyscanner/backpack-web/bpk-component-input';
// import format from 'date-fns/format';

// import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';

// import STYLES from './App.scss';

// const getClassName = cssModules(STYLES);

// const formatDateFull = (date) => format(date, 'EEEE, do MMMM yyyy');
// const formatMonth = (date) => format(date, 'MMMM yyyy');

// const daysOfWeek = [
//   {
//     name: 'Sunday',
//     nameAbbr: 'Sun',
//     index: 0,
//     isWeekend: true,
//   },
//   {
//     name: 'Monday',
//     nameAbbr: 'Mon',
//     index: 1,
//     isWeekend: false,
//   },
//   {
//     name: 'Tuesday',
//     nameAbbr: 'Tue',
//     index: 2,
//     isWeekend: false,
//   },
//   {
//     name: 'Wednesday',
//     nameAbbr: 'Wed',
//     index: 3,
//     isWeekend: false,
//   },  
//   {
//     name: 'Thursday',
//     nameAbbr: 'Thu',
//     index: 4,
//     isWeekend: false,
//   },  
//   {
//     name: 'Friday',
//     nameAbbr: 'Fri',
//     index: 5,
//     isWeekend: false,
//   },  
//   {
//     name: 'Saturday',
//     nameAbbr: 'Sat',
//     index: 6,
//     isWeekend: true,
//   },
// ];

// // const App = () => (
// //   <div className={getClassName('App')}>
// //     <header className={getClassName('App__header')}>
// //       <div className={getClassName('App__header-inner')}>
// //         <BpkText tagName="h1" textStyle="xxl" className={getClassName('App__heading')}>Flight Schedule</BpkText>
// //       </div>
// //     </header>
// //     <main className={getClassName('App__main')}>
// //       {/* <BpkText tagName="p" className={getClassName('App__text')}>
// //         To get started, edit <BpkCode>src/App.jsx</BpkCode> and save to reload.
// //       </BpkText> */}
// //       <BpkButton onClick={() => alert('It works!')}>Click me</BpkButton>
// //     </main>
// //   </div>
// // );

// // export default App;

// export default class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       selectionConfiguration: {
//         type: CALENDAR_SELECTION_TYPE.single,
//         date: null,
//       },
//     };
//   }

//   handleDateSelect = (date) => {
//     this.setState({
//       selectionConfiguration: {
//         type: this.props.selectionConfiguration.type,
//         date: date,
//       },
//     });
//   };

//   render() {
//     return (
//       <div className={getClassName('App')}>
//         <header className={getClassName('App__header')}>
//           <div className={getClassName('App__header-inner')}>
//             <BpkText tagName="h1" textStyle="xxl" className={getClassName('App__heading')}>Flight Schedule</BpkText>
//           </div>
//         </header>

//         <main className={getClassName('App__main')}>
//             <BpkInput
//               id="dateInput"
//               type={INPUT_TYPES.text}
//               name="date"
//               value={(this.state.selectionConfiguration.date || '').toString()}
//               placeholder="Departure date"
//             />

//             <BpkCalendar
//               id="calendar"
//               onDateSelect={this.handleDateSelect}
//               formatMonth={formatMonth}
//               formatDateFull={formatDateFull}
//               daysOfWeek={daysOfWeek}
//               weekStartsOn={1}
//               changeMonthLabel="Change month"
//               nextMonthLabel="Next month"
//               previousMonthLabel="Previous month"
//               selectionConfiguration={this.state.selectionConfiguration}
//             />

//             <BpkButton onClick={() => alert('It works!')}>Continue</BpkButton>
//         </main>

//       </div>
//     );
//   }
// }


// import React, { Component } from 'react';
// import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
// import BpkText from '@skyscanner/backpack-web/bpk-component-text';
// import BpkCalendar, { CALENDAR_SELECTION_TYPE } from '@skyscanner/backpack-web/bpk-component-calendar';
// import BpkInput, { INPUT_TYPES } from '@skyscanner/backpack-web/bpk-component-input';
// import format from 'date-fns/format';
// import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';
// import STYLES from './App.scss';

// const getClassName = cssModules(STYLES);

// const formatDateFull = (date) => format(date, 'EEEE, do MMMM yyyy');
// const formatMonth = (date) => format(date, 'MMMM yyyy');

// const daysOfWeek = [
//   { name: 'Sunday', nameAbbr: 'Sun', index: 0, isWeekend: true },
//   { name: 'Monday', nameAbbr: 'Mon', index: 1, isWeekend: false },
//   { name: 'Tuesday', nameAbbr: 'Tue', index: 2, isWeekend: false },
//   { name: 'Wednesday', nameAbbr: 'Wed', index: 3, isWeekend: false },
//   { name: 'Thursday', nameAbbr: 'Thu', index: 4, isWeekend: false },
//   { name: 'Friday', nameAbbr: 'Fri', index: 5, isWeekend: false },
//   { name: 'Saturday', nameAbbr: 'Sat', index: 6, isWeekend: true },
// ];

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // departureDate: null,
//       // returnDate: null,
//       selectionConfiguration: {
//         type: CALENDAR_SELECTION_TYPE.START,
//         departureDate: null,
//         returnDate: null,
//       },
//     };
//   }

//   handleDateSelect = (date) => {
//     if (!this.state.departureDate) {
//       this.setState({ departureDate: date });
//     } else if (!this.state.returnDate) {
//       this.setState({ returnDate: date });
//     }
//   };

//   render() {
//     const { departureDate, returnDate } = this.state;
//     return (
//       <div className={getClassName('App')}>
//         <header className={getClassName('App__header')}>
//           <div className={getClassName('App__header-inner')}>
//             <BpkText tagName="h1" textStyle="xxl" className={getClassName('App__heading')}>
//               Flight Schedule
//             </BpkText>
//           </div>
//         </header>
//         <main className={getClassName('App__main')}>
//           <div className={getClassName('App__calendar-wrapper')}>
//             <div className={getClassName('App__calendar-container')}>
//               <BpkInput
//                 id="departureDateInput"
//                 type="text"
//                 name="departureDate"
//                 value={departureDate ? formatDateFull(departureDate) : ''}
//                 placeholder="Departure date"
//                 readOnly
//               />
//                           <BpkInput
//               id="returnDateInput"
//               type="text"
//               name="returnDate"
//               value={returnDate ? formatDateFull(returnDate) : ''}
//               placeholder="Return date"
//               readOnly
//             />
//               <BpkCalendar
//                 className={getClassName('App__calendar')}
//                 onDateSelect={this.handleDateSelect}
//                 formatMonth={formatMonth}
//                 formatDateFull={formatDateFull}
//                 daysOfWeek={daysOfWeek}
//                 weekStartsOn={0}
//                 selectionConfiguration={{
//                   type: CALENDAR_SELECTION_TYPE.range,
//                   startDate: departureDate,
//                   endDate: returnDate,
//                 }}
//               />
//             </div>
//           </div>
//           <BpkButton onClick={() => alert('Dates Selected!')}>Continue</BpkButton>
//         </main>
//       </div>
//     );
//   }
// }


// import React, { Component } from 'react';
// import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
// import BpkText from '@skyscanner/backpack-web/bpk-component-text';
// import BpkCalendar, { CALENDAR_SELECTION_TYPE } from '@skyscanner/backpack-web/bpk-component-calendar';
// import BpkInput, { INPUT_TYPES } from '@skyscanner/backpack-web/bpk-component-input';
// import format from 'date-fns/format';
// import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';
// import STYLES from './App.scss';

// const getClassName = cssModules(STYLES);

// const formatDateFull = (date) => format(date, 'EEEE, do MMMM yyyy');
// const formatMonth = (date) => format(date, 'MMMM yyyy');

// const daysOfWeek = [
//   { name: 'Sunday', nameAbbr: 'Sun', index: 0, isWeekend: true },
//   { name: 'Monday', nameAbbr: 'Mon', index: 1, isWeekend: false },
//   { name: 'Tuesday', nameAbbr: 'Tue', index: 2, isWeekend: false },
//   { name: 'Wednesday', nameAbbr: 'Wed', index: 3, isWeekend: false },
//   { name: 'Thursday', nameAbbr: 'Thu', index: 4, isWeekend: false },
//   { name: 'Friday', nameAbbr: 'Fri', index: 5, isWeekend: false },
//   { name: 'Saturday', nameAbbr: 'Sat', index: 6, isWeekend: true },
// ];

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectionConfiguration: {
//         type: CALENDAR_SELECTION_TYPE.range,
//         startDate: null,
//         endDate: null,
//       },
//     };
//   }

//   handleDateSelect = (date) => {
//     const { startDate, endDate } = this.state.selectionConfiguration;
//     if (!startDate) {
//       this.setState({
//         selectionConfiguration: { ...this.state.selectionConfiguration, startDate: date },
//       });
//     } else if (!endDate) {
//       this.setState({
//         selectionConfiguration: { ...this.state.selectionConfiguration, endDate: date },
//       });
//     } else {
//       // Reset selection if both start and end dates are already selected
//       this.setState({
//         selectionConfiguration: { ...this.state.selectionConfiguration, startDate: date, endDate: null },
//       });
//     }
//   };

//   render() {
//     const { startDate, endDate } = this.state.selectionConfiguration;
//     return (
//       <div className={getClassName('App')}>
//         <header className={getClassName('App__header')}>
//           <div className={getClassName('App__header-inner')}>
//             <BpkText tagName="h1" textStyle="xxl" className={getClassName('App__heading')}>
//               Flight Schedule
//             </BpkText>
//           </div>
//         </header>
//         <main className={getClassName('App__main')}>
//           <div className={getClassName('App__calendar-wrapper')}>
//             <div className={getClassName('App__calendar-container')}>
//               <BpkInput
//                 id="departureDateInput"
//                 type="text"
//                 name="departureDate"
//                 value={startDate ? formatDateFull(startDate) : ''}
//                 placeholder="Departure date"
//                 readOnly
//               />
//               <BpkInput
//                 id="returnDateInput"
//                 type="text"
//                 name="returnDate"
//                 value={endDate ? formatDateFull(endDate) : ''}
//                 placeholder="Return date"
//                 readOnly
//               />
//               <BpkCalendar
//                 className={getClassName('App__calendar')}
//                 onDateSelect={this.handleDateSelect}
//                 formatMonth={formatMonth}
//                 formatDateFull={formatDateFull}
//                 daysOfWeek={daysOfWeek}
//                 weekStartsOn={0}
//                 selectionConfiguration={this.state.selectionConfiguration}
//               />
//             </div>
//           </div>
//           <BpkButton onClick={() => alert('Dates Selected!')}>Continue</BpkButton>
//         </main>
//       </div>
//     );
//   }
// }


// import React, { Component } from 'react';
// import { BpkCode } from '@skyscanner/backpack-web/bpk-component-code';
// import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
// import BpkText from '@skyscanner/backpack-web/bpk-component-text';
// import BpkInput, {
//   INPUT_TYPES,
// } from '@skyscanner/backpack-web/bpk-component-input';
// import BpkCalendar, {
//   CALENDAR_SELECTION_TYPE,
// } from '@skyscanner/backpack-web/bpk-component-calendar';
// import format from 'date-fns/format';

// import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';

// import STYLES from './App.scss';

// const formatDateFull = (date) => format(date, 'EEEE, do MMMM yyyy');
// const formatMonth = (date) => format(date, 'MMMM yyyy');

// const daysOfWeek = [
//   {
//     name: 'Sunday',
//     nameAbbr: 'Sun',
//     index: 0,
//     isWeekend: true,
//   },
//   {
//     name: 'Monday',
//     nameAbbr: 'Mon',
//     index: 1,
//     isWeekend: false,
//   },
//   {
//     name: 'Tuesday',
//     nameAbbr: 'Tue',
//     index: 2,
//     isWeekend: false,
//   },
//   {
//     name: 'Wednesday',
//     nameAbbr: 'Wed',
//     index: 3,
//     isWeekend: false,
//   },
//   {
//     name: 'Thursday',
//     nameAbbr: 'Thu',
//     index: 4,
//     isWeekend: false,
//   },
//   {
//     name: 'Friday',
//     nameAbbr: 'Fri',
//     index: 5,
//     isWeekend: false,
//   },
//   {
//     name: 'Saturday',
//     nameAbbr: 'Sat',
//     index: 6,
//     isWeekend: true,
//   },
// ];

// const getClassName = cssModules(STYLES);

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       departureDate: null,
//       returnDate: null,
//     };
//   }

//   handleDateSelect = (date) => {
//     const { departureDate, returnDate } = this.state;
//     if (!departureDate) {
//       this.setState({ departureDate: date });
//     } else if (!returnDate || date >= departureDate) {
//       this.setState({ returnDate: date });
//     } else {
//       // If the selected date is before the departure date, reset both dates
//       this.setState({ departureDate: date, returnDate: null });
//     }
//   };

//   render() {
//     const { departureDate, returnDate } = this.state;
//     return (
//       <div className={getClassName('App')}>
//         <header className={getClassName('App__header')}>
//           <BpkText tagName="h1" textStyle="xxl" className={getClassName('App__heading')}>
//             Flight Schedule
//           </BpkText>
//         </header>
//         <main className={getClassName('App__main')}>
//           <div className={getClassName('App__calendar-wrapper')}>
//             <div className={getClassName('App__calendar-container')}>
//               <BpkInput
//                 id="departureDateInput"
//                 type="text"
//                 name="departureDate"
//                 value={departureDate ? formatDateFull(departureDate) : ''}
//                 placeholder="Departure date"
//                 readOnly
//               />
//               <BpkCalendar
//                 className={getClassName('App__calendar')}
//                 onDateSelect={this.handleDateSelect}
//                 formatMonth={formatMonth}
//                 formatDateFull={formatDateFull}
//                 daysOfWeek={daysOfWeek}
//                 weekStartsOn={0}
//                 selectionConfiguration={{
//                   type: CALENDAR_SELECTION_TYPE.range,
//                   startDate: departureDate,
//                   endDate: returnDate,
//                 }}
//               />
//             </div>
//           </div>
//           <BpkButton onClick={() => alert('Dates Selected!')}>Continue</BpkButton>
//         </main>
//       </div>
//     );
//   }
// }

// import React, { Component } from 'react';
// import { BpkCode } from '@skyscanner/backpack-web/bpk-component-code';
// import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
// import BpkText from '@skyscanner/backpack-web/bpk-component-text';
// import BpkInput, {
//   INPUT_TYPES,
// } from '@skyscanner/backpack-web/bpk-component-input';
// import BpkCalendar, {
//   CALENDAR_SELECTION_TYPE,
// } from '@skyscanner/backpack-web/bpk-component-calendar';
// import format from 'date-fns/format';

// import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';

// import STYLES from './App.scss';

// const formatDateFull = (date) => format(date, 'EEEE, do MMMM yyyy');
// const formatMonth = (date) => format(date, 'MMMM yyyy');

// const daysOfWeek = [
//   {
//     name: 'Sunday',
//     nameAbbr: 'Sun',
//     index: 0,
//     isWeekend: true,
//   },
//   {
//     name: 'Monday',
//     nameAbbr: 'Mon',
//     index: 1,
//     isWeekend: false,
//   },
//   {
//     name: 'Tuesday',
//     nameAbbr: 'Tue',
//     index: 2,
//     isWeekend: false,
//   },
//   {
//     name: 'Wednesday',
//     nameAbbr: 'Wed',
//     index: 3,
//     isWeekend: false,
//   },
//   {
//     name: 'Thursday',
//     nameAbbr: 'Thu',
//     index: 4,
//     isWeekend: false,
//   },
//   {
//     name: 'Friday',
//     nameAbbr: 'Fri',
//     index: 5,
//     isWeekend: false,
//   },
//   {
//     name: 'Saturday',
//     nameAbbr: 'Sat',
//     index: 6,
//     isWeekend: true,
//   },
// ];

// const getClassName = cssModules(STYLES);

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       departureDate: null,
//       returnDate: null,
//     };
//   }

//   handleDateSelect = (date) => {
//     const { departureDate, returnDate } = this.state;
//     if (!departureDate) {
//       this.setState({ departureDate: date });
//     } else if (!returnDate || date >= departureDate) {
//       this.setState({ returnDate: date });
//     } else {
//       // If the selected date is before the departure date, reset both dates
//       this.setState({ departureDate: date, returnDate: null });
//     }
//   };

//   render() {
//     const { departureDate, returnDate } = this.state;
//     return (
//       <div className={getClassName('App')}>
//         <header className={getClassName('App__header')}>
//           <BpkText tagName="h1" textStyle="xxl" className={getClassName('App__heading')}>
//             Flight Schedule
//           </BpkText>
//         </header>
//         <main className={getClassName('App__main')}>
//           <div className={getClassName('App__calendar-wrapper')}>
//             <div className={getClassName('App__calendar-container')}>
//               <BpkInput
//                 id="departureDateInput"
//                 type="text"
//                 name="departureDate"
//                 value={departureDate ? formatDateFull(departureDate) : ''}
//                 placeholder="Departure date"
//                 readOnly
//               />
//               <BpkCalendar
//                 className={getClassName('App__calendar')}
//                 onDateSelect={this.handleDateSelect}
//                 formatMonth={formatMonth}
//                 formatDateFull={formatDateFull}
//                 daysOfWeek={daysOfWeek}
//                 weekStartsOn={0}
//                 selectionConfiguration={{
//                   type: CALENDAR_SELECTION_TYPE.range,
//                   startDate: departureDate,
//                   endDate: returnDate,
//                 }}
//               />
//             </div>
//             <div className={getClassName('App__calendar-container')}>
//               <BpkInput
//                 id="returnDateInput"
//                 type="text"
//                 name="returnDate"
//                 value={returnDate ? formatDateFull(returnDate) : ''}
//                 placeholder="Return date"
//                 readOnly
//               />
//             </div>
//           </div>
//           <BpkButton onClick={() => alert('Dates Selected!')}>Continue</BpkButton>
//         </main>
//       </div>
//     );
//   }
// }



import React, { Component } from 'react';
// import { BpkCode } from '@skyscanner/backpack-web/bpk-component-code';
import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
import BpkText from '@skyscanner/backpack-web/bpk-component-text';

import BpkCalendar, { CALENDAR_SELECTION_TYPE, } from '@skyscanner/backpack-web/bpk-component-calendar';
import BpkInput, { INPUT_TYPES, } from '@skyscanner/backpack-web/bpk-component-input';
import format from 'date-fns/format';

import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';

import STYLES from './App.scss';

const getClassName = cssModules(STYLES);

const formatDateFull = (date) => format(date, 'EEEE, do MMMM yyyy');
const formatMonth = (date) => format(date, 'MMMM yyyy');

const daysOfWeek = [
  {
    name: 'Sunday',
    nameAbbr: 'Sun',
    index: 0,
    isWeekend: true,
  },
  {
    name: 'Monday',
    nameAbbr: 'Mon',
    index: 1,
    isWeekend: false,
  },
  {
    name: 'Tuesday',
    nameAbbr: 'Tue',
    index: 2,
    isWeekend: false,
  },
  {
    name: 'Wednesday',
    nameAbbr: 'Wed',
    index: 3,
    isWeekend: false,
  },
  {
    name: 'Thursday',
    nameAbbr: 'Thu',
    index: 4,
    isWeekend: false,
  },
  {
    name: 'Friday',
    nameAbbr: 'Fri',
    index: 5,
    isWeekend: false,
  },
  {
    name: 'Saturday',
    nameAbbr: 'Sat',
    index: 6,
    isWeekend: true,
  },
];



export default class App extends Component {
  constructor() {
    super();

    this.state = {
      departureDate: null,
      returnDate: null,
      isDepartureInputFocused: false,
    };
  }

  handleDateSelect = (date) => {
    const { departureDate, returnDate, isDepartureInputFocused } = this.state;
    if (isDepartureInputFocused) {
      this.setState({ departureDate: date, isDepartureInputFocused: false });
    } else if (!departureDate || date < departureDate) {
      this.setState({ departureDate: date });
    } else if (!returnDate || date >= departureDate) {
      this.setState({ returnDate: date });
    } else {
      this.setState({ departureDate: date, returnDate: null });
    }
  };

  handleDepartureInputFocus = () => {
    this.setState({ isDepartureInputFocused: true });
  };

  render() {
    const { departureDate, returnDate } = this.state;
    return (
      <div className={getClassName('App')}>
        <header className={getClassName('App__header')}>
          <BpkText tagName="h1" textStyle="xxl" className={getClassName('App__heading')}> Flight Schedule </BpkText>
        </header>


        <main className={getClassName('App__main')}>
          {/* <div className={getClassName('App__calendar-wrapper')}> */}
            {/* <div className={getClassName('App__calendar-container')}> */}
              <BpkInput
                id="departureDateInput"
                type="text"
                name="departureDate"
                value={departureDate ? formatDateFull(departureDate) : ''}
                placeholder="Departure date"
                onFocus={this.handleDepartureInputFocus}
                readOnly
              />

              <BpkCalendar
                className={getClassName('App__calendar')}
                onDateSelect={this.handleDateSelect}
                formatMonth={formatMonth}
                formatDateFull={formatDateFull}
                daysOfWeek={daysOfWeek}
                weekStartsOn={0}
                selectionConfiguration={{
                  type: CALENDAR_SELECTION_TYPE.range,
                  startDate: departureDate,
                  endDate: returnDate,
                }}
              />
            {/* </div> */}

            {/* <div className={getClassName('App__calendar-container')}> */}
              <BpkInput
                id="returnDateInput"
                type="text"
                name="returnDate"
                value={returnDate ? formatDateFull(returnDate) : ''}
                placeholder="Return date"
                readOnly
              />

            {/* </div> */}
          {/* </div> */}
          <BpkButton onClick={() => alert('Dates Selected!')}>Continue</BpkButton>
        </main>
      </div>
    );
  }
}