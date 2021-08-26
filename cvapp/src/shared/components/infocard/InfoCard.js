import './InfoCard.css';
import React, { useState } from 'react';


function InfoCard(props) {

  const content = 'This is what i DoThis is what i DoThis is what i DoThis is Lore IpsumDoThis is Lore Ipsum  iDoThis is Lore Ipsum  DoThisDoThis is Lore Ipsum  what DoThisDoThis is Lore Ipsum  what DoThisDoThis is Lore Ipsum  what DoThis is what i DoThis is what i DoThis is what i DoThis is what i DoThis is what i DoThis is what i DoThis is what i DoThis is what i Do';
  // const data = [
  //   {
  //     id: 1,
  //     title: 'Habilidad 1',
  //     subtitle: 'Carpinteria',
  //     amount: 5
  //   },
  //   {
  //     id: 2,
  //     title: 'Habilidad 2',
  //     subtitle: 'Programacion',
  //     amount: 2
  //   }
  // ];

  const [enteredTitle, setEnteredTitle] = useState('')

  const cambiaTitulo = (event) => {
    // console.log('cambia', event.target.value)
    setEnteredTitle(event.target.value)
  }


  const submitFormHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
    };

    props.onSaveDataForm(expenseData);
    setEnteredTitle('NEW');
  };

  return (

    <div className="InfoCard">

      <form onSubmit={submitFormHandler}>
        <input type="text" onChange={cambiaTitulo} />
      </form>

      <div>
        {enteredTitle}
      </div>

      {(props.title != null) && <div className="InfoCard-title">{props.title}</div>}

      <div className="separator-left"></div>

      {((props.subtitle != null) || (props.startDate != null) || (props.endDate != null)) &&
        <div className="InfoCard-wrapper">
          <div className="InfoCard-subtitle">{props.subtitle}</div>
          <div className="InfoCard-time"> {props.startDate} {props.endDate} </div>
        </div>}

      <div className="InfoCard-content">
        <div>{content}</div>
      </div>

    </div>

  );
}

export default InfoCard;
