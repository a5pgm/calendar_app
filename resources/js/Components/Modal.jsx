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
  width: 600,
  height: 230,
  bgcolor: '#F2F2F2',
  color: '#F2F2F2',
  border: '2px solid #45BF9D',
  boxShadow: 30,
  p: 4,
};

const Modal1 = (props) => {
    
  const handleShow = () => props.setShow(true);
  const handleClose = () => props.setShow(false);
  const {games,scores,clickedEventId } = props;
  var clickedMatch;
  var clickedScore;
    if (props.show){
      for(let i = 0; i < games.length; i++){
        if(clickedEventId == games[i].id){
          clickedMatch = games[i];
        }
      }
      for(let i = 0; i < scores.length; i++){
        if(clickedEventId == games[i].id){
            clickedScore = scores[i];
        }
      }

        return (
                <Modal
                  open={props.show}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >

                <Box sx ={style}>
                  <table border = "2" className = "m-auto w-4/5 bg-default-green">
                    <tr>
                      <th>第{clickedMatch.match_day}節</th>
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
                      <th>前半</th>
                      <th>{clickedScore.half_home}</th>
                      <th>  -  </th>
                      <th>{clickedScore.half_away}</th>
                    </tr>
                    <tr>
                      <th>後半</th>
                      <th>{clickedScore.full_home - clickedScore.half_home}</th>
                      <th>  -  </th>
                      <th>{clickedScore.full_away - clickedScore.half_away}</th>
                    </tr>
                    <tr>
                      <th>試合終了</th>
                      <th>{ clickedScore.full_home }</th>
                      <th>  -  </th>
                      <th>{ clickedScore.full_away }</th>
                    </tr>
                  </table>
                  <li>
                    <a href ={`show/game/${props.clickedEventId}`} target={`_blank`} rel={`noopener noreferrer`} 
                    className = "absolute px-3 py-2 right-0 mb-7 mt-3 mr-5 item-center justify-end text-default-white bg-default-black border-b-4 border-dark-green font-bold hover:bg-light-green active:border-dark-green active:scale-95 rounded shadow-md">
                    感想を書き込む
                    </a>
                  </li>
                </Box>
                </Modal>

        )
    } else {
        // console.log(props);
        return null;
    }
}

export default Modal1;
