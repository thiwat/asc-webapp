import _isEmpty from 'lodash/isEmpty'
import useUpload from "@/hooks/upload";
import { UploadProps } from "./types";
import Image from 'next/image';
import { t } from '@/utils/translate';

const Upload = ({
  value,
  code,
  path,
  title,
  description,
  onChange
}: UploadProps) => {

  const {
    dragOver,
    preventEvent,
    onDrop,
    onDragLeave,
    onDragOver
  } = useUpload({
    path,
    onChange,
  })

  return (
    <div className={'flex flex-col items-center'}>
      <label htmlFor={code || 'upload'} className={'flex flex-col items-center'}>
        <div
          className={`h-[100px] w-[100px] overflow-hidden flex justify-center rounded-lg ${dragOver ? 'bg-secondary-200' : 'bg-secondary-50'}`}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDragEnter={preventEvent}
          onDrop={onDrop}
        >
          {_isEmpty(value) &&
            <Image
              src={'/images/upload.svg'}
              alt={'uload'}
              width={50}
              height={42}
            />
          }
          {!_isEmpty(value) &&
            <img
              src={value?.url || value?.image_data}
              className={`h-full w-full object-cover`}
            />
          }
        </div>
        <div className={'text-lg font-medium mt-3'}>
          {title || t('upload_title')}
        </div>
        <div className={'font-semilight text-sm text-neutral-500'}>
          {description || t('upload_description')}
        </div>
        <input type='file' id={code || 'upload'} className={'hidden'} onChange={onDrop} accept={'image/*'} />
      </label>
    </div>
  )
}

export default Upload