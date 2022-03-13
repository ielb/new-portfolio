<template>
  <section>
    <!-- Contact form  -->

    <div
      id="contactme"
      class="my-20 bg-black-color flex items-center flex-col-reverse md:flex-row justify-between px-10 2xl:px-52"
    >
      <div class="md:w-1/2 w-full">
        <div class="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <h1
              class="text-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow to-green"
            >
              Contact Me
            </h1>
          </div>
          <form class="" @submit.prevent="submitForm">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                  v-model="form.firstName"
                />
                <div v-if="submited">
                  <div class="error" v-if="!$v.form.firstName.required">
                    Fist name is required
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                  v-model="form.lastName"
                />
                <div v-if="submited">
                  <div class="error" v-if="!$v.form.lastName.required">
                    Last name is required
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Email
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="email"
                  placeholder="user@mail.com"
                  v-model="form.email"
                />
                <div v-if="submited">
                  <div class="error" v-if="!$v.form.email.required">
                    Email is required
                  </div>
                  <div class="error" v-if="!$v.form.email.email">Email is invalid</div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Message
                </label>
                <textarea
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  placeholder="Your message"
                  v-model="form.message"
                ></textarea>
                <div v-if="submited">
                  <div class="error" v-if="!$v.form.message.required">
                    Message is required
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div class="flex items-center justify-between">
            <button
              class="bg-transparent w-full hover:bg-green text-green font-semibold hover:text-white py-2 px-4 border border-green hover:border-transparent rounded"
              type="button"
              @click="submitForm"
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <div class="mt-5 md:mt-0">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-9bded.appspot.com/o/assets%2Fcontact.svg?alt=media"
          alt="contact"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import { db } from "~/plugins/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      },
      submit: false,
    };
  },
  validations: {
    form: {
      firstName: {
        required,
      },
      lastName: {
        required,
      },
      email: {
        required,
        email,
      },
      message: {
        required,
      },
    },
  },
  computed: {
    submited: {
      get() {
        return this.submit;
      },
      set(errors) {
        this.submit = errors;
      },
    },
  },
  methods: {
    async submitForm() {
      this.submited = true;
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const { firstName, lastName, email, message } = this.form;
        const data = {
          firstName,
          lastName,
          email,
          message,
          createdAt: new Date(),
        };
        var docRef = await addDoc(collection(db, "messages"), data);

        Swal.fire({
          icon: "success",
          title: "Message sent",
        });
        this.submited = false;
        this.form.firstName = "";
        this.form.lastName = "";
        this.form.email = "";
        this.form.message = "";
      }
    },
  },
};
</script>

<style>
.error {
  color: #c33232;
  font-size: 12px;
  font-weight: bold;
}
</style>
