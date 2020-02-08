<template>
    <div>
        hello
        <router-link to="/page1"> page1</router-link>   
        <router-link to="/page2"> page2</router-link> 
        <router-link to="/login"> login</router-link> 
        <br/>

        <transition name="fade"	mode="out-in">
			<router-view></router-view>
		</transition>
    </div>
</template>
<script>
import _ from "lodash";

export default {
    data(){
        return {
            name:'wwww'
        }
    }
    
}
  
</script>