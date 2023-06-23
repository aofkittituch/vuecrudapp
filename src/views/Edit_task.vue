<template>
  <div>
    <h1>Edit task</h1>
    <form action="#" @submit.prevent="onEdit">
      <div class="ui labeled input fluid">
        <div class="ui label"><i class="calendar plus icon"></i> Tasks</div>
        <input type="text" placeholder="Enter task..." v-model="task.task1" />
      </div>
      <div class="ui labeled input fluid">
        <div class="ui label"><i class="info circle icon"></i> Details</div>
        <input
          type="text"
          placeholder="Enter details..."
          v-model="task.task2"
        />
      </div>
      <button class="positive ui button">Save</button>
    </form>
  </div>
</template>

<script>
import { api } from "@/helpers/Helpers";
import router from "@/router";

export default {
  name: "edit_task",
  data() {
    return {
      task: {},
    };
  },
  methods: {
    onEdit: async function () {
      await api.updatetask(this.task);
      router.push(`/tasks/${this.task._id}`);
    },
  },
  async mounted() {
    this.task = await api.gettask(this.$route.params.id);
  },
};
</script>

<style></style>
