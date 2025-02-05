import { VFC } from 'react'
import { Loading } from './Loading'
import { booleanState } from '../../state/atom'
import { booleanStateKey } from '../../constant/stateKey'
import { useGetActions } from '../../hooks/useGetActions'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

type propsType = {
  children: React.ReactNode
}

export const SetInitialState: VFC<propsType> = ({ children }) => {
  const [isComplete, setIsComplete] = useRecoilState(booleanState(booleanStateKey.isComplete))
  const { auth, setAllInitialData } = useGetActions()

  useEffect(() => {
    const promise = auth()
    promise.then((isLogin) => {
      if (isLogin) {
        const promiseArray = setAllInitialData()
        Promise.all(promiseArray).then(() => {
          setIsComplete(true)
        })
      } else {
        setIsComplete(true)
      }
    })
  }, [])

  return <>{isComplete ? children : <Loading />}</>
}
