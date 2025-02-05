import { VFC } from 'react'
import styled from 'styled-components'
import media from '../../../../styles/media'
import { helpQustionDataType } from '../../../../type/dataType'
import { DefaultButton } from '../../../../styles/commonStyles/button/DefaultButton'
import { SText } from '../../../../styles/commonStyles/text/TextStyle'

type HiddenAnswerPropsType = {
  isClick: boolean
}

type propsType = {
  data: helpQustionDataType
  isClick: boolean
  onClick: () => void
}

export const PHelpQuestion: VFC<propsType> = ({ data, isClick, onClick }) => {
  return (
    <SComponentContainer>
      <SQuestion>
        <SSText>{'質問:' + data.qustion}</SSText>
        <DefaultButton onClick={onClick}>詳細</DefaultButton>
      </SQuestion>
      <SHiddenAnswer isClick={isClick}>
        <SText>{data.answer}</SText>
      </SHiddenAnswer>
    </SComponentContainer>
  )
}

const SComponentContainer = styled.div`
  margin: 10px;
`

const SQuestion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24px;
  font-weight: bold;
`

const SSText = styled(SText)`
  width: 600px;
  ${media.lg`
    width: 500px;
    `}
  ${media.md`
    width: 250px;
    `}
`

const SHiddenAnswer = styled.div<HiddenAnswerPropsType>`
  width: 100%;
  font-size: 24px;
  border-radius: 5px 5px 5px 5px;
  box-sizing: border-box;
  border: 3px solid;
  overflow: hidden;
  transition: 0.8s;
  height: ${(props) => (props.isClick ? 'auto' : 0)};
  opacity: ${(props) => (props.isClick ? 1 : 0)};
`
