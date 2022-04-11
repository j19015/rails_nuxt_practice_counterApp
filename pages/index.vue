<template>
  <section class="container">
    <div>
      <h1>Counter App</h1>
      <p>counter{{$store.state.hello.count}}</p>
      <button v-on:click="$store.dispatch('hello/addCountAction')">+1</button>
      <button v-on:click="$store.dispatch('hello/resetCountAction')">reset</button>
      <hr/>
      <h1>Counter App</h1>
      <p>counter{{$store.state.hello.count}}</p>
      <button v-on:click="$store.dispatch('hello/addCountAction')">+1</button>
      <button v-on:click="$store.dispatch('hello/resetCountAction')">reset</button>
      <hr/>
      <h1>Counter App</h1>
      <p>counter{{$store.state.hello.count}}</p>
      <button v-on:click="$store.dispatch('hello/addCountAction')">+1</button>
      <button v-on:click="$store.dispatch('hello/resetCountAction')">reset</button>
      <hr/>
    </div>
  </section>
</template>

<script>

export default {
}
</script>
