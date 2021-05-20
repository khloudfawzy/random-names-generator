const app = Vue.createApp({
  //   template: "<h1>hello {{firstName}} who's a {{job}}</h1>",
  data() {
    return {
      firstName: "khloud",
      lastName: "fawzy",
      email: "khloud@gmail.com",
      gender: "female",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcWdBEK8HpLZOh_JNKxrIXLvgaX_tzQ4G-hg&usqp=CAU",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();
      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
    },
  },
});

//to mount it to the div in html
app.mount("#app");
