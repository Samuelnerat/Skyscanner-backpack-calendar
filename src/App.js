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