<template>
  <div>
    <h1>Show task</h1>
    <div class="ui labeled input fliud">
      <div class="ui label"><i class="tasks icon"></i> Task</div>
      <input type="text" disabled :value="task.task1" />
    </div>
    <div class="ui labeled input fliud">
      <div class="ui label"><i class="info circle icon"></i> Details</div>
      <input type="text" disabled :value="task.task2" />
    </div>
    <div class="action">
      <router-link :to="{ name: 'edit', params: { id: this.$route.params.id } }"
        >Edit task</router-link
      >
    </div>
  </div>
</template>

<script>
import { api } from "@/helpers/Helpers";
export default {
  name: "show_task",
  data() {
    return {
      task: "",
    };
  },
  async mounted() {
    this.task = await api.gettask(this.$route.params.id);
  },
};
</script>

<style scoped>
.action a {
  display: block;
  text-decoration: underline;
  margin: 20px 10px;
}
</style>
