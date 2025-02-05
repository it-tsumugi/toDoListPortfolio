import { VFC } from 'react'
import {
  addTasksAppendType,
  addTasksFieldsType,
  addTasksInsertType,
  addTasksRegisterType,
  addTasksRemoveType
} from '../../../../type/action/addTasksType'
import { PAddTaskArea } from './Presenter'

type propsType = {
  fields: addTasksFieldsType
  append: addTasksAppendType
  remove: addTasksRemoveType
  insert: addTasksInsertType
  register: addTasksRegisterType
}

export const AddTaskArea: VFC<propsType> = ({ fields, append, remove, insert, register }) => {
  return <PAddTaskArea fields={fields} append={append} remove={remove} insert={insert} register={register} />
}
