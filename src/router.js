/**
 * Vue Routerの設定
 */

//ルーティング対象のコンポーネントをインポート
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Gallery from './pages/Gallery.vue';
import Skills from './pages/Skills.vue';
import { createRouter, createWebHistory } from 'vue-router';

//Vue Routerを使用することを宣言

//ルーティング設定をまとめたオブジェクトを作成
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    /**
     * ルーティングの設定
     * @param path - パス
     * @param name - ルーティング名
     * @param component - ルーティング対象のコンポーネント
     * @param props - コンポーネントにデータを渡すかどうか
     * @param children - 子ルート
     */
    {
      path: '/',
      name: 'home',
      component: Home,
      props: true,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery,
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills,
    },
  ],
});
//ルーティング設定をエクスポート
export default router;
