const app = Vue.createApp({
  data() {
    return {
      task: [],
      title: "",
    };
  },

  methods: {
    setVal(val) {
      console.log(val);
    },

    addTask() {
      const newTask = {
        id: Date.now(),
        title: this.title,
      }

      if (!newTask.title.length) {
        alert("Please select a title");
      } else {
        this.task.push(newTask);
      }
    }

    

  },
});

app.mount(document.getElementById("root"));
