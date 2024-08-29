import usePage from "@/services/page";
import Block from "../Block";
import { PageProps } from "./types";

const Page = ({ pageKey }: PageProps) => {

  const { blocks } = usePage({ pageKey })

  return (
    <>
      {blocks.map((i, index) => (
        <Block
          key={`block-${index}`}
          content={i}
        />
      ))}
    </>
  )
}

export default Page