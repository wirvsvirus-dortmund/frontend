// see https://vuejsdevelopers.com/2020/01/06/handling-events-vue-js/#custom-events
// this is just another global vue instance, we will use to emit and receive events
// anywhere in the component tree
import Vue from "vue"
export default new Vue()
