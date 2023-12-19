<template>
  <div>
    <h2>Password Checker</h2>
    <input v-model="password" type="password" placeholder="Enter a password" />
    <button @click="checkPassword">Check</button>
    <p>Password Strength: {{ strength }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: "",
      strength: ""
    };
  },
  methods: {
    checkPassword() {
      if (this.password.length < 6) {
        this.strength = "Weak";
      } else if (this.password.length < 10) {
        this.strength = "Medium";
      } else {
        this.strength = "Strong";
      }
    }
  }
};
</script>