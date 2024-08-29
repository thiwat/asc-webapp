import { useState } from "react";
import { OrderServiceProps } from "./types";
import { OrderStep } from "@/enums/step";
import toast from "react-hot-toast";
import { t } from "@/utils/translate";
import { useRequest } from "ahooks";
import { requestUploadAttachment } from "@/apis/client/attachment";
import { requestUploadSlip } from "@/apis/client/order";

const useOrder = ({ orderNo, onClose }: OrderServiceProps) => {

  const [step, setStep] = useState<OrderStep>(OrderStep.payment)
  const [slip, setSlip] = useState<any>()

  const uploadReq = useRequest(requestUploadAttachment, {
    manual: true,
    onSuccess: (r) => {
      uploadSlipReq.run({
        order_no: orderNo,
        slip_url: r.url
      })
    }
  })

  const uploadSlipReq = useRequest(requestUploadSlip, {
    manual: true,
    onSuccess: (r) => {
      setStep(OrderStep.completed)
    }
  })

  const onNext = () => {
    if (step === OrderStep.payment) {
      return setStep(OrderStep.upload)
    }

    if (step === OrderStep.completed) {
      return onClose()
    }

    if (!slip) {
      return toast.error(t('please_upload_slip'))
    }

    uploadReq.run(slip)
  }

  const onUpload = (data: any) => {
    setSlip(data)
  }

  return {
    slip,
    step,
    onNext,
    onUpload
  }
}

export default useOrder