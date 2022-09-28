import React from 'react'
import styles from '../styles/Card.module.css'
import { Col } from 'react-bootstrap'

function CardPrincipal({ dado }) {
  return (
    <Col>
      <div className={styles.col}>
        <section type="card" className={styles.card}>
          <h3 className={styles.textTitle}>{dado.name}</h3>
          <h4 className={styles.textBody}><a className={styles.a} href={dado.link}>{dado.value}</a></h4>
        </section>
      </div>
    </Col>
  )
}

export default CardPrincipal