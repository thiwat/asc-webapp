import React from 'react'
import { ListProps } from "./types";


const List = ({
  data,
  renderItem,
  extractKey,
}: ListProps) => {

  return (
    <div className={'space-y-6'}>
      {data.map((i, index) => (
        <React.Fragment key={extractKey(i, index)}>
          {renderItem(i, index)}
        </React.Fragment>
      ))}
    </div >
  )
}

export default List