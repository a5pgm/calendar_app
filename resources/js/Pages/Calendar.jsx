import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Modal from "@/Components/Modal";

import FullCalendar,{ DateSelectArg, EventApi, EventClickArg,} from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import jaLocale from '@fullcalendar/core/locales/ja'; 

const Calendar = (props) => {

    const [show, setShow] = useState(false);
    const [clickedEventId, setClickedEventId] = useState(0); 
    const { games,matches } = props;
    // console.log(props);
    const eventClick = (props) => {
        window.open("show/" + props.event.id,"_blank");
        // window.location.href = "show/" + props.event.id;
    }
    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Calendar
                </h2>
            }>
            
            <div className="p-12">
                <h1>Calendar</h1>
                    {/*{ 
                        games.map((game) =>(
                            game.match_day == 7 && game.home_team.name == "Real Madrid CF" &&
                                <p>{ game.home_team.name } vs { game.away_team.name }</p>
                        )) 
                    
                    eventClick ={eventClick}
                    }*/}
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
                      events = { games }
                      dayMaxEvents = {true}
                    //   eventClick = {Modal => { setShow(true) } }
                    eventClick = { clickInfo => { setClickedEventId(clickInfo.event.id), setShow(true)} }
                    //   eventClick = {Modal}
                    //   eventClick2 = {eventClick}
                    // eventClick = { eventClick }
                      />
                      <Modal show={show} setShow={setShow} matches={matches} clickedEventId = {clickedEventId}/>
                    </div>
                </div>
            </div>
            
        </Authenticated>
        );

}

export default Calendar;








