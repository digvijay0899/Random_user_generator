const app = Vue.createApp({
  data() {
    return {
      firstName: "Digvijay",
      lastName: "Ahirrao",
      email: "djahirrao@gmail.com",
      gender: "male",
      picture:
      "https://yt3.ggpht.com/ytc/AKedOLSDJKyTQuYBdsYJBFTf7zzHPe03VsYtS4LgkL9Lpa0=s900-c-k-c0x00ffffff-no-rj",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();
      //console.log(results)

      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
    },
  },
});
app.mount("#app");
