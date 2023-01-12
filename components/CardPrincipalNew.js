import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faBackward } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import styles from '../styles/IndexNew.module.css'


function CardPrincipalNew({ dado }) {
  const pastvalue = dado.pastValue
  if (pastvalue==null || pastvalue==0 || pastvalue==0n || pastvalue==undefined || pastvalue==false || pastvalue==NaN || pastvalue=="" || pastvalue==''){
    //Retorna sem valor passado
    return (
      <div className={styles.cards}>
        <div className="row">
          <div className="col-4 align-center"><div className={styles.sphere}></div></div>
          <div className="col-4 align-center"><h2 className={styles.h2}>{dado.name}</h2></div>
          <div className="col-4 align-center">
          <h3 className={styles.h3}><a className={styles.a} href={dado.sourceLink}><FontAwesomeIcon icon={faInfo} /> {dado.actualValue}</a></h3>
          </div>
        </div>
      </div>
  )
  } else {
    //Retorna o valor passado
    return (
      <div className={styles.cards}>
        <div className="row">
          <div className="col-4 align-items-center"><div className={styles.sphere}></div></div>
          <div className="col-4 d-flex align-items-center justify-content-center"><h2 className={styles.h2}>{dado.name}</h2></div>
          <div className="col-4 align-items-center justify-content-center">
          <h3 className={styles.h3}><a className={styles.a} href={dado.sourceLink}><FontAwesomeIcon icon={faInfo} /> {dado.actualValue}</a></h3>
          <h4 className={styles.h4}><FontAwesomeIcon icon={faBackward} /> {dado.pastValue}</h4>
          </div>
        </div>
      </div>
  )
  }
}

export default CardPrincipalNew