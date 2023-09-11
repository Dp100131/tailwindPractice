import Bubble from '@/components/icons/Bubble'

export default function Home() {
  return (
    <>
      <div class="chat-notification">
        <div  class="chat-notification-logo-wrapper">
          <Bubble />
        </div>
        <div class="chat-notification-content">
          <h4 class="chat-notification-title">ChitChat</h4>
          <p class="chat-notification-message">You have a new message!</p>
        </div>
      </div>
    </>
  )
}
