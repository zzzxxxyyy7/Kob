<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
        <div class="container">
            <router-link class="navbar-brand" :to="{name:'home'}">King Of Bots</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bwadas-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">ddad
                <li class="nav-item">
                <router-link :class="route_name == 'battle' ? 'nav-link active' : 'nav-link'" :to="{name:'battle'}">对战</router-link>
                </li>
                <li class="nav-item">
                <router-link :class="route_name == 'record' ? 'nav-link active' : 'nav-link'" :to="{name:'record'}" >对局列表</router-link>
                </li>
                <li class="nav-item">
                <router-link :class="route_name == 'rate' ? 'nav-link active' : 'nav-link'" :to="{name:'rate'}" >排行榜</router-link>
                </li>
                <li class="nav-item">
                <router-link :class="route_name == 'ent' ? 'nav-link active' : 'nav-link'" :to="{name:'ent'}" >活动</router-link>
                </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Rhss</a>
                <ul class="dropdown-menu">
                <li><router-link class="dropdown-item" :to="{name:'PersonInfo'}">个人信息</router-link></li>
                <li><router-link class="dropdown-item" :to="{name:'bot'}">我的Bot</router-link></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">退出登录</a></li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>


<script>
import { useRoute } from 'vue-router';
import { computed } from '@vue/reactivity';

export default{
    setup(){
        const route = useRoute();
        let route_name = computed(() => route.name);
        return {
            route_name
        }    
    }
}
</script>

<style>
</style>
