import { createRouter, createWebHistory } from "vue-router";
import Tasks_task from "../views/Tasks_task.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      redirect: "/tasks",
    },
    {
      path: "/tasks",
      name: "tasks",
      component: Tasks_task,
    },
    {
      path: "/tasks/new",
      name: "new-task",
      //Lazy Load
      component: () => import("../views/New_task.vue"),
    },
    {
      path: "/tasks/:id",
      name: "show",
      component: () => import("../views/Show_task.vue"),
    },
    {
      path: "/tasks/:id/edit",
      name: "edit",
      component: () => import("../views/Edit_task.vue"),
    },
  ],
});

export default router;
