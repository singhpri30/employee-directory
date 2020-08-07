import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    
     <header className="w-100 jumbotron mt-2 h-25 bg-info">
       <h2 className="text-center  mt-2"><FontAwesomeIcon icon={faAddressBook} /> Employee Directory</h2>
     </header>
    
  )
}
