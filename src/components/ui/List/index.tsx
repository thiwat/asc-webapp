import { ListProps } from "./types";


const List = ({
  data,
  renderItem
}: ListProps) => {

  return (
    <div className={'space-y-6'}>
      {data.map((i, index) => renderItem(i, index))}
    </div >
  )
}

export default List