import React from 'react'
import styles from '../styles/Card.module.css'
import { Col } from 'react-bootstrap'

function CardPrincipal({ dado }) {
  return (
    <Col>
      <div className={styles.col}>
        <section type="card" className={styles.card}>
          <p className={styles.textTitle}>{dado.name}</p>
          <p className={styles.textBody}><a className={styles.a} href={dado.link}>{dado.value}</a></p>
        </section>
      </div>
    </Col>
  )
}

export default CardPrincipal