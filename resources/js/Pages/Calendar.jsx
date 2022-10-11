import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";

import FullCalendar,{ DateSelectArg, EventApi, EventClickArg,} from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import jaLocale from '@fullcalendar/core/locales/ja'; 

const Calendar = (props) => {

    const [show, setShow] = useState(false);
    const { games,matches } = props;
    // console.log(props);
    
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
                    //   eventClick = {Modal}
                    //   eventClick2 = {eventClick}
                    eventClick = { eventClick }
                      />
                      <Modal show={show} setShow={setShow} matches={matches} />
                    </div>
                </div>
            </div>
            
        </Authenticated>
        );

}

export default Calendar;

const eventClick = (props) => {
    window.open("show/" + props.event.id,"_blank");
    // window.location.href = "show/" + props.event.id;
}




const Modal = (props) => {
    // const { games,matches } = props;
    if (props.show){
        console.log(props);
        return (
            <div id = "overlay">
                <div id ="content">
                    <p>これがモーダルウィンドウです。</p>
                    <p>{ props.matches[1].home_team_id } </p>
                    <button onClick={() => props.setShow(false)}>close</button>
                </div>
            </div>
        )
    } else {
        // console.log(props);
        return null;
    }
}

