<template>
  <section class="contact-section" id="contact" aria-labelledby="contact-title">
    <div class="container">
      <h2 class="section-title" id="contact-title">Contact</h2>
      <form class="contact-form" @submit.prevent="formSubmit" novalidate>
        <div class="form-item">
          <input
            type="text"
            id="fullname"
            v-model="fullName"
            :class="{ invalid: submitted && fullName === '' }"
          />
          <label :class="{ active: fullName !== '' }" for="fullname">
            Fullname
            <span v-if="submitted && fullName === ''">- is required*</span>
          </label>
        </div>

        <div class="form-item">
          <input
            type="email"
            id="email"
            v-model="email"
            :class="{ invalid: submitted && (email === '' || emailStatus) }"
          />
          <label :class="{ active: email !== '' }" for="email">
            Email&nbsp;
            <span v-if="submitted && email === ''">- is required*</span>
            <span v-if="submitted && emailStatus">- invalid email</span>
          </label>
        </div>

        <div class="form-item full-w">
          <textarea
            id="message"
            v-model="message"
            :class="{ invalid: submitted && message === '' }"
          ></textarea>
          <label :class="{ active: message !== '' }" for="message">
            Message <span v-if="submitted && message === ''">- is required*</span>
          </label>
        </div>

        <button type="submit" class="submit-button">
          <span v-if="btnDefault" class="text">send</span>
          <span v-if="btnLoading" class="loader"></span>
          <i v-if="btnSuccess" class="fa-solid fa-check"></i>
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import emailjs from 'emailjs-com'

const fullName = ref('')
const email = ref('')
const message = ref('')
const submitted = ref(false)
const emailStatus = ref(false)

const btnDefault = ref(true)
const btnLoading = ref(false)
const btnSuccess = ref(false)

const validateEmail = (emailValue: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(emailValue.toLowerCase())
}

const formSubmit = async () => {
  submitted.value = true
  const isValid = fullName.value !== '' && email.value !== '' && message.value !== ''
  emailStatus.value = email.value !== '' && !validateEmail(email.value)
  if (!isValid || emailStatus.value) return

  const params = {
    user_name: fullName.value,
    user_email: email.value,
    user_message: message.value,
  }

  btnDefault.value = false
  btnLoading.value = true

  try {
    await emailjs.send(
      'service_5oxskh4',
      'template_ubdp51h',
      params,
      'wbStjN6pVz7MYmF3r'
    )
    btnLoading.value = false
    btnSuccess.value = true

    setTimeout(() => {
      btnSuccess.value = false
      btnDefault.value = true
      fullName.value = ''
      email.value = ''
      message.value = ''
      submitted.value = false
    }, 1000)
  } catch (err) {
    console.error('Error sending email:', err)
    btnLoading.value = false
    btnDefault.value = true
  }
}
</script>
