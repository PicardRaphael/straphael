export type TAnswer = string|number // Union type

export type QuizzId = number

export interface TQuizzEntry {
  id: number
  question: string
  answers: TAnswer[]
  difficulty: 'easy'|'normal'|'hard'|'impossible'
  result?: boolean|undefined
}

export interface QuestionProps {
  // children is the question message itself
  children: string
  difficulty: 'easy'|'normal'|'hard'|'impossible'
}

export interface AnswerProps {
  children: TAnswer
  checkAnswer: (p: TAnswer) => void
}

export interface QuizzProps {
  difficulty: string
}

export interface QuizzEntryProps {
  entryId: QuizzId
}

export interface AnswersProps {
  entryId: QuizzId
}

export interface CounterProps {
  value: number
}