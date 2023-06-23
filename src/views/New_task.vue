<template>
  <div>
    <h1>New</h1>
    <task-form @createOrUpdate="createOrUpdate"></task-form>
  </div>
</template>

<script>
import TaskForm from "@/components/TaskForm.vue";
import { api } from "../helpers/Helpers";
import router from "@/router";

export default {
  name: "new-task",
  components: {
    "task-form": TaskForm,
  },
  methods: {
    createOrUpdate: async (task) => {
      const res = await api.createtask(task);
      router.push(`/tasks/${res._id}`);
    },
  },
};
</script>

<style></style>
