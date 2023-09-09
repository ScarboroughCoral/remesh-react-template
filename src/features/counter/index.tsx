import { useRemeshDomain, useRemeshQuery, useRemeshSend, useRemeshEvent } from 'remesh-react'

import { CountDomain } from './domain'
import { FC } from 'react'

export const Counter: FC = () => {
  /**
   * use remesh send for sending commands
   */
  const send = useRemeshSend()

  /**
   * read domain via useRemeshDomain
   */
  const countDomain = useRemeshDomain(CountDomain())

  /**
   * read domain query via useRemeshQuery
   */
  const count = useRemeshQuery(countDomain.query.CountQuery())

  const handleIncrement = () => {
    /**
     * send command to domain
     */
    send(countDomain.command.IncreaseCountCommand())
  }

  const handleDecrement = () => {
    /**
     * send command to domain
     */
    send(countDomain.command.DecreaseCountCommand())
  }

  const handleStartIncrease = () => {
    /**
     * send command to domain
     */
    send(countDomain.command.StartCommand('increment'))
  }

  const handleStartDecrease = () => {
    /**
     * send command to domain
     */
    send(countDomain.command.StartCommand('decrement'))
  }

  const handleStop = () => {
    /**
     * send command to domain
     */
    send(countDomain.command.StopCommand())
  }

  /**
   * listen to the domain event via useRemeshEvent
   */
  useRemeshEvent(countDomain.event.CountChangedEvent, (count) => {
    console.log(count)
  })

  return (
    <div id="container" style={{ textAlign: 'center', fontSize: 28 }}>
      <h1 id="count">{count}</h1>
      <button onClick={handleStartIncrease}>
        start increase
      </button> <button onClick={handleIncrement}>
        +1
      </button> <button onClick={handleStop}>
        stop
      </button> <button onClick={handleDecrement}>
        -1
      </button> <button onClick={handleStartDecrease}>
        start decrease
      </button>
    </div>
  )
}
