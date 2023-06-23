<template>
  <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out both fields!</p>
    <div class="ui labeled input fluid">
      <div class="ui label"><i class="calendar plus icon"></i> Tasks</div>
      <input type="text" placeholder="Enter task..." v-model="localTask1" />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label"><i class="info circle icon"></i> Details</div>
      <input type="text" placeholder="Enter details..." v-model="localTask2" />
    </div>
    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
export default {
  name: "task-form",
  props: {
    task: {
      type: Object,
      required: false,
      default: () => {
        return {
          task1: "",
          task2: "",
        };
      },
    },
  },
  data() {
    return {
      errorsPresent: false,
      localTask1: this.task.task1,
      localTask2: this.task.task2,
      thisTask: this.task,
    };
  },
  methods: {
    onSubmit: function () {
      if (this.localTask1 === "" || this.localTask2 === "") {
        this.errorsPresent = true;
      } else {
        const data = {
          task1: this.localTask1,
          task2: this.localTask2,
        };
        this.$emit("createOrUpdate", data);
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
