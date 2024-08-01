import _isEmpty from 'lodash/isEmpty'
import { useProfileState } from "@/atoms/profile"
import { useEffect } from "react"
import { useRequest } from 'ahooks'
import { requestAuthLogin } from '@/apis/client/auth'
import { requestMyProfile } from '@/apis/client/user'

const useAuth = () => {

  const [profile, setProfile] = useProfileState()

  const authRequest = useRequest(requestAuthLogin, {
    manual: true,
    onSuccess: (r) => {
      profileRequest.run()
    }
  })

  const profileRequest = useRequest(requestMyProfile, {
    manual: true,
    onSuccess: (r) => {
      setProfile(r)
    }
  })

  useEffect(() => {
    _initial()
  }, [])

  const _initial = async () => {
    authRequest.run({
      line_token: 'test'
    })
  }

  return {
    loading: _isEmpty(profile)
  }
}

export default useAuth