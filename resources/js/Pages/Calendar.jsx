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
    const { games,matches,scores } = props;
    console.log(props);
    const eventClick = (props) => {
        window.open("show/" + props.event.id,"_blank");
        // window.location.href = "show/" + props.event.id;
    }
    return (

        <Authenticated auth={props.auth}
            /*header={ <h2 className="font-semibold text-xl text-gray-800 leading-tight"> Calendar </h2>}*/ >
        <div className = 'bg-default-white text-default-black'>
                <h1>Calendar</h1>
                <div class = 'default-white'>
                <p>default-white</p>
                </div>
                <div class = "default-black">
                default-black
                </div>
                <div class = "light-green">
                light-green
                </div>
                <div class = "default-green">
                default-green
                </div>
                <div class = "dark-green">
                dark-green
                </div>
                    {/*{ 
                        games.map((game) =>(
                            game.match_day == 7 && game.home_team.name == "Real Madrid CF" &&
                                <p>{ game.home_team.name } vs { game.away_team.name }</p>
                        )) 
                    
                    eventClick ={eventClick}
                    }*/}
                <div>
                      <FullCalendar 
                      plugins={[dayGridPlugin,timeGridPlugin, listPlugin]} initialView="dayGridMonth"
                      locales={[jaLocale]} locale='ja'
                      headerToolbar={{
                      left: 'prev,next today',
                      center: 'title',
                      right: 'dayGridMonth,timeGridWeek listWeek',
                      }}
                      themaStyle = 'bootstrap5'
                      events = { games }
                      eventClick = { clickInfo => { setClickedEventId(clickInfo.event.id), setShow(true)} }
                      className = "bg-default-green"
                      />
                      <Modal show={show} setShow={setShow} matches={matches} clickedEventId = {clickedEventId} scores = {scores}/>
                </div>
            
        </div>    
        </Authenticated>
        );

}

export default Calendar;








