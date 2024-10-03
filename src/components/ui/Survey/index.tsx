import Button from "@/components/ui/Button"
import Form, { FormItem } from "@/components/form"
import Input from "@/components/form/Input"
import Typography from "@/components/ui/Typography"
import useScreenSize from "@/hooks/screenSize"
import useSurvey from "@/services/survey"
import { getSpan } from "@/utils/span"
import { t } from "@/utils/translate"
import { useRouter } from "next/router"
import RadioGroup from "@/components/form/RadioGroup"
import { SurveyProps } from "./types"

const Survey = ({
  code
}: SurveyProps) => {

  const router = useRouter()
  const { width } = useScreenSize()

  const {
    data,
    loading,
    isSubmitted,
    onSubmit,
    getRules
  } = useSurvey({ key: code })

  if (loading) return null

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: data['header_content'] }} />
      <div className={'p-6 md:p-12'}>
        <div className={'max-w-[1024px] mx-auto'}>
          {isSubmitted
            ? <div>
              <div dangerouslySetInnerHTML={{ __html: data['thankyou_page'] }} />
            </div>
            : <>
              <Typography type={'title'} className={'text-center'}>
                {data['title']}
              </Typography>
              <Form
                name={`survey-${router.query.key}`}
                className={'w-full'}
                onFinish={onSubmit}
              >
                <div className={'mt-6 grid grid-cols-12 gap-x-6 w-full'}>
                  {data['questions'].map(i => (
                    <div key={i.code} style={{ gridColumn: getSpan(i.span, width) }}>
                      {i.type === 'string' &&
                        <FormItem name={i.code} label={i.label} required={i.required} rules={getRules(i.validate)}>
                          <Input placeholder={i.placeholder} />
                        </FormItem>
                      }
                      {i.type === 'textarea' &&
                        <FormItem name={i.code} label={i.label} required={i.required}>
                          <Input placeholder={i.placeholder} type={'textarea'} />
                        </FormItem>
                      }
                      {i.type === 'radio' &&
                        <FormItem name={i.code} label={i.label} required={i.required}>
                          <RadioGroup
                            options={i.options}
                          />
                        </FormItem>
                      }
                    </div>
                  ))}
                </div>
                <div className={'flex flex-row justify-end mt-3'}>
                  <Button type={'primary'} htmlType={'submit'}>
                    {t('survey_button_submit')}
                  </Button>
                </div>
              </Form>
            </>
          }
        </div>
      </div>
    </>
  )
}

export default Survey