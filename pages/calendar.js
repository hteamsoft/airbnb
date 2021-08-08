import React from "react";
import "../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../node_modules/@syncfusion/ej2-react-calendars/styles/material.css";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
function calendar() {
  return (
    <div className="relative w-96 top-1/2 left-1/2">
      <DateRangePickerComponent cssClass="default"></DateRangePickerComponent>
    </div>
  );
}

export default calendar;
