import { VFC } from 'react'
import styled from 'styled-components'
import { ImpSelect } from '../../molecules/select/ImpSelect/Container'
import { UrgSelect } from '../../molecules/select/UrgSelect/Container'
import { GroupSelect } from '../../molecules/select/GroupSelect/Container'
import { NavButton } from '../../../styles/commonStyles/button/NavButton'
import { AddTaskArea } from '../../organisms/task/AddTaskArea/Container'
import { ActionButton } from '../../../styles/commonStyles/button/ActionButton'
import { FormCard } from '../../../styles/commonStyles/card/FormCard'
import { SActionText } from '../../../styles/commonStyles/text/TextStyle'
import { path } from '../../../constant/path'
import { UseFormHandleSubmit } from 'react-hook-form'
import { addTaskListOnSubmitType } from '../../../type/action/addTaskListType'
import {
  addTasksAppendType,
  addTasksFieldsType,
  addTasksFormDataType,
  addTasksInsertType,
  addTasksRegisterType,
  addTasksRemoveType
} from '../../../type/action/addTasksType'

type propsType = {
  handleSubmit: UseFormHandleSubmit<addTasksFormDataType>
  onSubmit: (props: addTaskListOnSubmitType) => void
  fields: addTasksFieldsType
  append: addTasksAppendType
  remove: addTasksRemoveType
  insert: addTasksInsertType
  register: addTasksRegisterType
}

export const PAddTaskList: VFC<propsType> = ({ handleSubmit, onSubmit, fields, append, remove, insert, register }) => {
  return (
    <>
      <SActionText>リストの内容を入力してください</SActionText>
      <FormCard>
        <SForm onSubmit={handleSubmit((data, e) => onSubmit({ e, data }))}>
          <AddTaskArea fields={fields} append={append} remove={remove} insert={insert} register={register} />
          <div>
            <ImpSelect task_list_id={-1} />
            <UrgSelect task_list_id={-1} />
            <GroupSelect task_list_id={-1} />
          </div>
          <ActionButton type="submit">決定</ActionButton>
        </SForm>
      </FormCard>
      <NavButton to={path.addGroup}>グループの追加へ</NavButton>
    </>
  )
}

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
