import styles from "./ContactHeader.module.css"

const ContactHeader = () => {
  return (
    <div className={
        `container 
        ${styles.contact_section}`
    }>
      <h1>Contact Us</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero tempora cumque nulla ratione inventore aut velit enim ipsa esse similique, animi quia assumenda accusantium nobis! Quaerat dicta sint dolor.</p>
    </div>
  )
}

export default ContactHeader
