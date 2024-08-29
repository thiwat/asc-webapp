import { BlockType } from "@/enums/cms";
import useBlock from "@/services/block";
import { BlockProps } from "./types";

const Block = ({
  content,
  blockKey
}: BlockProps) => {

  const { id, data, type } = useBlock({ blockKey, content })


  if (type === BlockType.html) {
    return (
      <div id={id} dangerouslySetInnerHTML={{ __html: data.html }} className={'w-full'} />
    )
  }


  return (
    null
  )
}

export default Block