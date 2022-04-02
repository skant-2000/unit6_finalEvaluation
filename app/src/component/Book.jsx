import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from "./Books.module.css"

export default function Book() {

    const [books, setBooks] = useState()

    useEffect(() => {
        fetch("http://localhost:8000/books")
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

  return (
      <>
      {books ? (
          <div className={styles.main}>
              {books.map((item) => {
                return (
                  <div key={item._id} >
                      <img src={item.img} alt="img" />
                      <p>{item.title }</p>
                      <p>{item.author }</p>
                  </div>
                );
              })}
          </div>
      ) : null}
      </>
  )
}