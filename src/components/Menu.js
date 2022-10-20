import React from 'react'
import CardComponent from './CardComponent'
import data from '../menuData.json'
import './Menu.css'
import { Link } from 'react-router-dom'


export default function Menu() {
  return (
    <section className="cbody">
      <div className="cards">

        {
          data.map((e, i) =>
            <Link to={e.path} key={i}>
              <CardComponent
                imgUrl={e.img}
                title={e.title}
                description={e.description}
                id={e.id} />
            </Link>)
        }
      </div>
    </section>
  )
}
