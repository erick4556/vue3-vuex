import { createRouter, createWebHistory } from "vue-router";
import Transaction from "../components/transactions/Transaction.vue";
import Categories from "../components/category/Category.vue";
import TransactionForm from "../components/transactions/TransactionForm.vue";

const routes = [
  {
    path: "/",
    name: "Transaction",
    component: Transaction,
  },
  {
    path: "/categories",
    name: "Categories",
    component: Categories,
  },
  {
    path: "/transactions",
    name: "Transactions",
    component: TransactionForm,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
