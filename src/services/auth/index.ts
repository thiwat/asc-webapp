import _isEmpty from 'lodash/isEmpty'
import liff from '@line/liff'
import { useProfileState } from "@/atoms/profile"
import { useEffect } from "react"
import { useRequest } from 'ahooks'
import { requestAuthLogin } from '@/apis/client/auth'
import { requestMyProfile } from '@/apis/client/user'
import { useSettingsStateValue } from '@/atoms/settings'
import { useRouter } from 'next/router'
import { setLazyProp } from 'next/dist/server/api-utils'

const useAuth = () => {

  const router = useRouter()
  const settings = useSettingsStateValue()
  const [profile, setProfile] = useProfileState()

  const isIgnorePath = router.pathname === '/scan'

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
    if (isIgnorePath) {
      return
    }
    if (_isEmpty(profile)) {

      let accessToken = 'MOCK'

      if (!settings?.line?.enable_mock_mode) {

        await liff.init({
          liffId: router.pathname == '/[key]'
            ? settings.line.liff_id_register
            : settings.line.liff_id_tickets
        });

        if (!liff.isLoggedIn()) {
          return liff.login({
            redirectUri: window.location.href
          })
        }

        accessToken = await liff.getAccessToken()
      }

      authRequest.run({
        line_token: accessToken
      })
    }
  }

  return {
    loading: isIgnorePath
      ? false
      : _isEmpty(profile)
  }
}

export default useAuth