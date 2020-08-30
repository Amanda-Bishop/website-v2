import React, {Component} from "react";
import calendarStrings from "../../res/calendarStrings";
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import CalendarCard from "../../components/CalendarIframe/CalendarCard";
import {StyledSubSectionWrapper} from "../../res/globalStyles";

class Calendar extends Component {
  render() {
    return (
      <StyledSubSectionWrapper>
        <SectionTitleDescription title={calendarStrings.calendarTitle}/>
        <CalendarCard source={calendarStrings.link}/>
      </StyledSubSectionWrapper>
    );
  }
}

export default Calendar;