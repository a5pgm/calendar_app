import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import jaLocale from '@fullcalendar/core/locales/ja'; 

const Calendar = (props) => {
    
    const { games } = props;
    console.log(props);
    

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
                    
                    }*/}
                    {games[1].title}
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
                      eventClick ={eventClick}
                      

                      />
                    </div>
                </div>
            </div>
            
        </Authenticated>
        );

}

export default Calendar;

function eventClick(info,props) {
    // const { matches } = props;
    
    // alert({games});
    // alert('Event: ' + games[info.event.id].match_day);
    // let matchday;
    // for(let step = 0;step <= games.length;step++) {
    //     if(games[step].id == info.event.id){
    //         matchday = games[step].match_day;
    //     }
    // }
    
    // alert('Event: ' + "a");
    // window.open(info.event.id,'_blank');

    document.link.href = info.event.id;
}


// const eventClick = (props,info) => {
//     const { games } = props;
//     alert('Event: ' + info.event.id);
// }