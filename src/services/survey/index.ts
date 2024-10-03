import _reduce from 'lodash/reduce'
import { requestDetail } from "@/apis/client/entity";
import { requestSubmitSurvey } from "@/apis/client/survey";
import { Entity } from "@/enums/entity";
import { useRequest } from "ahooks";
import { useState } from "react";
import toast from "react-hot-toast";
import { SurveyServiceProps } from "./types";
import { t } from '@/utils/translate';
import { validateEmail, validateMobileNo, validateThaiCharacter } from '@/utils/rules';
import { requestUploadAttachment } from '@/apis/client/attachment';

const useSurvey = ({
  key
}: SurveyServiceProps) => {

  const [isSubmitted, setIsSubmit] = useState<boolean>(false)

  const { data, loading } = useRequest(requestDetail, {
    defaultParams: [{
      entity: Entity.survey,
      id: key
    }]
  })

  const getRules = (validate: string): any[] => {
    const result = []

    if (validate === 'phone_number') {
      result.push(validateMobileNo)
    }

    if (validate === 'email') {
      result.push(validateEmail)
    }

    if (validate === 'thai') {
      result.push(validateThaiCharacter)
    }

    return result
  }

  const submitRequset = useRequest(requestSubmitSurvey, {
    manual: true,
    onSuccess: (r) => {
      toast.success(t('survey_submit_success'))
      setIsSubmit(true)
    },
    onError: (e) => {
      toast.error(e.message)
    }
  })

  const onSubmit = async (values: any) => {
    const answers = []

    for (const key in values) {
      let ans = values[key]
      if (ans?.image_data) {
        const { url } = await requestUploadAttachment(ans)
        ans = url
      }
      answers.push({
        code: key,
        value: ans
      })
    }

    submitRequset.run({
      code: key,
      answers
    })
  }

  return {
    data: data || {},
    loading,
    isSubmitted,
    getRules,
    onSubmit
  }
}

export default useSurvey