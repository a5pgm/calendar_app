import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import jaLocale from '@fullcalendar/core/locales/ja'; 

const Calendar = (props) => {
    
    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Calendar
                </h2>
            }>
            
            <div className="p-12">
                <h1>Calendar</h1>
                <div>
                    <div>
                      <FullCalendar 
                      plugins={[dayGridPlugin,timeGridPlugin, listPlugin]} initialView="dayGridMonth"
                      locales={[jaLocale]} locale='ja'
                      headerToolbar={{
                      left: 'prev,next today',
                      center: 'title',
                      right: 'dayGridMonth,timeGridWeek listWeek',
                      }}
                      events={[
                         {title:'eventを', start: '2022-09-14'},
                         {title:'こんな感じで追加できます', start: '2022-09-15', end: '2022-09-17'},
                         {title:"match",start:"2022-09-13T15:00:00Z"}
                      ]}
                      />
                    </div>
                </div>
            </div>
            
        </Authenticated>
        );
}

export default Calendar;

