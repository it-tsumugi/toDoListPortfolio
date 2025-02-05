import { VFC } from 'react'
import { SetterOrUpdater } from 'recoil'
import { NavButton } from '../../../styles/commonStyles/button/NavButton'
import { FormCard } from '../../../styles/commonStyles/card/FormCard'
import { ActionButton } from '../../../styles/commonStyles/button/ActionButton'
import { DefaultTextField } from '../../atoms/form/DefaultTextField'
import { path } from '../../../constant/path'
import { SActionText } from '../../../styles/commonStyles/text/TextStyle'

type propsType = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  group: string
  groupError: string
  setGroup: SetterOrUpdater<string>
}

export const PEditGroup: VFC<propsType> = ({ onSubmit, group, groupError, setGroup }) => {
  return (
    <>
      <SActionText>グループ名を編集してください</SActionText>
      <FormCard>
        <form onSubmit={onSubmit}>
          <DefaultTextField
            name="group"
            value={group}
            label="グループ名"
            type="text"
            error={Boolean(groupError)}
            helperText={groupError}
            onChange={(e) => setGroup(e.target.value)}
          />
          <ActionButton type="submit">決定</ActionButton>
        </form>
      </FormCard>
      <NavButton to={path.group}>グループの一覧</NavButton>
    </>
  )
}
