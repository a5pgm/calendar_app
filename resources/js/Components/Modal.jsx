import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from '@inertiajs/inertia-react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Modal1 = (props) => {
    
  const handleShow = () => props.setShow(true);
  const handleClose = () => props.setShow(false);
  const {matches,scores } = props;
  var clickedMatch;
  var clickedScore;
    if (props.show){
      for(let i = 0; i < matches.length; i++){
        if(props.clickedEventId == matches[i].id){
          clickedMatch = matches[i];
          clickedScore = scores[i];
          console.log(clickedMatch);
        }
      }
        console.log("four",props.clickedEventId);
        return (
                <Modal
                  open={props.show}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >

                <Box sx ={style}>
                <table border = "1">
                <tr>
                  <th>  </th>
                  <th>ホーム</th>
                  <th> </th>
                  <th>アウェイ</th>
                </tr>
                <tr>
                  <th>  </th>
                  <th> {clickedMatch.home_team.name} </th>
                  <th> </th>
                  <th> {clickedMatch.away_team.name} </th>
                </tr>
                <tr>
                  <th>ハーフタイム</th>
                  <th>{clickedScore.half_home}</th>
                  <th> - </th>
                  <th>{clickedScore.half_away}</th>
                </tr>
                <tr>
                  <th>フルタイム</th>
                  <th>{clickedScore.full_home}</th>
                  <th> - </th>
                  <th>{clickedScore.full_away}</th>
                </tr>
                  </table>
                <a href ={`show/${props.clickedEventId}`} target={`_blank`} rel={`noopener noreferrer`}>感想を書き込む</a>
                </Box>
                </Modal>

        )
    } else {
        // console.log(props);
        return null;
    }
}

export default Modal1;

                // <div id = "overlay">
                //     <div id ="content">
                //         <p>これがモーダルウィンドウです。</p>
                //         <p>{ props.matches[1].home_team_id } </p>
                //         <button onClick={() => props.setShow(false)}>close</button>
                //         <Button onClick={handleOpen}>Open modal</Button>
                // <div>{props.clikedEventId}</div>

                //     </div>
                // </div>