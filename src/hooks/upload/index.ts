import { useState } from "react";
import { UploadHookProps } from "./types";

const useUpload = ({
  path,
  onChange
}: UploadHookProps) => {

  const [dragOver, setDragOver] = useState<boolean>(false)

  const preventEvent = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const onDragOver = (e) => {
    preventEvent(e)
    setDragOver(true)
  }

  const onDragLeave = (e) => {
    preventEvent(e)
    setDragOver(false)
  }

  const onDrop = (e) => {
    preventEvent(e)
    const file = e.dataTransfer?.files[0] || e.target?.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      onChange({
        file_name: file.name,
        path,
        image_data: reader.result
      })
    };
  }

  return {
    dragOver,
    onDrop,
    preventEvent,
    onDragOver,
    onDragLeave
  }
}

export default useUpload